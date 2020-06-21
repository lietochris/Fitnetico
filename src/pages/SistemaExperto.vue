<template>
  <q-layout view="hHh lpR fFf">

    <f-header/>

    <q-page-container>
      <q-page class=" tw-flex tw-justify-center tw-items-center">

        <q-card class="tw-w-3/4 lg:tw-w-1/2">
              <q-img
        src="https://i.pinimg.com/originals/08/c0/56/08c0565934158164b8ba2fc9f7569ec2.jpg"
        :height="150"
      />
          <q-card-section class="text-center">
            <div class="text-h4 tw-my-2 text-secondary">Sistema experto</div>
          </q-card-section>

          <q-separator/>

          <q-card-section>
            <p class="tw-text-justify"> Un <span class="text-primary tw-font-bold"> Sistema Experto </span> es un sistema que emplea conocimiento humano capturado en una computadora 
              para resolver problemas que normalmente requieran de expertos humanos. Los sistemas bien diseñados 
              imitan el  proceso  de  razonamiento  que  los  expertos  utilizan  para  resolver  problemas  
              específicos. Dichos sistemas pueden ser utilizados por no-expertos para mejorar sus habilidades en 
              la resolución de problemas. Los SE también pueden ser utilizados como asistentes por expertos. Además, 
              estos sistemas pueden funcionar mejor que cualquier humano experto individualmente tomando decisiones en 
              una específica y acotada área de pericia, denominado como dominio <span class="tw-italic"> (Turban, 1995). </span></p>
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
        components: {FHeader}

        // name: 'PageName',
    }
</script>
