<template>
  <q-layout view="hHh LpR fFf">

    <f-header/>

    <q-drawer show-if-above v-model="left" side="left" bordered>
      <!-- drawer content -->
      <q-img class="absolute-top tw-flex tw-min-h-screen"
             src="https://s3.amazonaws.com/smartsystem/pictures/3426/original/RCH_2171_as_Smart_Object-1.jpg"
             style="height: 150px">
        <div class="absolute-full text-subtitle2 text-center tw-py-32">
          <div class="tw-pt-8 tw-pb-4">
            <img src="https://i.ibb.co/YRJrrHr/user-1.png" class="responsive" width="70" height="70">
          </div>
          <div class="text-weight-bold">{{user.name}} {{user.paternalName}} {{user.maternalName}}</div>
          <div>{{user.email}}</div>
          <q-separator color="white" inset/>
          <q-list padding>
            <!--          <q-item to="/admin/perfil" clickable v-ripple>
                        <q-item-section avatar>
                          <q-icon name="inbox"/>
                        </q-item-section>

                        <q-item-section>
                          Perfil
                        </q-item-section>
                      </q-item>-->

            <q-item to="/admin/ejercicios" clickable v-ripple>
              <!--<q-item active clickable v-ripple> -->
              <q-item-section avatar>
                <q-icon name="star"/>
              </q-item-section>

              <q-item-section>
                Ejercicios
              </q-item-section>
            </q-item>

            <q-item to="/admin/crear" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="send"/>
              </q-item-section>

              <q-item-section>
                Nuevo ejercicio
              </q-item-section>
            </q-item>

            <q-item to="/admin/usuario" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="drafts"/>
              </q-item-section>

              <q-item-section>
                Usuarios
              </q-item-section>
            </q-item>
          </q-list>
          <q-separator color="white" inset/>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>

    <q-footer elevated class="bg-dark text-white">
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
        components: {FHeader},
        data() {
            return {
                left: false
            }
        },
        computed: {
            user() {
                return this.$store.state.user.user
            }
        }
    }
</script>
