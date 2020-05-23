<template>
  <q-layout view="hhr lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
            <img src="https://i.ibb.co/FgcygyG/logoB.png" width="120" height="30">
        </q-toolbar-title>
                <q-space />

        <q-separator vertical />

        <q-btn stretch flat label="Cerrar sesión" />
      </q-toolbar>
    </q-header>

      <q-drawer
        v-model="left"
        show-if-above
        :width="200"
        :breakpoint="400"
      >
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
        </q-scroll-area>

        <q-img class="absolute-top" src="https://ih1.redbubble.net/image.204977087.3569/flat,750x1000,075,f.u5.jpg" style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <div class="text-weight-bold">usuario</div>
            <div>ejemplo@ejemplo.com</div>
          </div>
        </q-img>
      </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
      <div class="col-6">
        <q-img src="https://www.skyfitnesschicago.com/wp-content/uploads/2016/10/Sky-Fitness-Chicago-ClassesPrograms-GroupExercise-MoveStrongFunctionalTraining-Header-Image.jpg" :ratio="16/9">
          <div class="absolute-full text-subtitle2 flex flex-center">
            <div class="text-h3 text-center text-white text-center"> ¡Bienvenido de nuevo! &nbsp;  <div class="text-h6 text-center text-white text-center br">En fitnetico estamos para servirte y seguir impulsaldo un estilo de vida saludable</div></div>
          </div>
        </q-img>
      </div>
      <div class="py-8" ></div>
  <div class="bg-body text-body font-body"> 
   <div class="container mx-auto px-4"> 
      <section class="py-8 px-4 ">
        <h2 class="text-4xl mb-2 leading-tight font-heading text-center py-8 px-4">Elige una opción</h2>
        <div class="text-center py-4"></div>
        <div class="flex flex-wrap -mx-4 -mb-6">
          <div class="lg:w-1/3 px-4 mb-6">
          <a href="/perfil">
            <h3 class="text-xl my-2 font-heading text-bold"><q-icon name="fas fa-user-circle" class="text-blue" style="font-size: 60px;"></q-icon>&nbsp;  Mi perfil</h3>
            <p class="text-l text-gray-500 leading-relaxed">En tu perfil pordrás modificar tu peso y tu talla para que tu información este al dia</p></a>
          <div class="text-center py-4"></div>
          </div>
          <div class="lg:w-1/3 px-4 mb-6">
            <a href="/rutinas">
            <h3 class="text-xl my-2 font-heading text-bold"><q-icon name="fas fa-clipboard-list" class="text-green" style="font-size: 60px;"></q-icon> Mis rutinas</h3>
            <p class="text-gray-500 leading-relaxed"> Consulta tu rutina actual asi como tu historial</p></a>
           <div class="text-center py-4"></div>
          </div>
          <div class="lg:w-1/3 px-4 mb-6">
          <a href="/rutinas/crear">
            <h3 class="text-xl my-2 font-heading text-bold"><q-icon name="fas fa-pen-square" class="text-yellow" style="font-size: 60px;"></q-icon> Generar nueva rutina</h3>
            <p class="text-gray-500 leading-relaxed"> Crea una nueva rutina para que sigas progresando en tus entrenamientos</p></a>
         <div class="text-center py-4"></div>
          </div>
        </div>
      </section>
      </div>
       <div class="py-8" ></div>
<div>
   <div class="tw-mx-5">
    </div>
  <div class="full-width row wrap justify-start items-start content-start"></div>
  <q-carousel
        v-model="slide"
        transition-prev="jump-right"
        transition-next="jump-left"
        swipeable
        animated
        control-color="white"
        prev-icon="arrow_left"
        next-icon="arrow_right"
        navigation-icon="radio_button_unchecked"
        navigation
        padding
        arrows
        height="400px"
      >
        <q-carousel-slide name="1" class="column no-wrap flex-center bg-primary text-white shadow-1 rounded-borders">
          <q-icon name="fas fa-dumbbell" size="56px" />
          <div class="q-mt-md text-center">
            Fitnetico crea tu rutina en base a tus objetivos <br>
            ¿Estas buscando subir o bajar de peso? <br>
            Tu rutina según las metas que busques alcanzar 
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="2" class="column no-wrap flex-center bg-accent text-white shadow-1 rounded-borders">
          <q-icon name="fas fa-running" size="56px" />
          <div class="q-mt-md text-center">
            Se constante con tus entrenamientos <br>
            y lleva una dieta balanceada para alcanzar tus objetivos
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="3" class="column no-wrap flex-center bg-secondary text-white shadow-1 rounded-borders">
          <q-icon name="fas fa-trophy" size="56px" />
          <div class="q-mt-md text-center">
            Fija metas claras y asegurate <br>
            de que estas sean graduales para que <br>
            logres alcanzarlas de manera rapida
          </div>
        </q-carousel-slide>
      </q-carousel>
</div>
<div class="py-4" style="background-color: #eeeeee;"></div>
      <section class="py-12 px-4 text-center" style="background-color: #eeeeee;">
        <h2 class="text-4xl mb-2 leading-tight font-heading">Acerca del desarrollo de fitnetico</h2>
        <div class="flex flex-wrap -mx-8">
          <div class="md:w-1/3 p-8">
          <a href="/desarrolladores">
            <img class="w-1/3 mx-auto mb-4 rounded-full" src="https://thumbs.dreamstime.com/b/programming-services-minimal-vector-icon-flat-isolated-eps-illustration-design-long-shadow-117826012.jpg" alt="">
            <h3 class="text-xl font-heading leading-relaxed">Sobre los <br> desarrolladores</h3> </a>
          </div>
          <div class="md:w-1/3 p-8 md:border-l">
          <a href="/experto">
            <img class="w-1/3 mx-auto mb-4 rounded-full" src="data:image/jpeg;base64,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" alt="">
            <h3 class="text-xl font-heading leading-relaxed">Sobre el experto en el <br> que se basa el sistema</h3></a>
          </div>
          <div class="md:w-1/3 p-8 md:border-l">
          <a href="/sistemaExperto">
            <img class="w-1/3 mx-auto mb-4 rounded-full" src="https://img-s2.onedio.com/id-538edd753686a29d4eab98f7/rev-0/raw/s-c7630f957233a13e259fef20603ccf79375e4bd4.jpg" alt="">
            <h3 class="text-xl font-heading leading-relaxed">¿Que es un <br> sistema experto?</h3></a>
          </div>
        </div>
      </section>
    </div>
 <section class="py-10 text-center" style="background-color: #230A59">
   </section>
  </q-layout>
</template>

<script>
export default {
  name: 'Inicio',
  data () {
    return {
      left: false,
      slide: '1',
    }
  }
}
</script>
<style>
@import '../css/inicio.css';
</style>