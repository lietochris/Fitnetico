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
  <div class="tw-flex tw-pt-12 ">
  <div class="tw-w-1/4 tw-h-screen">
    <q-img class="tw-h-full"
    src="https://wallpaperaccess.com/full/1515138.jpg">
    <div class="absolute-full text-subtitle2 text-center tw-py-32">
      <div class="tw-pt-8 tw-pb-4">
      <img src="https://i.ibb.co/YRJrrHr/user-1.png" class="responsive" width="160" height="160">
      </div>
      <q-separator color="white" inset />
      <q-btn class="tw-py-4" color="grey-4" size="12px" stretch flat label="Mis rutinas"/>
      <p></p>
      <q-btn class="tw-py-4" color="grey-4" size="12px" stretch flat label="Crear rutina"/>
    </div>
    </q-img>
  </div>
  <div class="tw-w-3/4  tw-h-screen tw-py-12 bg-grey-3">
    <div class="text-right tw-pr-8">
  <q-btn size="sm"
  color="secondary" icon="fas fa-user-edit" rounded label="Editar perfil">
  </q-btn>
    </div>
    <div class="tw-py-10 tw-w-full">
      <p class="tw-px-12 tw-text-2xl text-bold tw-flex tw-break-words tw-leading-none">{{user.name}} {{user.ap}} {{user.am}} </p>
      <p class="tw-px-12 tw-text-base tw-flex tw-break-words tw-leading-none">{{user.email}}</p>
      <div class="tw-w-1/4 tw-h-2 bg-purple-10"></div>
    </div>
    <div class="tw-pl-24">
      <p>  <span class="tw-text-xl text-bold  tw-break-words">Peso </span><span class="tw-text-xl tw-pl-32 tw-break-words text-purple-3">xx.xx</span>  </p>
      <p class="tw-pt-6">  <span class="tw-text-xl text-bold  tw-break-words">Estatura </span><span class="tw-text-xl tw-pl-24 tw-break-words text-purple-3">xx.xx</span>  </p>
      <p class="tw-pt-6">  <span class="tw-text-xl text-bold  tw-break-words">IMC </span><span class="tw-pl-2"></span> <span class="tw-text-xl tw-pl-32 tw-break-words text-purple-3">xx.xx</span>  </p>
      <p class="tw-pt-6">  <span class="tw-text-xl text-bold  tw-break-words">Condición física</span><span class="tw-text-xl tw-pl-8 tw-break-words text-purple-3">xx.xx</span>  </p>
      <p class="tw-pt-6">  <span class="tw-text-xl text-bold  tw-break-words">Objetivo actual</span><span class="tw-text-xl tw-pl-10 tw-break-words text-purple-3">xx.xx</span>  </p>
      <p class="tw-pt-6">  <span class="tw-text-xl text-bold  tw-break-words">Total de rutinas</span><span class="tw-text-xl tw-pl-8 tw-break-words text-purple-3">xx.xx</span>  </p>
    </div>
  </div>
</div>

  </q-layout>
</template>

<script>
export default {
  name: 'Perfil',
  data() {
    return {
      user: {
        name: 'Nombre',
        ap: 'Ejemplo',
        am: 'Ejemplo',
        email: 'ejemplo@ejemplo.com'
      }
    }
  }
}
</script>

<style>
.gr-bg {
  background-image: linear-gradient(
    to right,
    #5C73F2 0%,
    #3E38F2 20%,
    #230A59 70%
  );
  border-radius: 0.3rem;
  background-size: 200% auto;
  transition: background-position 0.2s;
}
</style>