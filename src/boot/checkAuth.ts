import {boot} from 'quasar/wrappers'
import {auth} from "src/config/firebase";

export default boot(async ({store}: any) => {
  auth.onAuthStateChanged(user => {
    if (user) {
      store.commit('user/SET_USER', {email: user.email, uid: user.uid})
    }
  })
})
