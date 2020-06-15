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
        <q-btn color="grey-4" size="10px" stretch flat label="Cerrar sesión"/>
      </q-toolbar> 
    </q-header>
<div class="tw-pt-12">
<div class="flex tw-mb-4 ">
       <div class="tw-w-full" style="height:350px">
        <div class="tw-align-middle">
        <q-img style="height:350px"  class="tw-h-full" src="https://intpass-eu-central-1-live02-public.s3.eu-central-1.amazonaws.com/de-live/venueHome_1024x576_IMG_0649_157164444373706_admin.jpg" >
          <div class="absolute-full text-subtitle2 flex flex-center">
            <div class="text-h3 text-white "> Crear rutina &nbsp;  
            </div>
          </div>
        </q-img></div>
      </div>
</div>

<div class="flex tw-mb-4 tw-px-8">
  <div class="tw-w-full">
  <div class="q-pa-md">
    <q-stepper
      v-model="step"
      ref="stepper"
      color="primary"
      animated
    >
      <q-step
        :name="1"
        title="Caracteristicas del usuario"
        icon="settings"
        :done="step > 1"
      >
        <div class="tw-h-48">
          <div class="tw-pt-4 text-center">
            <div class="tw-py-3 tw-px-18">
            <q-input
              input-class="text-black"
              bg-color="blue-grey-1"
              type="number"
              rounded
              standout="bg-blue-grey-1 text-grey-8"
              v-model="peso"
              label="Peso (kg)"
              :rules="[
              value => !!value || 'Debes ingresar tu peso',
              value => value < 200 || 'El numero que ingresaste no es valido',
              value => value > 0 || 'El numero no puede ser cero o negativo']"
            />
            <q-input
              input-class="text-black"
              bg-color="blue-grey-1"
              type="number"
              rounded
              standout="bg-blue-grey-1 text-grey-8"
              v-model="estatura"
              label="Estatura (m)"
              :rules="[value => !!value || 'Debes ingresar tu estatura',
              value => value < 3 || 'El numero que ingresaste no es valido',
              value => value > 0 || 'El numero no puede ser cero o negativo'
              ]"
            />
          </div>
          </div>
        </div>
      </q-step>

      <q-step
        :name="2"
        title="Objetivo"
        icon="fas fa-trophy"
        :done="step > 2"
      >
          <div class="q-pa-md">
    <q-option-group
      :options="options"
      label="Notifications"
      type="radio"
      v-model="objetivo"
    />
  </div>
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation>
          <div class="text-center">
          <q-btn rounded  color="primary" @click="$refs.stepper.next()" :label="step === 2 ? 'Crear rutina' : 'Continuar'" />
          <q-btn rounded v-if="step > 1" @click="$refs.stepper.previous()" flat color="primary"  label="Regresar" />
          </div>
        </q-stepper-navigation>
      </template>
    </q-stepper>
  </div>    
  </div>
</div>
</div>
<div class="tw-py-8 bg-dark text-center tw-text-gray-500">Fitnetico 2020</div>
  </q-layout>
</template>

<script>
export default {
  name: 'CrearRutina',
  data() {
    return {
      step: 1,
      peso: null,
      estatura:null,
      objetivo: null,
      options: [
        { label: 'Bajar de peso', value: 'bajar' },
        { label: 'Subir de peso', value: 'subir', color: 'green' }
      ]
    }
  }
}
</script>
