import Exercise from "src/interfaces/Exercise";
import {db, storage} from "src/config/firebase";

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
export async function store({commit}: any, payload: any) {

  try {
    const imageRef = storage.child(`exercises/${payload.image.name}`);
    await imageRef.put(payload.image);

    const url = await imageRef.getDownloadURL();

    return await db.collection('exercises').add({

      name: payload.name,
      description: payload.description,
      muscle: payload.muscle,
      objective: payload.objective,
      difficult: payload.difficult,
      image: url
    })
  } catch (e) {
    console.error(e)
  }

}
