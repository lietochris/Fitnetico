<template>
    <q-layout>

    <q-header elevated class="bg-dark text-white">
      <q-toolbar>
        <q-toolbar-title>
        <img src="https://i.ibb.co/hHZ5Qkd/logo.png" class="responsive" width="120" height="30">
        </q-toolbar-title>
                <q-space />
        <q-separator vertical /> 
        <q-btn color="grey-4" size="10px" stretch flat label="Contacto"/>
        <q-btn color="grey-4" size="10px" stretch flat label="¿Quienes somos?"/>
        <q-btn color="primary" size="10px" stretch flat label="Cerrar sesión"/>
      </q-toolbar> 
    </q-header>

    <div class="tw-flex tw-pt-8 tw-mb-4">
      <div class="tw-w-full tw-bg-gray-500 tw-h-auto">
        <q-img src="https://i.ibb.co/RjGkp12/inicio.png" class="tw-h-full tw-w-screen">
          <div class="absolute-full">
            <div class="tw-pt-24 tw-pl-24">
              <p class="tw-text-2xl text-bold">¡Bienvenido a de nuevo!</p>
              <p class="">En fitnetico estamos para servirte y seguir impulsaldo un estilo de vida saludable</p>
            </div>
          </div>
        </q-img>
      </div>
    </div> 
    </q-layout>
</template>

<script>
export default {
  name: 'Rutinas',
}
</script>
