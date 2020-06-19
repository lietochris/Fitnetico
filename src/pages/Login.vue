<template>
<body background="https://i.ibb.co/4MRDFvb/Fondo0.jpg">
  <q-layout >

    <q-header elevated class="bg-dark text-white">
      <q-toolbar>
        <q-toolbar-title>
        <img src="https://i.ibb.co/hHZ5Qkd/logo.png" class="responsive" width="120" height="30">
        </q-toolbar-title>
                <q-space />
        <q-separator vertical /> 
        <q-btn color="grey-4" size="10px" stretch flat label="Expertos"/>
        <q-btn color="grey-4" size="10px" stretch flat label="Iniciar Sesión"/>
      </q-toolbar> 
    </q-header>


  <div class="q-pa-md">
    <q-card class="my-card">

      <q-card-section>
        <div class="text-h6" align="center">INICIAR SESIÓN</div>
        <div class="text-subtitle2" align="center">Listo Para Entrenar?</div>
      </q-card-section>

      <q-tabs v-model="tab" class="text-teal">
        <q-tab label="Usuario" name="one" />
        <q-tab label="Administrador" name="two" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="one">

          <div class="User" align="center">
            <img src="https://i.ibb.co/fNhFGs6/exercisrre.png" width="150" height="150">
          </div>  

          <q-input v-model="Usuario" filled type="Usuario" hint="Usuario" />
          <q-input v-model="password" filled :type="isPwd ? 'password' : 'text'" hint="Contraseña">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
          </q-input>


        </q-tab-panel>

        <q-tab-panel name="two">
          <div class="User" align="center">
            <img src="https://i.ibb.co/4Tbr1ff/gamer.png" width="150" height="150">
          </div>  
          <q-input v-model="Usuario" filled type="Usuario" hint="Administrador" />
          <q-input v-model="password" filled :type="isPwd ? 'password' : 'text'" hint="Contraseña">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
          </q-input>
        </q-tab-panel>

      </q-tab-panels>
    </q-card>
  </div>

</q-layout>
</body>
</template>

<script>
export default {
  data () {
    return {
      Usuario: '',
      password: '',
      isPwd: true,


      tab: 'one'
      
    }
  }
}
</script>


<style lang="sass" scoped>
.my-card
  width: 100%
  height: 100%
  max-width: 250px
  margin-left: auto
  margin-right: auto
  bottom: -60px
</style>