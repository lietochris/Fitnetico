import {auth, db} from 'src/config/firebase'
import User from "src/models/User";

const user = new User();

/**
 *
 * @param commit
 * @param state
 */
export async function index({commit}: any) {
  commit('SET_USERS', await user.all())
}

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
export function register({commit}: any, payload: any): void {
  auth.createUserWithEmailAndPassword(payload.email, payload.password)
    .then((response: any) => {
      const data = {
        name: payload.name,
        email: payload.email,
        paternalName: payload.paternalName,
        maternalName: payload.maternalName,
        height: payload.height,
        weight: payload.weight,
        role: 'user'
      };
      db.collection('users').doc(response.user.uid).set(data);
      commit('SET_USER', {email: response.user.email, uid: response.user.uid})
    })
    .catch((error: any) => {
      commit('SET_ERROR', error.code)
    })
}
