import Vue from 'vue'
import Vuex from 'vuex'
// import example from './module-example'
import user from './user'
import routine from './routine'
import exercise from './exercise'

Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  return new Vuex.Store({
    modules: {
      user,
      exercise,
      routine
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })
}
