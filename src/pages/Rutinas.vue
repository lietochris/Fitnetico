<template>
  <q-layout>

    <f-header/>

    <div class="tw-py-12">
      <div class="flex tw-mb-4">
        <div class="tw-w-full" style="height:350px">
          <div class="tw-align-middle">
            <q-img style="height:350px" class="tw-h-full"
                   src="https://www.cmdsport.com/app/uploads/2019/05/imagym-huesca.jpg">
              <div class="absolute-full text-subtitle2 flex flex-center">
                <div class="text-h3 text-white "> Mis rutinas &nbsp;
                </div>
              </div>
            </q-img>
          </div>
        </div>
      </div>

      <div class="flex tw-mb-4">
        <div class="tw-w-full">
          <div class="tw-flex tw-flex-row tw-flex-wrap tw-px-5 tw-mb-5">
            <div v-for="(routine, i) in routines" :key="i" class="tw-w-1/2 tw-p-1">
              <q-intersection
                once
                transition="scale"
              >
                <router-link :to="`/rutinas/ver/${routine.id}`">
                  <div class="flex tw-mb-4 ">
                    <div class="tw-w-full tw-h-40 routine">
                      <p class="text-center tw-pt-8 text-white tw-text-xl text-bold "> Rutina {{i + 1}}</p>
                      <p class="tw-pl-8 tw-pt-4 text-white tw-text-md tw-break-words"><span>objetivo: {{routine.difficult}} </span>
                        <span class="tw-pr-8" style="float:right;"> Dificultad: {{routine.difficult}} </span></p>
                      <div class="tw-h-8 bg-dark"></div>
                    </div>
                  </div>
                </router-link>
              </q-intersection>
            </div>
          </div>

        </div>
      </div>
    </div>

    <q-footer class="bg-dark text-white">
      <q-toolbar>
        <q-toolbar-title class="tw-flex tw-justify-center tw-text-gray-500 tw-text-xs">
          Fitnetico © 2020
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
    import FHeader from "../components/FHeader";

    export default {
        name: 'Rutinas',
        components: {FHeader},
        data() {
            return {}
        },
        created() {
            this.$store.dispatch('routine/index')
        },
        computed: {
            routines() {
                return this.$store.state.routine.routines
            }
        }
    }
</script>

<style>
  .recent {
    background-image: linear-gradient(
      50deg,
      rgba(62, 56, 242, 1) 0%,
      rgba(118, 46, 202, 1) 41%,
      rgba(156, 39, 176, 1) 100%
    );
    border-radius: 15px;
    background-size: 200% auto;
    transition: background-position 0.2s;
  }

  .routine {
    background-image: linear-gradient(
      550deg,
      rgba(67, 7, 143, 1) 0%,
      rgba(104, 200, 207, 1) 50%,
      rgba(0, 139, 229, 1) 100%
    );
    border-radius: 15px;
    background-size: 200% auto;
    transition: background-position 0.2s;
  }
</style>
