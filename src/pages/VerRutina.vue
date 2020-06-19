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

    <div class="flex tw-mb-4">
      <div class="tw-pt-12 tw-w-full week flex flex-center text-white" style="height:300px">
         <p class="tw-text-3xl text-bold text-center">Rutina</p>
      </div>
    </div>

<div class="tw-grid tw-grid-cols-2 sm:tw-grid-cols-3 md:tw-grid-cols-4 lg:tw-grid-cols-5 xl:tw-grid-cols-5">
 <div class=" tw-m-2 header">
      <p class="text-center tw-pt-4 text-bold text-white tw-text-base sm:tw-text-lg md:tw-text-xl lg:tw-text-2xl xl:tw-text-3xl">Lunes</p>
      <p class="tw-pl-8 text-white tw-text-base sm:tw-text-md md:tw-text-lg lg:tw-text-xl xl:tw-text-2xl"> Biceps </p>
      <p class="tw-pl-8 text-white tw-text-base sm:tw-text-md md:tw-text-lg lg:tw-text-xl xl:tw-text-2xl"> Triceps </p>
      <p class="tw-pl-8 text-white tw-text-base sm:tw-text-md md:tw-text-lg lg:tw-text-xl xl:tw-text-2xl"> Hombro </p>
  </div>
  <div class="tw-m-2 header">
      <p class="text-center tw-pt-4 text-bold text-white tw-text-base sm:tw-text-lg md:tw-text-xl lg:tw-text-2xl xl:tw-text-3xl">Martes</p>
      <p class="tw-pl-8 text-white tw-text-base sm:tw-text-md md:tw-text-lg lg:tw-text-xl xl:tw-text-2xl"> Pecho </p>
      <p class="tw-pl-8 text-white tw-text-base sm:tw-text-md md:tw-text-lg lg:tw-text-xl xl:tw-text-2xl"> Espalda </p>
      <p class="tw-pl-8 text-white tw-text-base sm:tw-text-md md:tw-text-lg lg:tw-text-xl xl:tw-text-2xl"> Trapecio </p>
  </div>
  <div class="tw-m-2 header">
      <p class="text-center tw-pt-4 text-bold text-white tw-text-base sm:tw-text-lg md:tw-text-xl lg:tw-text-2xl xl:tw-text-3xl">Miercoles</p>
      <p class="tw-pl-8 text-white tw-text-base sm:tw-text-md md:tw-text-lg lg:tw-text-xl xl:tw-text-2xl"> Pierna </p> 
      <p class="tw-pl-8 text-white tw-text-base sm:tw-text-md md:tw-text-lg lg:tw-text-xl xl:tw-text-2xl">  </p>
      <p class="tw-pl-8 text-white tw-text-base sm:tw-text-md md:tw-text-lg lg:tw-text-xl xl:tw-text-2xl">  </p>
  </div>
  <div class=" tw-m-2 header">
      <p class="text-center tw-pt-4 text-bold text-white tw-text-base sm:tw-text-lg md:tw-text-xl lg:tw-text-2xl xl:tw-text-3xl">Martes</p>
      <p class="tw-pl-8 text-white tw-text-base sm:tw-text-md md:tw-text-lg lg:tw-text-xl xl:tw-text-2xl"> Biceps </p>
      <p class="tw-pl-8 text-white tw-text-base sm:tw-text-md md:tw-text-lg lg:tw-text-xl xl:tw-text-2xl"> Triceps </p>
      <p class="tw-pl-8 text-white tw-text-base sm:tw-text-md md:tw-text-lg lg:tw-text-xl xl:tw-text-2xl"> Hombro </p>
  </div>
    <div class=" tw-m-2 header">
      <p class="text-center tw-pt-4 text-bold text-white tw-text-base sm:tw-text-lg md:tw-text-xl lg:tw-text-2xl xl:tw-text-3xl">Martes</p>
      <p class="tw-pl-8 text-white tw-text-base sm:tw-text-md md:tw-text-lg lg:tw-text-xl xl:tw-text-2xl"> Pecho </p>
      <p class="tw-pl-8 text-white tw-text-base sm:tw-text-md md:tw-text-lg lg:tw-text-xl xl:tw-text-2xl"> Espalda </p>
      <p class="tw-pl-8 text-white tw-text-base sm:tw-text-md md:tw-text-lg lg:tw-text-xl xl:tw-text-2xl"> Trapecio </p>
  </div>
</div>

<div class="flex mb-4">
  <div class="tw-w-full tw-h-16">
    <p class="tw-pl-8 tw-pt-4 text-bold tw-text-base sm:tw-text-lg md:tw-text-xl lg:tw-text-2xl xl:tw-text-3xl">Pecho</p>
  </div>
</div>

<div class="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-4 xl:tw-grid-cols-4">
 <div class=" tw-m-2 text-center">
   <img style="height:150px"  :src="chest.one.img" alt="">
      <p class="tw-text-base sm:tw-text-md md:tw-text-lg lg:tw-text-xl xl:tw-text-2xl"> {{chest.one.name}} </p>
  </div>
  <div class="tw-m-2 text-center">
   <img style="height:150px"  :src="chest.one.img" alt="">
      <p class="tw-text-base sm:tw-text-md md:tw-text-lg lg:tw-text-xl xl:tw-text-2xl"> {{chest.one.name}} </p>
  </div>
  <div class="tw-m-2 text-center">
   <img style="height:150px" :src="chest.one.img" alt="">
      <p class="tw-text-base sm:tw-text-md md:tw-text-lg lg:tw-text-xl xl:tw-text-2xl"> {{chest.one.name}} </p>
  </div>
  <div class=" tw-m-2 text-center">
   <img style="height:150px"  :src="chest.one.img" alt="">
      <p class="tw-text-base sm:tw-text-md md:tw-text-lg lg:tw-text-xl xl:tw-text-2xl"> {{chest.one.name}} </p>
  </div>
</div>

<div class="flex mb-4">
  <div class="tw-w-full tw-h-16">
    <p class="tw-pl-8 tw-pt-4 text-bold tw-text-base sm:tw-text-lg md:tw-text-xl lg:tw-text-2xl xl:tw-text-3xl">Espalda</p>
  </div>
</div>

<div class="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-4 xl:tw-grid-cols-4">
 <div class=" tw-m-2 text-center">
   <img style="height:150px" class="responsive" :src="back.one.img" alt="">
      <p class="tw-text-base sm:tw-text-md md:tw-text-lg lg:tw-text-xl xl:tw-text-2xl"> {{back.one.name}} </p>
  </div>
  <div class="tw-m-2 text-center">
   <img style="height:150px" class="responsive" :src="back.one.img" alt="">
      <p class="tw-text-base sm:tw-text-md md:tw-text-lg lg:tw-text-xl xl:tw-text-2xl"> {{back.one.name}} </p>
  </div>
  <div class="tw-m-2 text-center">
   <img style="height:150px" class="responsive":src="back.one.img" alt="">
      <p class="tw-text-base sm:tw-text-md md:tw-text-lg lg:tw-text-xl xl:tw-text-2xl"> {{back.one.name}} </p>
  </div>
  <div class=" tw-m-2 text-center">
   <img style="height:150px" class="responsive":src="back.one.img" alt="">
      <p class="tw-text-base sm:tw-text-md md:tw-text-lg lg:tw-text-xl xl:tw-text-2xl"> {{back.one.name}} </p>
  </div>
</div>

<div class="flex mb-4">
  <div class="tw-w-full tw-h-16">
    <p class="tw-pl-8 tw-pt-4 text-bold tw-text-base sm:tw-text-lg md:tw-text-xl lg:tw-text-2xl xl:tw-text-3xl">Hombro</p>
  </div>
</div>

<div class="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-4 xl:tw-grid-cols-4">
 <div class=" tw-m-2 text-center">
   <img style="height:150px" class="responsive" :src="shoulders.one.img" alt="">
      <p class="tw-text-base sm:tw-text-md md:tw-text-lg lg:tw-text-xl xl:tw-text-2xl"> {{shoulders.one.name}} </p>
  </div>
  <div class="tw-m-2 text-center">
   <img style="height:150px" class="responsive" :src="shoulders.one.img" alt="">
      <p class="tw-text-base sm:tw-text-md md:tw-text-lg lg:tw-text-xl xl:tw-text-2xl"> {{shoulders.one.name}} </p>
  </div>
  <div class="tw-m-2 text-center">
   <img style="height:150px" class="responsive" :src="shoulders.one.img" alt="">
      <p class="tw-text-base sm:tw-text-md md:tw-text-lg lg:tw-text-xl xl:tw-text-2xl"> {{shoulders.one.name}} </p>
  </div>
  <div class=" tw-m-2 text-center">
   <img style="height:150px" class="responsive" :src="shoulders.one.img"  alt="">
      <p class="tw-text-base sm:tw-text-md md:tw-text-lg lg:tw-text-xl xl:tw-text-2xl"> {{shoulders.one.name}} </p>
  </div>
</div>

<div class="flex mb-4">
  <div class="tw-w-full tw-h-16">
    <p class="tw-pl-8 tw-pt-4 text-bold tw-text-base sm:tw-text-lg md:tw-text-xl lg:tw-text-2xl xl:tw-text-3xl">Biceps</p>
  </div>
</div>

<div class="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-4 xl:tw-grid-cols-4">
 <div class=" tw-m-2 text-center">
   <img style="height:150px" class="responsive" :src="biceps.one.img" alt="">
      <p class="tw-text-base sm:tw-text-md md:tw-text-lg lg:tw-text-xl xl:tw-text-2xl"> {{biceps.one.name}} </p>
  </div>
  <div class="tw-m-2 text-center">
   <img style="height:150px" class="responsive" :src="biceps.one.img" alt="">
      <p class="tw-text-base sm:tw-text-md md:tw-text-lg lg:tw-text-xl xl:tw-text-2xl"> {{biceps.one.name}} </p>
  </div>
  <div class="tw-m-2 text-center">
   <img style="height:150px" class="responsive" :src="biceps.one.img" alt="">
      <p class="tw-text-base sm:tw-text-md md:tw-text-lg lg:tw-text-xl xl:tw-text-2xl"> {{biceps.one.name}} </p>
  </div>
  <div class=" tw-m-2 text-center">
   <img style="height:150px" class="responsive" :src="biceps.one.img"  alt="">
      <p class="tw-text-base sm:tw-text-md md:tw-text-lg lg:tw-text-xl xl:tw-text-2xl"> {{biceps.one.name}} </p>
  </div>
</div>

<div class="flex mb-4">
  <div class="tw-w-full tw-h-16">
    <p class="tw-pl-8 tw-pt-4 text-bold tw-text-base sm:tw-text-lg md:tw-text-xl lg:tw-text-2xl xl:tw-text-3xl">Triceps</p>
  </div>
</div>

<div class="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-4 xl:tw-grid-cols-4">
 <div class=" tw-m-2 text-center">
   <img style="height:150px" class="responsive" :src="triceps.one.img" alt="">
      <p class="tw-text-base sm:tw-text-md md:tw-text-lg lg:tw-text-xl xl:tw-text-2xl"> {{triceps.one.name}} </p>
  </div>
  <div class="tw-m-2 text-center">
   <img style="height:150px" class="responsive" :src="triceps.one.img" alt="">
      <p class="tw-text-base sm:tw-text-md md:tw-text-lg lg:tw-text-xl xl:tw-text-2xl"> {{triceps.one.name}} </p>
  </div>
  <div class="tw-m-2 text-center">
   <img style="height:150px" class="responsive" :src="triceps.one.img" alt="">
      <p class="tw-text-base sm:tw-text-md md:tw-text-lg lg:tw-text-xl xl:tw-text-2xl"> {{triceps.one.name}} </p>
  </div>
  <div class=" tw-m-2 text-center">
   <img style="height:150px" class="responsive" :src="triceps.one.img"  alt="">
      <p class="tw-text-base sm:tw-text-md md:tw-text-lg lg:tw-text-xl xl:tw-text-2xl"> {{triceps.one.name}} </p>
  </div>
</div>

<div class="flex mb-4">
  <div class="tw-w-full tw-h-16">
    <p class="tw-pl-8 tw-pt-4 text-bold tw-text-base sm:tw-text-lg md:tw-text-xl lg:tw-text-2xl xl:tw-text-3xl">Trapecio</p>
  </div>
</div>

<div class="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-4 xl:tw-grid-cols-4">
 <div class=" tw-m-2 text-center">
   <img style="height:150px" class="responsive" :src="trapezius.one.img" alt="">
      <p class="tw-text-base sm:tw-text-md md:tw-text-lg lg:tw-text-xl xl:tw-text-2xl"> {{trapezius.one.name}} </p>
  </div>
  <div class="tw-m-2 text-center">
   <img style="height:150px" class="responsive" :src="trapezius.one.img" alt="">
      <p class="tw-text-base sm:tw-text-md md:tw-text-lg lg:tw-text-xl xl:tw-text-2xl"> {{trapezius.one.name}} </p>
  </div>
</div>

<div class="flex mb-4">
  <div class="tw-w-full tw-h-16">
    <p class="tw-pl-8 tw-pt-4 text-bold tw-text-base sm:tw-text-lg md:tw-text-xl lg:tw-text-2xl xl:tw-text-3xl">Piernas</p>
  </div>
</div>

<div class="tw-grid tw-m-8 tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-4 xl:tw-grid-cols-4">
 <div class=" tw-m-2 text-center">
   <img style="height:150px" class="responsive" :src="legs.one.img" alt="">
      <p class="tw-text-base sm:tw-text-md md:tw-text-lg lg:tw-text-xl xl:tw-text-2xl"> {{legs.one.name}} </p>
  </div>
  <div class="tw-m-2 text-center">
   <img style="height:150px" class="responsive" :src="legs.one.img" alt="">
      <p class="tw-text-base sm:tw-text-md md:tw-text-lg lg:tw-text-xl xl:tw-text-2xl"> {{legs.one.name}} </p>
  </div>
  <div class="tw-m-2 text-center">
   <img style="height:150px" class="responsive" :src="legs.one.img" alt="">
      <p class="tw-text-base sm:tw-text-md md:tw-text-lg lg:tw-text-xl xl:tw-text-2xl"> {{legs.one.name}} </p>
  </div>
  <div class=" tw-m-2 text-center">
   <img style="height:150px" class="responsive" :src="legs.one.img"  alt="">
      <p class="tw-text-base sm:tw-text-md md:tw-text-lg lg:tw-text-xl xl:tw-text-2xl"> {{legs.one.name}} </p>
  </div>
 <div class=" tw-m-2 text-center">
   <img style="height:150px" class="responsive" :src="legs.one.img" alt="">
      <p class="tw-text-base sm:tw-text-md md:tw-text-lg lg:tw-text-xl xl:tw-text-2xl"> {{legs.one.name}} </p>
  </div>
  <div class="tw-m-2 text-center">
   <img style="height:150px" class="responsive" :src="legs.one.img" alt="">
      <p class="tw-text-base sm:tw-text-md md:tw-text-lg lg:tw-text-xl xl:tw-text-2xl"> {{legs.one.name}} </p>
  </div>
  <div class="tw-m-2 text-center">
   <img style="height:150px" class="responsive" :src="legs.one.img" alt="">
      <p class="tw-text-base sm:tw-text-md md:tw-text-lg lg:tw-text-xl xl:tw-text-2xl"> {{legs.one.name}} </p>
  </div>
  <div class=" tw-m-2 text-center">
   <img style="height:150px" class="responsive" :src="legs.one.img"  alt="">
      <p class="tw-text-base sm:tw-text-md md:tw-text-lg lg:tw-text-xl xl:tw-text-2xl"> {{legs.one.name}} </p>
  </div>
</div>
<div class="tw-py-8 bg-dark text-center tw-text-gray-500">Fitnetico 2020</div>
  </q-layout>
</template>

<script>
export default {
  name: 'VerRutina',
  data () {
    return {
      chest: {
        one: {
          name: 'Push-ups',
          img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/3-weighted-pushup-1495476721.jpg?crop=1xw:1xh;center,top&resize=320:*'
          }
      },
     back: {
        one: {
          name: 'Remo',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT5tfJgGqDbOl18yGQ_PkZZBswkYnKCyTr7EHv0b85i14l8zVXr&usqp=CAU'
        }
      },
     shoulders: {
        one: {
          name: 'Laterales',
          img: 'https://powerexplosive.com/wp-content/uploads/2017/10/hombro-mancuernas-300x169.jpg'
        }
      },
      biceps: {
        one: {
          name: 'Curl',
          img: 'https://ejerciciosdegimnasio.com/wp-content/uploads/2018/07/25-ejercicios-para-biceps-y-triceps-con-mancuernas-736-1.jpg'
        } 
      },
      triceps: {
        one: {
          name: 'Copa',
          img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhITEhIVFhMXGBcYFhgYFhkWFRgWFxoYFhgVGBcaHyogGBslHRYYITEhJSktLi4uGB8zODMtNygtLisBCgoKDg0OGhAQGyslHyYrLS8tLS0tLS0tLS01Ly0tKystLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tKy0tNf/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcEBQEDCAL/xABCEAACAQIDBQYDBQYEBQUAAAABAgADEQQSIQUGMUFRBxNhcYGRIjKhFEKxwfAjUoKi0eFyc5KyFyRDwvEzU1RiY//EABkBAQADAQEAAAAAAAAAAAAAAAABAwQFAv/EACURAQACAgICAgICAwAAAAAAAAABAgMREiEEMSIyE0FhgTNRcf/aAAwDAQACEQMRAD8AvGIiAiIgIiICIiAiIgIiICIiAiIgIiIHBmixuMZamQ5rC5DgHKeRplhwYA3F7cJvpHN6cMKavigXuigGmpAWoSQFvfTNcjXwEry1mY+KzHNYn5Puji8SK1MDLUoNozHR0Nr3Pgf1ab8SMbt4nvaK1MjIKih1zWBykAg2B048PAyR4apmUH9X5yMd5nqfZkpET16dsREtVkREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERASDb7beFq2GsVK2ObiDdbjTS1iQefCTmaHa+6WGxDs7hgzfMVci9tBpwkwiXVsrF06lKg1IEU+7AUMLGy2HCbTZtTV16G/of7zU1aK4c0qS3yKuW5468L28gJzs6v/wAxbqLH9e0xc9Zf7a+G8e/4SSIibGUiIgIiICIiAiIgIiICIiAiJ8loH1Mc4ynr8am3GxB16aTVbx4q6BVrCmpuajA/tMgHyp0JP3uQB5kERrE7Sw9CjTqqQaTaKo4jiNep0OplGTNx9dr8WGbe0wxG2KaDMT8N7E+tuEz6VQMAQbg6iU/tLbRr0zlGVWbQDpe31teWBuSztRDM11Pyr+7ZnufIjL7TxhzWvOpWZ8EUruEjiImpkIiICIiAiIgIiICddasqAsxAUcSTYCdkqvtm2tXpmnSp1Ci5Va6mxzZ7Ek+AAt43nm06h6rXc6SbaWMpV2L0qoZflBBupK6EA8yDbUdZ1bKq2xChuIGpvxkO7L3L4SrUdi5GJcAtqdaVEn8Judq4MVlro9whptcg2IKgupB5EFb+k59+su3RpG8WllCczSbnYVqWEpI1VqvEh2NzlJJUEnoLCbudGJ3G3NmNToiIkoIiICIiAiIgIiICIiB14iqEUsb2AvoLnToBxMgmO3kbvaneLkItamTmIAJGZzfKpJtZRc9eVp8ZFdu7k0a7Z0PdOLWIUEZsxYu3N2NzxPO8pzUtaOpXYb0rPyVDvltljUqPTUscp0FzcKNSba2ABv4C80u42LqYivVp1X/Z9zWcIALBwuUEcwRmv6SwOzHYmTaGOo4ti9WmHSmpt3bU2OVzltfVWQ2vwqecyNn7gUtn4rFV1N6ZQpQU6kGpq/mAoCjzMr/HGOk7Xzl/JeIr6a+rhRSS172Htl0A9/xk43bxXc4kUSRlqUaXdi5uGQPnXLex4E3A5i/KQLE1TUqhflVql2HQA3OvQCSvsz2n9pq4hzfQtlBBsFJXLry0HDwlHj7iV3k649rFiInRcwiIgIiICIiAiIgJVfbxs1mw9OugJyEo1uSsQR9R9Zakxdp4FK9KpSqKGR1KsDqLESLRuHqs6lS/Y8S2DxCG4AxBYHkWNJMw9Ao/1CS/G/DTqKRcmlVzAcbFStr+RnwNi/ZMNToUP+mxZv8A7O5LMb+FwPICarbO06gSoVUvVIWmoALEsxzNoONkRjOded5HRpGsaY7kV8vfYbU905ZWy2BSoSyg8ri/qBJVIj2aq/2UGolRWJF+8UqTYAGwOvG8l03498Y2wZdc50RET2rIiICIiAiIgIiICIiAiIgUhvLjMXU2jiFp0+7xF+7Bp3DZPlRi/IFSLkW0A6ST7RqNRp0KNWozmnTCtUbi5BtfXiTbj5SwqtMDMwAzEam2vvKu3s7yvimpqPhp/D+ZJ9T9Jm8meohr8SPltpa+KUd7VAF1UkLa4KhlDkg8iGt6npLg2DjErUKdSnbKyjQeUq+jsZVKhzo96bWPEOCp9Bf3m67MtoGmGoOflYr5WJH4gyrDbjK3yK8o2seJwJzNznkREBERAREQEREBMfH1siEjjwHmZkTGx5+HhfUTzb09V9wrzaW2P2jgH7zewNprKG03w9bC11N0Z6gqDldgmX1ChvrOrB4A1Hdma12Ptc3m7OCplDRsPjU28Gt8B8NfxM5se9uraIiNLDwlcVFDDnO6RHdDHkIitwIA8jyMlonQx35V25mSnC2nMREsVkREBERAREQEREBERAREQOnFi6NbjYyutsXTEPlIAb4iefQn3lk1BcESvN6qVu7BPC+trEnhMvkx01+LPy00uMxeZ0t8oI/GZezKRSsxtbO9TXlqxKn8Jr3Cga6z7wu0LsPlJGti2U2AubHrMkS2TC19m1i9NC3zWF7cL87TKke3Mx/e0TcEEMeXLiPPS0kM6VJ3WJcvJXjaYIiJ7eCIiAiIgIiICYu0UuhsbWsZlT5qrcEHmLSJjcJidSqzHsErtYgIOAAt9ecYbFk1UY8AwMyN6MEUyAnhcHS3xczNSlcKJzLRqXWid1SujQt8AOhFgRoR0IPWS/Z9XMinnzlW4Da+V1Dh7E2DLb630lg7t1rqQTfW4/OaME6ll8ivTdRETYxEREBERAREQEREBERAREQODIXvfSF/I39DJrIbvnSJYkC+gH4GUeR9Gjxvug+PpNayak8OomE+FVSudvjJABt8P9z5zbOjLqfT/wAzUI5qVSB92x6i9wPzJ9JiiXRmFjdm9dnpVCbWVsgI4MV5j0t9JMpqt2NmDD4anTtrbM3+JtT7cPSbWdHHXjWIcrLbleZgiIntWREQEREBERAREQIXv3Rtla2hP1tb8pDK9IEaGx+ksjfDC95RAHEG4/GV8+Dbn7TBn6u6XjTujDNJaS2WxP3i3E87C/AeUm24uOaqRYWUBr634EAW+sr7aTEkKLG5sB4nrLC7PcKFNYg6LlpgdLFifrIxd2hOf6SmsRE6DmEREBERAREQEREBERAREQODIDv5vBh6BZKtZFc2spPxW01sNbSeV6mVWY8gT7C88i7Wr5nqVGuWdiTc6szEk3tpPF6c40sx34TtONq744e1lct5I342nxu1tmg5ANVEZqq/MwVrfEALN4295WzNrpp+uvGd5xJtlvoBbXXTjbwErjxqxC2fKtL13i9r4ejbva9Kne1s9RVvfha5nVT3iwbEKuKoMx4AVUJNgSdAegJ9J5J77wF7AcByFgPYT6GMZdcxBHMEg+4l+mZ7Cw2KSoM1N1deqsGHuJ2ymt0qSYbC0lDAOyh6hHEuwB+gsv8ADNsm1mB+GsQfOZbeTETrTVHizMb2tCJGt2N4lrHunqKavLTKWA46cz5SSzRW0WjcM96TWdSRET08kREBERAj++G1KOHpB61RUXXidSegHEmU9jt/MMC1u8Op+7b/AHETP7eal8XQXpR010BZ2ubfwj2lR1HH3RYcuRPj4Sq+Ct53K7HntSNQmeF3rBrLUKMEUhj8ObQEXuAdNL69bSzuznevArTxLPikSzAnvCaZsc1jZ7Xv4Tz5TqW1vc+P61natc9SfGTGGtZ3BbNa0al6h/4i7L/+Yh8g5HuF1mZht8sBU7vLiqd6nyBroW+LLpmA56Tyl3566STdnaK2LL1PlpoWH+YSFUnyBY+gnu08YmVdK8rRD1AMQp4MvuJ2K15VFTaafvGd+A3h7khu9bLzXiCPEGZY8nvuGqfE66laMTD2TtKniKa1aTBkPMciOIPQiZk1xO2SY10REQgiIgIiICIiBi7UK9zUzNlUqwJ6XFvznkPHqVYg8VLA+BvY/hPVG+Ib7OSPkBvUFgRl6kHkDPOW+1KhVxLth3pqLDNZ1KFuqhdB42+msjlpbXFNo3CKt09T+Qn1TXTU+P69Z91cGy/eQ+RmdsPd3F4ximGw71GUXa1gAP8AExA9L3k7iXm1LV9w12aOJAPDn5c5Jl7O9rXt9grX/gt75rTf7M7GdpVRep3NAdHfM3tTBA95Lwz67hR8+nK3TlOukzNcjQDieElO190fseABrMr4m4QOlwluC6HW/C585EaiBEygknmSbk+c5168Z1Lr47Rau4d+wKjfbsJY699T9i1j9CZ6BEo3s42b9ox1M/dpftT/AAkBR/qI9jLymrBHxYfJndiIiXMxERATgzmcGBQ3bvlOMpsrXPdZHH7rKxNvZ/pKnqPLi7UqiKlShXP7QsGQkMTx0qKwUi1rg3I42lSNgF5Vgf4W/pI5Qv8AwWmN1Yijr6zse3I/q0+qeEqFgqLnJ0AUG5PQCTNeybaxRWGHX4gDbvUDC+tmBIsZO1VqzX2hN5KtxCv7e5s3wf6fi/ObbBdju1XYBqdKmOZeqDb0S5k43V7HXw1ValXFq6cKlNaJGYcbBy9xrbW3WecleVdPWK0VtEyiZra2W58eE4xgsBdhfjb+82W3sJTXFVbLZUYhV1Kj0PO1vrNFjqlzMH7dXfW1rdjg/wCTq/5zf7Ek9kb7Ptl/Z8FSH3qg71vNwCB6LYSSTfT6w5OSd2kiInp4IiICIiAiIgfNRQQQRcHQg8COk8ub34JaONxCB6eQO+SwF7X0BHLpfwnqSV52r7Fw6bPrVVoUxUz0rPkXOuaogYBrXAIvp4mRp6i0x6UNUOmjC/TTXj/aeiOyjZVOjglenU7wVjnzDRegCiwtbhrrpKm3A2DRxWJanWQMuQG2lxerSUkfws3vPQmz8ElBFp01CouiqBZVHIADgI0TaZ9sqInEl5RLtLW+FQf/AKL9A0qDGE3MtztKY9xTABIzknThYc+nGVNijcmZMv3dDx/8ad9jWF1xVS2lkQfzMf8AtlnyLdm+z+5wVMn5qhNQ+R0X+UCSmaMcarDHlnd5IiJ7VkREBE4LAc5x3g6j3gVn26YVWw1F8wV1c6lSRkt8VyAba5R0+KUgtVf3ydPDjz9J61xFGm+UsFOU3F7acp5w34pqNoYwAAAVWsBoBw4ASNPUWll9lGzaGJxwSpUbMlqlNQPmCXvmYXtYlDbn6T0WJEtw9lUKdFKqU6a1GSjdlABIFFONvFmJ6mSzOOokomdvqJ85x1HvOQwhCkN6ltiMQRzqP+Mjfcl2CgamwHmdBJDvIT3tW4IJcmx42JJBnbuFs7vsdSBHw071G/g4fzFZhiNzp1JnVN/wujCUsiIg4KoX2Fp3QIm5yyIiAiIgIiIHBlZqapqNTAqFgTcBmJFvC+ks2dSYdASwRQx4kAAm/U84EA+xYjmlb+eR3ezNl7mstfK+uUXLkoystg2ltSSeg0ly2kH7Q9iUbDFEHvrqgNzYDXgOHAQlU2x6LU6gypWV3+BQwte+pswOhAW/6vJbRwePNr08X6mr/Wdu7OwqOMxHdVhcKveDnqrKOenBjLfAkCrsNs+vks1LFX43Bq38rkzAxrVVrpT/AGwJKZVLuGPDlmvxvLhnRUwlMsHKKXFrMVBYW4WPGNG0W7QnJpqigklWIAFybFTwHgDKlrj4svO9rc9dOE2Ozd9MTi9r1UYZsOHqqgsAaSoHCm9tbleB1ufCSHa9fu1dszsVBIB0BNtBeVXpynbTiyTSNR+1pYSiERUHBVCjyAtO6VXut2u0WCJjh3TEaVVBNMkcQVF2Tl1EsPZO3MNigTh69OrbjkcMRfqBqPWWxMTHSjJS1LTW3tsYiJLwREQIfv5cGk1hazC5IGtwbanwmqpbIrsoIotYi4OmoPA8ZYbIDxAM+gIFabQ2dVpU2dqRVQNSbW10F9eZtK32lQ71u8TD1Gzas4qUwrE8WUZtBPRO0sBTr02pVVzI1rjyII+oBlN7UwyUqlVEXKiO4VRwAViAAPSQlibEwlbELfD0mqKnwG2W65dFDAHRiBc2m9wm7uJBBbCNb/Cv9ZPtz9i0cNQBorl70LUfxYqPwm+g2q7aOyXSnUc4ZlA1JNgBr52UTddnWlDEPayltDcWuoObh6SbMoPGVn247wVsHhsOmGY03rVCCyj7ircrw5ll9o0b2j+8lJ2c1AjlWtZgpINhY8B4SR9keGIbEuVINkUEgi4JYm1/ITXbBxD1cFRespWplOcIeeYjUX0NgDbleauvvpWwOITuAr02Uh1b7zA6DN90j8+cq4xE8pa688kfjiF3xIJsPtX2bXVc9U0XI1SoraHpnAyn39JOabhgCDcEAgjgQdQZcxvqIiAiIgIiICIiAkU7QcXTFAIWGfMjW521F/rJXOqrhkY3ZFJ6lQT9YFVbj7cw9HEk1XFO6MoDccxZdDa/IXltCYp2dR/9mn/oX+kyoCcNwnMQPLm92zsVsvGnO4zljWFRPlbvGYglTzupuOXXrg7T2zica65q6La1luaVr/e10J8Q1/CXTvr2avjcU+JWrTJZFULUD/AV0urIdQR90jQknWRKv2KYs/8AVw1vOoPwWRqHuMlojW1a0Mcp+GqgIbiRprwzAcm8RaWj2O47ZeFaoz4oriXGT9r8FLJe9kPAm4HzWPQTS4vsa2gL5BSOumWtcEdbMoInxhOxfabsM5oUxzJqFj7KNfeRFdPV81r1itu9fv8Af/HofD10dQyMrKeBUhgfIjSdkj24u7I2dhVw/eGoczMzEWGZrXCjkukkM9KiIiAiIgdWKxC00Z3NlUXJ6CUtt3HJ31U8VZ6hDaWF2uunE3DchpbWXaRPk0V/dHsIGm3R2zQxNBO4fN3aoj6EWYKNNR4TeT5SmBwAHkLT6gJXPbVu9UxOFWulQAYUPUKHTPcAXDX0YW5jnLGmp3p2IMbhqmHZygcD4gL2KkMLg8RpwgeX8DvJiaVJqC1mROuUMV8mvcDxF5hZ2pgHvEqZiSRcta1rHWzKTc9PG8uLGdjDn/08RQUWGnct83M3Lt56TU4jsTxY4VcO/rUpn3s0iaws/Lf/AGgeArYSrURsUtRVv8fdZczDzIsT48beV56P3Y3q2dXSnSwuIpmyqqUyStQBRYDI2t7CUv8A8GdpFrAUQt+dW+nXRZL9yex5sNXpYjE4gE02DqlIEDMOGZzY28ANYiNGTJN53PtbsRElWREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERA4nMRAREQERED/2Q=='
        }   
      },
      trapezius: {
        one: {
          name: 'Remo recto',
          img: 'data:image/jpeg;base64,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'
        }      
      },
      legs: {
        one: {
          name: 'Desplantes',
          img: 'https://entrenar.me/blog/wp-content/uploads/2018/02/rutina-de-piernas-para-gym-lunge-bueno.jpg'  
        }      
      }
    }
  }
}
</script>

<style>
  .week {
  background-image: linear-gradient(
     50deg, 
     rgba(62,56,242,1) 0%, 
     rgba(118,46,202,1) 41%, 
     rgba(156,39,176,1) 100%
  );;
  background-size: 200% auto;
  transition: background-position 0.2s;
}

  .header {
      background-image: linear-gradient(
     550deg, 
     rgba(62,56,242,1) 0%, 
     rgba(118,46,202,1) 41%, 
     rgba(156,39,176,1) 100%
  );
  border-radius: 10px;
  background-size: 200% auto;
  transition: background-position 0.2s; 
  }
</style>
