<template >
<body background="https://i.ibb.co/vs5qHRY/Fondo2.jpg">
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

<div class="text-h6">-</div>
<div class="text-h6">-</div>

  <div class="User" align="center">
    <img src="https://i.ibb.co/RNfGB7M/user.png" width="225" height="225">
    </div>   

  <div class="q-pa-md">
    <div class="q-gutter-md row items-start">
      <q-input v-model="Nombre" filled type="Nombre" hint="Nombre" />

      <q-input v-model="Apellido" filled type="Apellido" hint="Apellido" />

      <q-input v-model="date" filled type="Fecha De Nacimiento" hint="Fecha De Nacimiento" />

      <q-input v-model="Altura" filled type="Altura" hint="Altura" />

      <q-input v-model="Peso" filled type="Peso" hint="Peso" />

      <q-input v-model="tel" filled type="tel" hint="Numero Telefonico" />

      <q-input v-model="email" filled type="email" hint="Email" />

      <q-input v-model="password" filled type="Password" hint="Contraseña" />

      <q-input v-model="password" filled :type="isPwd ? 'password' : 'text'" hint="Contraseña Oculta">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
      <q-btn color="black" size="20px" stretch flat label="Registrarse"/>

      
    </div>
  </div>

    </q-layout>
    </body>
</template>

<script>
export default {
  data () {
    return {
      password: '',
      isPwd: true,

      Nombre: '',
      Apellido: '',
      Altura: '',
      Peso: '',

      email: '',
      tel: '',
      url: '',
      time: '',
      date: ''
    }
  }
}
</script>

<style lang="sass" scoped>

.q-pa-md
  margin-left: auto
  margin-right: auto
  bottom: -1000px
  
.Letra
  color: "white"

</style>