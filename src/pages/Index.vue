<template lang="pug">

  // Estoy ocupando 'pug' no se espanten, pueden ocupar el html de toda la vida ;)
  .tw-min-h-screen.tw-flex.tw-flex-col.bg-dark
    <!--.tw-p-5 -->
    <!--  q-img( class="tw-w-1/3 lg:tw-w-1/6" src="../../src/assets/logo.svg") -->
    .tw-flex-1.tw.flex.tw-flex-col.tw-justify-center.tw-items-center
        q-img(class="tw-w-1/2 lg:tw-w-1/6" src="https://i.pinimg.com/736x/12/65/ab/1265ab5966947b307b7ee42778139bda.jpg")
        h1(class="tw-font-semibold text-primary tw-text-3xl lg:tw-text-6xl") ¡No te rindas!
    .tw-p-1.bg-primary.tw-flex.tw-justify-center.text-secondary Pruebas chidas

</template>

<script>
    export default {
        name: 'PageIndex'
    }
</script>
