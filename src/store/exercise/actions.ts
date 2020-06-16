import Exercise from "src/interfaces/Exercise";
import {db} from "src/config/firebase";

/**
 * Return all exercises paginated
 * @param commit
 * @param state
 */
export function index({commit, state}: any) {
  //Get total of exercises
  db.collection('exercises').get()
    .then(res => {
      commit("SET_TOTAL", res.size);
      commit("SET_PAGES", Math.ceil((state.total / state.perPage)));
    });

  // Get exercises
  db.collection('exercises')
    .limit(state.perPage)
    .orderBy('difficult')
    .get()
    .then(query => {
      let exercises: Array<any> = [];
      query.forEach(doc => {
        exercises.push({id: doc.id, ...doc.data()})
      });
      commit('SET_EXERCISES', exercises)
    })
}

/**
 *
 * @param commit
 * @param state
 * @param page
 */
export function onChangePage({commit, state}: any, page: number) {

  db.collection('exercises')
    .orderBy('difficult')
    .limit(state.perPage)
    .startAfter(state.perPage * (page - 1))
    .get()
    .then(query => {

      // Clear variable
      let exercises: Array<any> = [];

      // Save data
      query.forEach(doc => {
        exercises.push({
          id: doc.id,
          ...doc.data()
        })
      });
      commit('SET_EXERCISES', exercises)
    })
}

/**
 *
 * @param commit
 * @param payload
 */
export async function store({commit}: any, payload: Exercise) {
  try {
    return await db.collection('exercises').add(payload)
  } catch (e) {
    console.error(e)
  }
  return "Nothing";
}
