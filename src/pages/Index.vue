<template lang="pug">

  // Estoy ocupando 'pug' no se espanten, pueden ocupar el html de toda la vida ;)
  .tw-min-h-screen.tw-flex.tw-flex-col.bg-dark
    .tw-p-5
      q-img( class="tw-w-1/3 lg:tw-w-1/6" src="../../src/assets/logo.svg")
    .tw-flex-1.tw.flex.tw-flex-col.tw-justify-center.tw-items-center
      q-img(class="tw-w-1/2 lg:tw-w-1/6" src="http://classic.battle.net/war3/images/human/units/portraits/peasant.gif")
      h1(class="tw-font-semibold text-primary tw-text-3xl lg:tw-text-6xl") ¡A trabajar!
    .tw-p-1.bg-primary.tw-flex.tw-justify-center.text-secondary Puto el que lo lea 2020

</template>

<script>
    export default {
        name: 'PageIndex',
        data() {
            return {}
        }
    }
</script>
