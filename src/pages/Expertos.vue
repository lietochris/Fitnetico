<template>
  <q-layout>

    <f-header/>

    <q-page-container>
      <q-page class="tw-flex tw-flex-col lg:tw-flex-row tw-justify-center tw-items-center">

        <q-card class="tw-flex-1 tw-m-5">
          <q-img class="tw-h-64 tw-w-full" src="https://i.ibb.co/mb2rtrR/Coach1.jpg"/>

          <q-card-section>
            <div class="text-h6">Pablo Villava Servin</div>
            <div class="text-subtitle2">Dueño Y Coach</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-h7 tw-text-justify">Lic. en Nutrición De La Universidad Del Valle De México -
              Fisicoculturista - Dueño de
              Pablo´s Gym y Monster Gym - 1° Lugar Mr México Absoluto (2005).
            </div>
          </q-card-section>
        </q-card>


        <q-card class="tw-flex-1 tw-m-5">
          <q-img class="tw-h-64 tw-w-full" src="https://i.ibb.co/9Hbj8fp/005.jpg"/>

          <q-card-section>
            <div class="text-h6">Coaches</div>
            <div class="text-subtitle2">Asesores, Entrenadores y Guias.</div>
          </q-card-section>

          <q-card-section class="q-pt-none ">
            <div class="text-h7 tw-text-justify">Contamos con el mejor equipo para asesorar, guiar y entrenar a
              nuestros
              clientes. Todos
              nuestros Coaches cuentan con certificación y años de experiencia en el área del ficicoculturismo.
            </div>
          </q-card-section>
        </q-card>


        <q-card class="tw-flex-1 tw-m-5" style="">
          <q-img class="tw-h-64 tw-w-full" src="https://i.ibb.co/5FkR65M/Coach3.jpg"/>

          <q-card-section>
            <div class="text-h6">Esposa De Ms. Musculo</div>
            <div class="text-subtitle2">Co-Propietaria y Coach</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-h7 tw-text-justify">Ganadora de la mejor sonrisa (2015). Primer lugar en robar los
              corazones
              de los
              participantes Olimpia 2016.
            </div>
          </q-card-section>
        </q-card>


      </q-page>
    </q-page-container>


    <q-footer class="bg-dark text-white">
      <q-toolbar>
        <q-toolbar-title class="tw-flex tw-justify-center tw-text-gray-500 tw-text-xs">
          Fitnetico © 2020
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
    import FHeader from "../components/FHeader";

    export default {
        components: {FHeader},
        data() {
            return {}
        }
    }
</script>

<style scoped>

</style>

