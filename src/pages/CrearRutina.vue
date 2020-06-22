<template>
  <q-layout>
    <f-header/>
    <div class="tw-pt-12">
      <div class="flex tw-mb-4 ">
        <div class="tw-w-full" style="height:350px">
          <div class="tw-align-middle">
            <q-img style="height:350px" class="tw-h-full"
                   src="https://intpass-eu-central-1-live02-public.s3.eu-central-1.amazonaws.com/de-live/venueHome_1024x576_IMG_0649_157164444373706_admin.jpg">
              <div class="absolute-full text-subtitle2 flex flex-center">
                <div class="text-h3 text-white ">
                  Crear rutina &nbsp;
                </div>
              </div>
            </q-img>
          </div>
        </div>
      </div>

      <div class="flex tw-mb-4 tw-px-8">
        <div class="tw-w-full">
          <div class="q-pa-md">
            <q-stepper
              v-model="step"
              ref="stepper"
              color="primary"
              animated
            >
              <q-step
                :name="1"
                title="Caracteristicas del usuario"
                icon="settings"
                :done="step > 1"
              >
                <div class="tw-h-48">
                  <div class="tw-pt-4 text-center">
                    <div class="tw-py-3 tw-px-18">
                      <q-input
                        input-class="text-black"
                        bg-color="blue-grey-1"
                        type="number"
                        rounded
                        standout="bg-blue-grey-1 text-grey-8"
                        v-model="form.weight"
                        label="Peso (kg)"
                        :rules="[
              value => !!value || 'Debes ingresar tu peso',
              value => value < 200 || 'El numero que ingresaste no es valido',
              value => value > 0 || 'El numero no puede ser cero o negativo']"
                      />
                      <q-input
                        input-class="text-black"
                        bg-color="blue-grey-1"
                        type="number"
                        step="0.01"
                        rounded
                        standout="bg-blue-grey-1 text-grey-8"
                        v-model="form.height"
                        label="Estatura (m)"
                        :rules="[value => !!value || 'Debes ingresar tu estatura',
              value => value < 3 || 'El numero que ingresaste no es valido',
              value => value > 0 || 'El numero no puede ser cero o negativo'
              ]"
                      />
                    </div>
                  </div>
                </div>
              </q-step>

              <q-step
                :name="2"
                title="Objetivo"
                icon="fas fa-trophy"
                :done="step > 2"
              >
                <div class="q-pa-md">
                  <q-option-group
                    :options="options"
                    label="Notifications"
                    type="radio"
                    v-model="form.objective"
                  />
                </div>
              </q-step>

              <template v-slot:navigation>
                <q-stepper-navigation>
                  <div class="text-center">
                    <q-btn v-if="step !== 2" rounded color="primary" @click="$refs.stepper.next()" label="Continuar"/>
                    <q-btn v-if="step === 2" rounded color="primary" @click="createRoutine" label="Crear"/>
                    <q-btn rounded v-if="step > 1" @click="$refs.stepper.previous()" flat color="primary"
                           label="Regresar"/>
                  </div>
                </q-stepper-navigation>
              </template>
            </q-stepper>
          </div>
        </div>
      </div>
    </div>
    <div class="tw-py-8 bg-dark text-center tw-text-gray-500">Fitnetico 2020</div>
  </q-layout>
</template>

<script>
    import FHeader from "../components/FHeader";
    import Notify from "quasar/src/plugins/Notify";

    export default {
        name: 'CrearRutina',
        components: {FHeader},
        data() {
            return {
                step: 1,
                form: {},
                options: [
                    {label: 'Bajar de peso', value: 'Bajar de peso'},
                    {label: 'Subir de peso', value: 'Subir de peso', color: 'green'}
                ]
            }
        },
        methods: {
            async createRoutine() {
                this.$q.loading.show({
                    message: 'Creando rutina...'
                });

                try {
                    await this.$store.dispatch('routine/store', this.form)
                    Notify.create({
                        message: 'Rutina creada correctamente',
                        color: 'green',
                        position: 'top-right'
                    });
                    await this.$router.push('/rutinas')
                } finally {
                    this.$q.loading.hide();
                }
            },
            calculateIMC() {
                this.user.imc = this.user.peso / (Math.pow(this.user.estatura, 2))
                this.user.imc = this.user.imc.toFixed(2)
            },
            calculatePhyCondition() {
                switch (true) {
                    case (this.user.imc < 19):
                        this.user.condicion = 'Bajo peso'
                        break;
                    case (this.user.imc >= 19 && this.user.imc < 25):
                        this.user.condicion = 'Normal'
                        break;
                    case (this.user.imc >= 25 && this.user.imc < 30):
                        this.user.condicion = 'Sobrepeso'
                        break;
                    case (this.user.imc > 30):
                        this.user.condicion = 'Obesidad'
                        break;
                }
            }
        }
    }
</script>
