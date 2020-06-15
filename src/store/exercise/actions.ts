import Exercise from "src/interfaces/Exercise";
import {db} from "src/config/firebase";

/**
 *
 * @param commit
 */
export async function index({commit}: any) {
  try {
    const exercises: Array<object> = [];
    const response = await db.collection('exercises').get();

    response.forEach(doc => {
      exercises.push({
        id: doc.id,
        ...doc.data()
      })
    });
    commit('INDEX', exercises)
  } catch (e) {
    console.error(e)
  }
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
