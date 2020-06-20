import {boot} from 'quasar/wrappers'
import {auth} from "src/config/firebase";

export default boot(({store}: any) => {

  return new Promise((resolve) => {

    auth.onAuthStateChanged(user => {
      if (user) {
        store.dispatch('user/setUser', {email: user.email, uid: user.uid})
          .then(() => {
            resolve()
          })
      } else {
        resolve()
      }
    })
  });
})
