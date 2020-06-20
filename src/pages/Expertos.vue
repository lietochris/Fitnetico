<template>
<q-layout>
-- --
    <q-header elevated class="bg-dark text-white">
      <q-toolbar>
        <q-toolbar-title>
        <img src="https://i.ibb.co/hHZ5Qkd/logo.png" class="responsive" width="120" height="30">
        </q-toolbar-title>
                <q-space />
        <q-separator vertical />

        <q-btn to="/expertos" color="grey-4" size="10px" stretch flat label="Expertos"/>
        <q-btn to="/login" color="grey-4" size="10px" stretch flat label="Iniciar Sesión"/>
      </q-toolbar>
    </q-header>


<div class="q-pa-md row items-start q-gutter-md">

    <q-card class="my-card">
      <img src="https://i.ibb.co/mb2rtrR/Coach1.jpg">

      <q-card-section>
        <div class="text-h6">Pablo Villava Servin</div>
        <div class="text-subtitle2">Dueño Y Coach</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-h7">Lic. en Nutrición De La Universidad Del Valle De México - Fisicoculturista - Dueño de Pablo´s Gym y Monster Gym - 1° Lugar Mr México Absoluto (2005).</div>
      </q-card-section>
    </q-card>


 <q-card class="my-card">
      <img src="https://i.ibb.co/9Hbj8fp/005.jpg">

      <q-card-section>
        <div class="text-h6">Coachs</div>
        <div class="text-subtitle2">Asesores, Entrenadores y Guias.</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-h7">Contamos con el mejor equipo para asesorar, guiar y entrenar a nuestros clientes. Todos nuestros Coaches cuentan con certificación y años de experiencia en el área del ficicoculturismo.</div>
      </q-card-section>
    </q-card>


<q-card class="my-card">
      <img src="https://i.ibb.co/5FkR65M/Coach3.jpg">

      <q-card-section>
        <div class="text-h6">Esposa De Ms. Musculo</div>
        <div class="text-subtitle2">Co-Propietaria y Coach</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-h7">Ganadora de la mejor sonrisa (2015). Primer lugar en robar los corazones de los participantes Olimpia 2016.</div>
      </q-card-section>
    </q-card>

  </div>

</q-layout>
</template>

<script>
export default {
  data () {

  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  height: 60%
  max-width: 300px
  max-height: 10px


.q-pa-md row items-start q-gutter-md
  background-color: #fafafa
  border: 1px solid #ccc
  padding: 0 1rem
  margin: 1rem


.my-card
  width: 300px
  margin-left: auto
  margin-right: auto
  bottom: -40px

.q-pt-none
  background: border-box orange

</style>

