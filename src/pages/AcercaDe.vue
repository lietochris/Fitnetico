<template>
  <q-layout view="hHh lpR fFf">

    <f-header/>

    <q-page-container>
      <q-page class=" tw-flex tw-justify-center tw-items-center">

        <q-card class="tw-w-3/4 lg:tw-w-1/2">
          <q-card-section class="text-center">
            <div class="text-h4 tw-my-2 text-secondary">Desarrolladores</div>
            <div class="text-subtitle3">
              Sistema desarrollado para las clases de 'sistemas expertos' y 'análisis de sistemas'
            </div>
          </q-card-section>

          <q-separator/>

          <q-card-actions vertical>
            <q-btn flat>Cortez Sanchez Aarón</q-btn>
            <q-btn flat>Jimenez Zempoalteca Uriel</q-btn>
            <q-btn flat>Rios Díaz de León José Pablo</q-btn>
            <q-btn flat>Trevilla Figueroa Christopher</q-btn>
          </q-card-actions>
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
        components: {FHeader}

        // name: 'PageName',
    }
</script>
