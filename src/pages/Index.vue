<template lang="pug">
  // Estoy ocupando 'pug' no se espanten, pueden ocupar el html de toda la vida ;)
  .tw-min-h-screen.tw-flex.tw-flex-col
    .tw-p-5
      q-img( class="tw-w-1/6" src="../../src/assets/logo.svg")
    .tw-flex-1.tw.flex.tw-flex-col.tw-justify-center.tw-items-center
        q-img(class="tw-w-1/6" src="http://classic.battle.net/war3/images/human/units/portraits/peasant.gif")
        h1.tw-font-semibold.text-primary ¡A trabajar!
    .tw-p-3.tw-bg-gray-400.tw-flex.tw-justify-center.tw-text-gray-600 Puto el que lo lea 2020

</template>

<script>
    export default {
        name: 'PageIndex'
    }
</script>
