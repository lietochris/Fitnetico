import {auth, db} from 'src/config/firebase'
import User from "src/models/User";

const user = new User();

/**
 *
 * @param commit
 * @param state
 */
export const index = async ({commit}: any) => {
  commit('SET_USERS', await user.all())
};

/**
 *
 * @param commit
 * @param payload
 */
export function login({dispatch, state}: any, payload: any): Promise<unknown> {
  return new Promise((resolve, reject) => {
    auth.signInWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        resolve()
      })
      .catch(e => {
        console.error(e);
        reject()
      })
  });
}

export async function setUser({commit}: any, payload: any) {
  try {
    const user = new User();
    const response = await user.find(payload.uid);
    commit('SET_USER', {...payload, ...response});
  } catch (e) {
    console.error(e)
  }
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
