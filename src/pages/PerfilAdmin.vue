<template>
    <div class="tw-pt-8 tw-px-8">
      <div class="tw-grid tw-grid-cols-1 text-center ">

        <div class="tw-h-2 bg-dark " style="border-top-left-radius:15px; border-top-right-radius:15px"></div>
        <div class="bg-dark">
            <div class="tw-mt-2">
              <img src="https://i.ibb.co/YRJrrHr/user-1.png" class="responsive" width="90" height="90">
            </div>
        </div>
        <div class="tw-h-2 bg-dark " style="border-bottom-left-radius:15px; border-bottom-right-radius:15px"></div>

        <div class="bg-white tw-mt-2 tw-mb-8">
          <q-btn size="sm" color="secondary" rounded label="Cambiar foto">
          </q-btn>
        </div>

        <div class="tw-h-8 bg-dark " style="border-top-left-radius:15px; border-top-right-radius:15px"></div>
        <div class="tw-flex tw-justify-center recentA">
          <div class="tw-w-1/4"></div>
          <div class="tw-w-2/4">
                <q-input color="cyan-5" input-class="text-white tw-justify-center" label-color="white" class="text-white tw-pt-8" v-model="nombre" label="Nombre:" style="max-width: 800px" />
                <q-input color="cyan-5" input-class="text-white tw-justify-center" label-color="white" class="text-white tw-pt-8" v-model="correo" label="Correo Electronico:" style="max-width: 800px" />
                <q-input color="cyan-5" input-class="text-white tw-justify-center" label-color="white" class="text-white tw-pt-8" v-model="telefono" label="Telefono:" style="max-width: 800px" />
                <q-input color="cyan-5" input-class="text-white tw-justify-center" label-color="white" class="text-white tw-pt-8" v-model="direccion" label="Dirección:" style="max-width: 800px" />
                <q-input color="cyan-5" input-class="text-white tw-justify-center" label-color="white" class="text-white tw-pt-8" v-model="descripcion" label="Descripción:" style="max-width: 800px " filled type="textarea"/>
          </div>
          <div class="tw-w-1/4"></div>
        </div>
        <div class="tw-h-8 bg-dark " style="border-bottom-left-radius:15px; border-bottom-right-radius:15px"></div>

        <div class="tw-py-12"></div>

      </div>
    </div>
</template>

<script>
  export default {
  name: 'PerfilAdmin',
  data() {
    return {
      left: false,
      nombre: 'Fernanda Musa Rojas',
      correo: 'eltravieso.99lol@gmail.coml',
      telefono: '5555555555',
      direccion: 'Avenida siempre viva',
      descripcion: 'Mamadisima',
    }
  }
}
</script>

<style>
.recentA {
  background-image: linear-gradient(
     50deg,
     rgba(62,56,242,1) 0%,
     rgba(118,46,202,1) 41%,
     rgba(156,39,176,1) 100%
  );
  background-size: 200% auto;
  transition: background-position 0.2s;
}
</style>
