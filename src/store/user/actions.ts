import {auth, db} from 'src/config/firebase'
import User from "src/interfaces/User";

/**
 *
 * @param commit
 * @param payload
 */
export function login({commit}: any, payload: any): void {

  auth.signInWithEmailAndPassword(payload.email, payload!.password)
    .then(response => {
      commit('SET_USER', {email: response!.user!.email, uid: response!.user!.uid});
    })
    .catch(error => {
      commit('SET_ERROR', error.code);
    });
}

/**
 *
 * @param commit
 */
export function logout({commit}: any): void {
  auth.signOut()
    .then(() => {
      commit('REMOVE_USER');
    })
    .catch(error => {
      console.log(error);
    });
}

/**
 *
 * @param commit
 * @param payload
 */
export function register({commit}: any, payload: User): void {
  auth.createUserWithEmailAndPassword(payload.email, payload.password)
    .then((response: any) => {
      const data = {
        name: payload.name,
        paternalName: payload.paternalName,
        maternalName: payload.maternalName,
        height: payload.height,
        weight: payload.weight,
      };
      db.collection('users').doc(response.user.uid).set(data);
      commit('SET_USER', {email: response.user.email, uid: response.user.uid})
    })
    .catch((error: any) => {
      commit('SET_ERROR', error.code)
    })
}
