import {boot} from 'quasar/wrappers'

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/cli-documentation/boot-files#Anatomy-of-a-boot-file
export default boot(({store, router}) => {

  router.beforeEach((to, from, next) => {

    // Admin
    if (to.matched.some(record => record.meta.auth) && to.matched.some(record => record.meta.admin)) {
      const user = store.state.user.user;
      if (user && user.role === 'admin') {
        next()
      } else {
        next('/inicio')
      }
    }
    // Auth
    else if (to.matched.some(record => record.meta.auth)) {
      const user = store.state.user.user;
      if (user === null) {
        next('/login')
      } else {
        next()
      }
    }
    // Guest
    else if (to.matched.some(record => record.meta.guest)) {
      const user = store.state.user.user;
      if (user !== null) {
        next('/inicio')
      } else {
        next()
      }
    }
  })
})
