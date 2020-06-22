<template>
  <q-layout view="hHh lpR fFf">

    <f-header/>
<div class="bg-grey-3">
    <q-page-container>
      <q-page class=" tw-flex tw-justify-center tw-items-center">

        <q-card class="tw-w-3/4 lg:tw-w-1/2" style="border: 1px solid #ccc">
                  <q-card-section class="text-center">
            <div class="text-h4 tw-my-2 text-secondary  tw-font-sans">Panel de administrador</div>
          </q-card-section>
          <q-separator/>
              <q-img
        src="https://image.freepik.com/vector-gratis/ilustracion-concepto-trabajo_114360-330.jpg"
         height="400px" w
      />
          <q-separator/>

          <q-card-section>

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
</div>
  </q-layout>
</template>

<script>
    import FHeader from "../components/FHeader";

    export default {
        components: {FHeader}

        // name: 'PageName',
    }
</script>
