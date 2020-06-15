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
                <q-input color="cyan-5" input-class="text-white tw-justify-center" label-color="white" class="text-white tw-pt-8" v-model="nombr_ce" label="Nombre:" style="max-width: 800px" />
                <q-input color="cyan-5" input-class="text-white tw-justify-center" label-color="white" class="text-white tw-pt-8" v-model="fortalec" label="Fortalece:" style="max-width: 800px" />
                <q-input color="cyan-5" input-class="text-white tw-justify-center" label-color="white" class="text-white tw-pt-8" v-model="equip" label="Equipo:" style="max-width: 800px" />
                <div class="tw-flex tw-flex-row tw-justify-center tw-pt-8">
                <div class="text-white tw-justify-start tw-text-lg tw-pt-1">Dificultad:</div>
                <q-rating v-model="ratingModel" size="2em" color="grey" :max="4" class="tw-justify-center tw-px-2" :color-selected="ratingColors">
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
                <q-input color="cyan-5" input-class="text-white tw-justify-center" label-color="white" class="text-white tw-pt-8" v-model="descripci" label="Como realizarlo:" style="max-width: 800px" filled type="textarea" />
                <p></p>

                <div class="tw-flex tw-flex-col tw-bg-gray-700 tw-bg-opacity-25 tw-my-12">
                  <div class="tw-flex tw-justify-center tw-flex-row text-center tw-px-4 tw-py-2 tw-m-2"> 
                    <div class="tw-flex">
                      <q-uploader
                      url="http://localhost:4444/upload"
                      label="Individual upload"
                      multiple
                      style="max-width: 300px"
                      />
                    </div>
                  </div>
                  <div class="tw-flex tw-justify-center tw-flex-row text-center tw-px-4 tw-py-2 tw-m-2"> 
                    <div class="tw-flex">
                      <q-uploader
                      url="http://localhost:4444/upload"
                      label="Individual upload"
                      multiple
                      style="max-width: 300px"
                      />
                    </div>
                  </div>
                  <div class="tw-flex tw-justify-center tw-flex-row text-center tw-px-4 tw-py-2 tw-m-2"> 
                    <div class="tw-flex">
                      <q-uploader
                      url="http://localhost:4444/upload"
                      label="Individual upload"
                      multiple
                      style="max-width: 300px"
                      />
                    </div>
                  </div>
                  <div class="tw-flex tw-justify-center tw-flex-row text-center tw-px-4 tw-py-2 tw-m-2"> 
                    <div class="tw-flex">
                      <q-uploader
                      url="http://localhost:4444/upload"
                      label="Individual upload"
                      multiple
                      style="max-width: 300px"
                      />
                    </div>
                  </div>
                </div>
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
      ratingModel: 4,
      ratingColors: [ 'pink-13', 'pink-13', 'pink-13', 'pink-13', 'pink-13' ],
      nombr_ce: 'Push-Ups',
      fortalec: 'Pectoral y Brazos',
      equip: 'No requerido',
      direccion: 'Avenida siempre viva',
      descripci: 'Mamadisima',
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