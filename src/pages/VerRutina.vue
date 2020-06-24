<template>
  <q-layout>
    <f-header/>

    <q-page-container>
      <q-page>
        <div v-if="routine">
          <div class="flex tw-mb-4">
            <div class="tw-pt-12 tw-w-full week flex flex-center text-white" style="height:300px">
              <p class="tw-mb-12 tw-text-3xl text-bold text-center">Rutina</p>
            </div>
          </div>

          <div class="flex mb-4">
            <div class="tw-w-full tw-h-16">
              <p
                class="tw-pl-8 tw-pt-4 text-bold tw-text-base sm:tw-text-lg md:tw-text-xl lg:tw-text-2xl xl:tw-text-3xl">
                Pecho</p>
            </div>
          </div>

          <div class="tw-flex tw-flex-row tw-justify-center tw-flex-wrap">

            <q-card v-for="exercise in routine.exercises.Pecho" :key="exercise.id" class="tw-w-1/5 tw-mx-3">
              <img class="tw-h-32" :src="exercise.image">

              <q-card-section>
                <div class="text-h6">{{exercise.name}}</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                {{exercise.description}}
              </q-card-section>
            </q-card>

          </div>

          <div class="flex mb-4">
            <div class="tw-w-full tw-h-16">
              <p
                class="tw-pl-8 tw-pt-4 text-bold tw-text-base sm:tw-text-lg md:tw-text-xl lg:tw-text-2xl xl:tw-text-3xl">
                Espalda</p>
            </div>
          </div>

          <div class="tw-flex tw-flex-row tw-justify-center tw-flex-wrap">

            <q-card v-for="exercise in routine.exercises.Espalda" :key="exercise.id" class="tw-w-1/5 tw-mx-3">
              <img class="tw-h-32" :src="exercise.image">

              <q-card-section>
                <div class="text-h6">{{exercise.name}}</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                {{exercise.description}}
              </q-card-section>
            </q-card>

          </div>

          <div class="flex mb-4">
            <div class="tw-w-full tw-h-16">
              <p
                class="tw-pl-8 tw-pt-4 text-bold tw-text-base sm:tw-text-lg md:tw-text-xl lg:tw-text-2xl xl:tw-text-3xl">
                Hombro</p>
            </div>
          </div>

          <div class="tw-flex tw-flex-row tw-justify-center tw-flex-wrap">

            <q-card v-for="exercise in routine.exercises.Hombro" :key="exercise.id" class="tw-w-1/5 tw-mx-3">
              <img class="tw-h-32" :src="exercise.image">

              <q-card-section>
                <div class="text-h6">{{exercise.name}}</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                {{exercise.description}}
              </q-card-section>
            </q-card>

          </div>

          <div class="flex mb-4">
            <div class="tw-w-full tw-h-16">
              <p
                class="tw-pl-8 tw-pt-4 text-bold tw-text-base sm:tw-text-lg md:tw-text-xl lg:tw-text-2xl xl:tw-text-3xl">
                Biceps</p>
            </div>
          </div>

          <div class="tw-flex tw-flex-row tw-justify-center tw-flex-wrap">

            <q-card v-for="exercise in routine.exercises.Biceps" :key="exercise.id" class="tw-w-1/5 tw-mx-3">
              <img class="tw-h-32" :src="exercise.image">

              <q-card-section>
                <div class="text-h6">{{exercise.name}}</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                {{exercise.description}}
              </q-card-section>
            </q-card>

          </div>

          <div class="flex mb-4">
            <div class="tw-w-full tw-h-16">
              <p
                class="tw-pl-8 tw-pt-4 text-bold tw-text-base sm:tw-text-lg md:tw-text-xl lg:tw-text-2xl xl:tw-text-3xl">
                Triceps</p>
            </div>
          </div>

          <div class="tw-flex tw-flex-row tw-justify-center tw-flex-wrap">

            <q-card v-for="exercise in routine.exercises.Triceps" :key="exercise.id" class="tw-w-1/5 tw-mx-3">
              <img class="tw-h-32" :src="exercise.image">

              <q-card-section>
                <div class="text-h6">{{exercise.name}}</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                {{exercise.description}}
              </q-card-section>
            </q-card>

          </div>

          <div class="flex mb-4">
            <div class="tw-w-full tw-h-16">
              <p
                class="tw-pl-8 tw-pt-4 text-bold tw-text-base sm:tw-text-lg md:tw-text-xl lg:tw-text-2xl xl:tw-text-3xl">
                Trapecio</p>
            </div>
          </div>

          <div class="tw-flex tw-flex-row tw-justify-center tw-flex-wrap">

            <q-card v-for="exercise in routine.exercises.Trapecio" :key="exercise.id" class="tw-w-1/5 tw-mx-3">
              <img class="tw-h-32" :src="exercise.image">

              <q-card-section>
                <div class="text-h6">{{exercise.name}}</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                {{exercise.description}}
              </q-card-section>
            </q-card>

          </div>

          <div class="tw-h-32"></div>

        </div>
        <div v-else
             class="tw-min-h-screen tw-flex tw-justify-center tw-items-center text-secondary tw-font-semibold tw-text-5xl">
          No existe esa rutina
        </div>
      </q-page>
    </q-page-container>

    <q-footer class="bg-dark text-white">
      <q-toolbar>
        <q-toolbar-title class="tw-flex tw-justify-center tw-items-center tw-text-gray-500 tw-text-xs">
          Fitnetico © 2020
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
    import FHeader from "../components/FHeader";

    export default {
        name: 'VerRutina',
        components: {FHeader},
        data() {
            return {}
        },
        computed: {
            routine() {
                return this.$store.state.routine.routine;
            }
        },
        created() {
            this.$store.dispatch('routine/show', this.$route.params.id);
        }

    }
</script>

<style>
  .week {
    background-image: linear-gradient(
      50deg,
      rgba(62, 56, 242, 1) 0%,
      rgba(118, 46, 202, 1) 41%,
      rgba(156, 39, 176, 1) 100%
    );;
    background-size: 200% auto;
    transition: background-position 0.2s;
  }

  .header {
    background-image: linear-gradient(
      550deg,
      rgba(62, 56, 242, 1) 0%,
      rgba(118, 46, 202, 1) 41%,
      rgba(156, 39, 176, 1) 100%
    );
    border-radius: 10px;
    background-size: 200% auto;
    transition: background-position 0.2s;
  }
</style>
