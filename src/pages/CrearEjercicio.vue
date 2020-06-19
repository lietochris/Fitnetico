<template>
  <div class="tw-pt-8 tw-px-8">
    <div class="tw-grid tw-grid-cols-1 text-center ">

      <div class="tw-h-2 bg-dark " style="border-top-left-radius:15px; border-top-right-radius:15px"></div>
      <div class="bg-dark tw-py-12">
      </div>
      <div class="tw-h-2 bg-dark " style="border-bottom-left-radius:15px; border-bottom-right-radius:15px"></div>

      <div class="tw-py-8">
      </div>

      <div class="tw-h-8 bg-dark " style="border-top-left-radius:15px; border-top-right-radius:15px"></div>
      <div class="tw-flex tw-justify-center recentCE">
        <div class="tw-w-1/4"></div>
        <div class="tw-w-2/4">
          <q-form @submit="onSubmit">

            <q-input lazy-rules
                     :rules="[ val => val && val.length > 0 || 'Porfavor llene el campo']"
                     color="cyan-5" input-class="text-white tw-justify-center" label-color="white"
                     class="text-white tw-pt-8" v-model="form.name" label="Nombre:" style="max-width: 800px"/>

            <q-select lazy-rules
                      :options="muscleOptions"
                      :rules="[ val => val && val.length > 0 || 'Porfavor llene el campo']"
                      color="cyan-5" input-class="text-white tw-justify-center" label-color="white"
                      class="text-white tw-pt-8" v-model="form.muscle" label="Fortalece:" style="max-width: 800px"/>

            <q-select lazy-rules
                      :options="objectiveOptions"
                      :rules="[ val => val && val.length > 0 || 'Porfavor llene el campo']"
                      color="cyan-5" input-class="text-white tw-justify-center" label-color="white"
                      class="text-white tw-pt-8" v-model="form.objective" label="Objetivo del Ejercicio:"
                      style="max-width: 800px"/>

            <div class="tw-flex tw-flex-row tw-justify-center tw-pt-8">
              <div class="text-white tw-justify-start tw-text-lg tw-pt-1">Dificultad:</div>
              <q-rating v-model="form.difficult" size="2em" color="grey" :max="4" icon="fitness_center"
                        class="tw-justify-center tw-px-2" :color-selected="ratingColors">
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

            <q-input lazy-rules
                     :rules="[ val => val && val.length > 0 || 'Porfavor llene el campo']"
                     color="cyan-5" input-class="text-white tw-justify-center" label-color="white"
                     class="text-white tw-pt-8" v-model="form.description" label="Como realizarlo:"
                     style="max-width: 800px"
                     filled type="textarea"/>

            <img class="tw-w-full" v-if="image_preview" :src="image_preview" alt=""/>
            <div v-else
                 class="tw-h-64 tw-flex tw-justify-center tw-items-center tw-border-dashed tw-border-2 tw-border-gray-500"
            >
              <q-icon color="grey-5" name="photo" size="5rem"/>
            </div>
            <q-file input-class="text-white tw-justify-center"
                    label-color="white"
                    class="text-white tw-pt-8"
                    filled
                    v-model="form.image"
                    label="Imagen individual"
                    accept=".jpg, image/*"
                    @input="onChargeImage"
            >
              <template v-slot:prepend>
                <q-icon color="white" name="add_a_photo"/>
              </template>
            </q-file>


            <div class="tw-my-8">
              <q-btn label="Guardar" type="submit" color="secondary" rounded/>
            </div>

          </q-form>
        </div>
        <div class="tw-w-1/4"></div>
      </div>
      <div class="tw-h-8 bg-dark " style="border-bottom-left-radius:15px; border-bottom-right-radius:15px"></div>

      <div class="tw-py-12"></div>

    </div>
  </div>

</template>

<script>

    export default {
        name: 'CrearEjercicio',
        data() {
            return {
                left: false,
                ratingColors: ['pink-13', 'pink-13', 'pink-13', 'pink-13', 'pink-13'],
                muscleOptions: ['Biceps', 'Triceps', 'Abdomen', 'Pecho', 'Espalda', 'Trapecio'],
                objectiveOptions: ['Tonificar cuerpo', 'Subir de peso', 'Bajar de peso'],
                form: {
                    difficult: 2
                },
                image_preview: null
            }
        },

        methods: {
            onChargeImage() {
                const reader = new FileReader();
                reader.readAsDataURL(this.form.image);
                reader.onloadend = () => this.image_preview = reader.result
            },
            async onSubmit() {
                this.$q.loading.show({
                    message: 'Guardando...',
                    sanitize: true
                });
                try {
                    await this.$store.dispatch('exercise/store', this.form);
                    return this.$q.notify({
                        message: 'Guardado correctamente',
                        color: 'green'
                    })
                } catch (e) {
                    console.error(e)
                } finally {
                    this.$q.loading.hide()
                }
            }
        }
    }
</script>

<style>
  .recentCE {
    background-image: linear-gradient(
      50deg,
      rgba(62, 56, 242, 1) 0%,
      rgba(6, 183, 172, 1) 50%,
      rgba(7, 62, 143, 1) 100%
    );
    background-size: 200% auto;
    transition: background-position 0.2s;
  }
</style>
