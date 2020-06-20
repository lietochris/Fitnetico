<template>

  <q-layout view="hHh lpR fFf">

    <f-header/>

    <q-page-container>
      <q-page class=" tw-flex tw-justify-center tw-items-center">
        <q-card class="tw-w-3/4 lg:tw-w-1/2">
          <q-card-section>
            <div class="text-h4 text-center text-bold text-primary">Registro</div>
            <q-form @submit="register" class="tw-mx-1 lg:tw-mx-12 text-center">
              <q-input
                class="tw-my-5"
                standout=""
                v-model="form.name"
                rounded
                label="Nombre"
                :rules="[val => !!val || 'Campo requerido']"
              />
              <q-input
                class="tw-my-5"
                standout=""
                v-model="form.paternalName"
                rounded
                label="Apellido Paterno"
                :rules="[val => !!val || 'Campo requerido']"
              />
              <q-input
                class="tw-my-5"
                standout=""
                v-model="form.maternalName"
                rounded
                label="Apellido Materno"
                :rules="[val => !!val || 'Campo requerido']"
              />
              <q-input
                class="tw-my-5"
                standout=""
                v-model="form.email"
                type="email"
                rounded
                label="Correo electronico"
                :rules="[val => !!val || 'Campo requerido']"
              />
              <q-input
                class="tw-my-5"
                standout=""
                v-model="form.password"
                rounded
                label="Contraseña"
                type="password"
                :rules="[val => !!val || 'Campo requerido']"
              />
              <q-btn class="tw-px-4 tw-py-1" type="submit" color="primary" rounded label="Registrarse"/>
            </q-form>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>

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
        components: {FHeader},
        data() {
            return {
                form: {},
            }
        },
        methods: {
            register() {
                this.$store.dispatch('user/register', this.form)
                    .then(() => {
                        this.$router.go('/inicio')
                    })
            }
        }
    }
</script>
