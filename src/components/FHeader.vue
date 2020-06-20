<template>
  <q-header elevated class="bg-dark text-white">
    <q-toolbar>
      <q-toolbar-title>
        <img src="https://i.ibb.co/hHZ5Qkd/logo.png" class="responsive" width="120" height="30">
      </q-toolbar-title>
      <q-space/>
      <q-separator vertical/>
      <q-btn v-if="user.role === 'admin'" to="/admin" color="grey-4" size="10px" stretch flat label="panel de admin"/>
      <q-btn v-if="!user" to="/expertos" color="grey-4" size="10px" stretch flat label="Expertos"/>
      <q-btn to="/" color="grey-4" size="10px" stretch flat label="Inicio"/>
      <q-btn v-if="user" to="/rutinas" color="grey-4" size="10px" stretch flat label="mis rutinas"/>
      <q-btn v-if="user" @click="logout" color="grey-4" size="10px" stretch flat label="Cerrar sesión"/>
    </q-toolbar>
  </q-header>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "FHeader",
        computed: {
            ...mapState('user', ['user'])
        },
        methods: {
            logout() {
                this.$store.dispatch('user/logout')
                    .then(() => {
                        this.$router.go('/')
                    })
            }
        }
    }
</script>

<style scoped>

</style>
