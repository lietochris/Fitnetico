<template>
  <body background="https://i.ibb.co/4MRDFvb/Fondo0.jpg">
  <q-layout>

    <f-header/>

    <div class="q-pa-md">
      <q-card class="my-card">

        <q-card-section>
          <div class="text-h6" align="center">INICIAR SESIÓN</div>
          <div class="text-subtitle2" align="center">Listo Para Entrenar?</div>
        </q-card-section>

        <q-tabs v-model="tab" class="text-teal">
          <q-tab label="Usuario" name="one"/>
        </q-tabs>

        <q-separator/>

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="one">

            <div class="User" align="center">
              <img src="https://i.ibb.co/fNhFGs6/exercisrre.png" width="150" height="150">
            </div>

            <q-form @submit="login">
              <q-input v-model="form.email" filled type="email" hint="Correo electronico"/>
              <q-input v-model="form.password" filled :type="isPwd ? 'password' : 'text'" hint="Contraseña">
                <template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  />
                </template>
              </q-input>
              <div class="text-center tw-my-5">
                <q-btn type="submit" class="tw-px-4" color="primary" rounded label="Entrar"/>
              </div>
            </q-form>


          </q-tab-panel>

        </q-tab-panels>
      </q-card>
    </div>

  </q-layout>
  </body>
</template>

<script>

    import FHeader from "../components/FHeader";

    export default {
        components: {FHeader},
        data() {
            return {
                form: {},
                isPwd: true,
                tab: 'one'

            }
        },
        methods: {
            login() {
                this.$store.dispatch('user/login', this.form)
                    .then(() => {
                        this.$router.go('/inicio')
                    })
                    .catch(e => console.log(e))
            }
        }
    }
</script>


<style lang="sass" scoped>
  .my-card
    width: 100%
    height: 100%
    max-width: 250px
    margin-left: auto
    margin-right: auto
    bottom: -60px
</style>
