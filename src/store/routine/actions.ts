import Routine from "src/models/Routine";

export async function index({commit, rootState}: any) {
  try {
    const routines = new Routine();
    commit('SET_ROUTINES', await routines.currentUser(rootState.user.user.uid));
  } catch (e) {
    console.error(e)
  }
}
