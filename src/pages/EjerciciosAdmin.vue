<template>
  <div class="tw-pt-8 tw-px-8">
    <div class="tw-grid tw-grid-cols-1 text-center ">

      <div class="tw-h-2 bg-dark " style="border-top-left-radius:15px; border-top-right-radius:15px"></div>
      <div class="bg-dark tw-py-12">
      </div>
      <div class="tw-h-2 bg-dark " style="border-bottom-left-radius:15px; border-bottom-right-radius:15px"></div>

      <div class="tw-py-8">
      </div>

      <div class="tw-flex tw-mb-4">
        <div class="tw-w-full">
          <div class="tw-flex tw-flex-row tw-flex-wrap tw-px-5 tw-mb-5">

            <div v-for="exercise in exercises" :key="exercise.id" class="tw-w-3/6 tw-p-3 ">
              <q-intersection once transition="scale">
                <div class="flex tw-mb-4">
                  <div class="tw-w-full bg-grey-4" style="border-radius: 15px">
                    <div class="tw-flex tw-flex-row">
                      <div class="tw-flex tw-justify-center tw-p-6">
                        <img
                          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/3-weighted-pushup-1495476721.jpg?crop=1xw:1xh;center,top&resize=320:*"
                          class="responsive" width="160" height="30">
                      </div>
                      <div class="tw-flex-col">
                        <div class="tw-flex tw-flex-row">
                          <p class="tw-pt-3 tw-px-2 text-black tw-text-2xl tw-break-words tw-italic text-weight-bolder">
                            {{exercise.name}}
                          </p>
                          <div class="tw-pt-2 text-white tw-text-lg tw-break-words tw-font-mono">
                          </div>
                        </div>

                        <div class="tw-flex tw-flex-row">
                          <p class="tw-px-2 text-black tw-text-lg tw-break-words tw-italic">
                            {{exercise.muscle}}
                          </p>
                          <div class="tw-pt-2 text-white tw-text-lg tw-break-words">
                          </div>
                        </div>

                        <div class="tw-flex tw-flex-row">
                          <p
                            class="tw-pt-2 tw-px-2 text-black tw-text-lg tw-break-words tw-font-mono text-weight-bolder">
                            Objetivo:
                          </p>
                          <div class="tw-pt-2 text-black tw-text-lg tw-break-words tw-font-mono">
                            {{exercise.objective}}
                          </div>
                        </div>

                        <div class="tw-flex tw-flex-row">
                          <q-rating v-model="exercise.difficult" size="2em" color="grey" :max="4" readonly
                                    class="tw-px-2"
                                    :color-selected="ratingColors">
                            <template v-slot:tip-1>
                              <q-tooltip>Facil</q-tooltip>
                            </template>
                            <template v-slot:tip-2>
                              <q-tooltip>Moderado</q-tooltip>
                            </template>
                            <template v-slot:tip-3>
                              <q-tooltip>Avanzado</q-tooltip>
                            </template>
                            <template v-slot:tip-4>
                              <q-tooltip>Intenso</q-tooltip>
                            </template>
                          </q-rating>
                        </div>

                        <div class="tw-flex tw-flex-row">
                          <p
                            class="tw-pt-2 tw-px-2 text-black tw-text-lg tw-break-words tw-font-mono text-weight-bolder">
                          </p>
                          <div class="tw-pt-2 text-black tw-text-lg tw-break-words tw-font-mono">
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </q-intersection>
            </div>

          </div>

          <div class="q-pa-lg flex flex-center tw-pt-12">
            <q-pagination v-model="page" @input="onChangePage" :max="pages" :direction-links="true"></q-pagination>

          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

    import {db} from "../config/firebase";

    export default {
        name: 'EjercicioAdmin',
        data() {
            return {
                left: false,
                ratingModel: 2,
                ratingColors: ['pink-13', 'pink-13', 'pink-13', 'pink-13', 'pink-13'],
                exercises: [],
                total: 0,
                pages: 0,
                perPage: 2,
                page: 1,
            }
        },
        created() {
            this.getExercises();
        },
        methods: {
            getExercises() {

                //Get total of exercises
                db.collection('exercises').get()
                    .then(res => {
                        this.total = res.size;
                        this.pages = Math.ceil((this.total / this.perPage))
                    });

                // Get exercises
                db.collection('exercises')
                    .limit(this.perPage)
                    .orderBy('difficult')
                    .get()
                    .then(query => {
                        query.forEach(doc => {
                            this.exercises.push({
                                id: doc.id,
                                ...doc.data()
                            })
                        })
                    })
            },
            onChangePage() {

                db.collection('exercises')
                    .orderBy('difficult')
                    .limit(this.perPage)
                    .startAfter(this.perPage * (this.page - 1))
                    .get()
                    .then(query => {

                        // Clear variable
                        this.exercises = [];

                        // Save data
                        query.forEach(doc => {
                            console.log(doc.data())
                            this.exercises.push({
                                id: doc.id,
                                ...doc.data()
                            })
                        })
                    })
                    .catch(e => console.log(e))
            }
        }
    }
</script>

<style>

</style>
