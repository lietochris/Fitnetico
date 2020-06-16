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
            <q-form @submit="onSubmit" @reset="onReset">
                <q-input lazy-rules
                :rules="[ val => val && val.length > 0 || 'Porfavor llene el campo']" 
                color="cyan-5" input-class="text-white tw-justify-center" label-color="white" 
                class="text-white tw-pt-8" v-model="id_ejercicio" label="ID:" style="max-width: 800px" type="number"/>
                
                <q-input lazy-rules
                :rules="[ val => val && val.length > 0 || 'Porfavor llene el campo']"
                color="cyan-5" input-class="text-white tw-justify-center" label-color="white" 
                class="text-white tw-pt-8" v-model="nombr_ce" label="Nombre:" style="max-width: 800px" />
                
                <q-input lazy-rules
                :rules="[ val => val && val.length > 0 || 'Porfavor llene el campo']"
                color="cyan-5" input-class="text-white tw-justify-center" label-color="white" 
                class="text-white tw-pt-8" v-model="musculos" label="Fortalece:" style="max-width: 800px" />
                
                <q-input lazy-rules
                :rules="[ val => val && val.length > 0 || 'Porfavor llene el campo']"
                color="cyan-5" input-class="text-white tw-justify-center" label-color="white" 
                class="text-white tw-pt-8" v-model="tipo_obj" label="Objetivo del Ejercicio:" style="max-width: 800px" />
                
                <div class="tw-flex tw-flex-row tw-justify-center tw-pt-8">
                <div class="text-white tw-justify-start tw-text-lg tw-pt-1">Dificultad:</div>
                <q-rating v-model="dificultad_ejercicio" size="2em" color="grey" :max="4" class="tw-justify-center tw-px-2" :color-selected="ratingColors">
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
                class="text-white tw-pt-8" v-model="descripci" label="Como realizarlo:" style="max-width: 800px" filled type="textarea" />
                <p></p>

                <div class="tw-flex tw-flex-col tw-my-12">
                  <div class="tw-flex tw-justify-center tw-flex-row text-center tw-px-4 tw-py-2 tw-m-2"> 
                    <div class="tw-flex">
                      <q-uploader
                      url="http://localhost:4444/upload"
                      label="Foto individual"
                      multiple
                      style="max-width: 300px"
                      />
                    </div>
                  </div>
                </div>

                <div class="tw-my-8">
                  <q-btn label="Guardar" type="submit" color="secondary" rounded/>
                  <q-btn label="Reset" type="reset" color="white" flat class="q-ml-sm" />
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
      dificultad_ejercicio: 2,
      ratingColors: [ 'pink-13', 'pink-13', 'pink-13', 'pink-13', 'pink-13' ],
      id_ejercicio: 666,
      nombr_ce: 'Push-Ups',
      musculos: 'Pectoral y Brazos',
      tipo_obj: 'Adelgazar',
      descripci: 'Mamadisima',
    }
  },

  methods: {
    onSubmit () {
      if (this.id_ejercicio == null || this.nombr_ce == null || this.musculos == null || this.tipo_obj == null || this.descripci == null || this.dificultad_ejercicio == 0) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'Termina de llenar los campos'
        })
      }
      else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Guardado'
        })
      }
    },

    onReset () {
      this.id_ejercicio = null
      this.nombr_ce = null
      this.musculos = null
      this.tipo_obj = null
      this.dificultad_ejercicio = 0
      this.descripci = null
    }
  }
}
</script>

<style>
.recentCE {
  background-image: linear-gradient(
     50deg, 
     rgba(62,56,242,1) 0%, 
     rgba(6,183,172,1) 50%, 
     rgba(7,62,143,1) 100%
  );
  background-size: 200% auto;
  transition: background-position 0.2s;
}
</style>