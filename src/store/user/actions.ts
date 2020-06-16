import {auth, db} from 'src/config/firebase'
import User from "src/interfaces/User";

/**
 *
 * @param commit
 * @param state
 */
export function index({commit, state}: any) {
  //Get total of users
  db.collection('users').get()
    .then(res => {
      commit("SET_TOTAL", res.size);
      commit("SET_PAGES", Math.ceil((state.total / state.perPage)));
    });

  // Get users
  db.collection('users')
    .limit(state.perPage)
    .orderBy('weight')
    .get()
    .then(query => {

      let users: Array<any> = [];

      query.forEach(doc => {
        users.push({id: doc.id, ...doc.data()})
      });
      commit('SET_USERS', users)
    })
}

/**
 *
 * @param commit
 * @param state
 * @param page
 */
export function onChangePage({commit, state}: any, page: number) {

  db.collection('users')
    .orderBy('weight')
    .limit(state.perPage)
    .startAfter(state.perPage * (page - 1))
    .get()
    .then(query => {

      // Clear variable
      let users: Array<any> = [];

      // Save data
      query.forEach(doc => {
        users.push({
          id: doc.id,
          ...doc.data()
        })
      });
      commit('SET_USERS', users)
    })
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
export function register({commit}: any, payload: User): void {
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
