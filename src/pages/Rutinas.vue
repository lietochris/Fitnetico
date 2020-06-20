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
      <router-link to="/rutinas/ver/actual">
        <div class="flex tw-mb-4 tw-px-6">
          <div class="tw-w-full tw-h-40 recent">
            <p class="text-center tw-pt-8 text-white tw-text-xl text-bold "> Rutina actual</p>
            <p class="tw-pl-8 tw-pt-4 text-white tw-text-md "><span>objetivo: xxxxx </span> <span class="tw-pr-8"
                                                                                                  style="float:right;"> Dificultad: xxxxx </span>
            </p>
            <div class="tw-h-8 bg-dark"></div>
          </div>
        </div>
      </router-link>

      <div class="flex tw-mb-4">
        <div class="tw-w-full">
          <div class="tw-flex tw-flex-row tw-flex-wrap tw-px-5 tw-mb-5">
            <div v-for="i in 6" :key="i" class="tw-w-1/2 tw-p-1">
              <q-intersection
                once
                transition="scale"
              >
                <router-link :to="'/rutinas/ver/rutina' + i">
                  <div class="flex tw-mb-4 ">
                    <div class="tw-w-full tw-h-40 routine">
                      <p class="text-center tw-pt-8 text-white tw-text-xl text-bold "> Rutina</p>
                      <p class="tw-pl-8 tw-pt-4 text-white tw-text-md tw-break-words"><span>objetivo: xxxxx </span>
                        <span class="tw-pr-8" style="float:right;"> Dificultad: xxxxx </span></p>
                      <div class="tw-h-8 bg-dark"></div>
                    </div>
                  </div>
                </router-link>
              </q-intersection>
            </div>
          </div>

          <div class="q-pa-lg flex flex-center tw-pt-12">
            <q-pagination
              v-model="current"
              :max="3"
              :direction-links="true"
            >
            </q-pagination>
          </div>

        </div>
      </div>
    </div>

    <div class="tw-py-8 bg-dark text-center tw-text-gray-500">Fitnetico 2020</div>

  </q-layout>
</template>

<script>
    import FHeader from "../components/FHeader";

    export default {
        name: 'Rutinas',
        components: {FHeader},
        data() {
            return {
                current: 1
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
