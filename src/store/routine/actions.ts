import Routine from "src/models/Routine";
import Exercise from "src/models/Exercise";

export async function index({commit, rootState}: any) {
  try {
    const routines = new Routine();
    commit('SET_ROUTINES', await routines.currentUser(rootState.user.user.uid));
  } catch (e) {
    console.error(e)
  }
}

export async function show({commit}: any, id: string): Promise<boolean> {
  try {
    const routine = new Routine();
    commit('SET_ROUTINE', await routine.find(id));
    return true;
  } catch (e) {
    console.error(e);
    return false
  }
}

export async function store({rootState}: any, payload: any) {
  try {
    // Prepare data
    let newRoutine: any = {
      userId: rootState.user.user.uid,
      weight: payload.weight,
      height: payload.height,
      objective: payload.objective,
      exercises: {
        Pecho: [],
        Espalda: [],
        Hombro: [],
        Biceps: [],
        Triceps: [],
        Trapecio: [],
        // Piernas: []
      }
    };
    const muscles = ['Pecho', 'Espalda', 'Hombro', 'Biceps', 'Triceps', 'Trapecio'];
    const exercises = new Exercise();

    // Get all muscle documents and get a random
    for (const muscle of muscles) {
      const data = await exercises.allByMuscle(muscle);
      for (let i = 0; i < 4; i++) {
        const randomNumber = Math.floor(Math.random() * data.length);
        newRoutine.exercises[muscle].push(data[randomNumber]);
      }
    }

    // create document
    const routines = new Routine();
    const response = await routines.create(newRoutine);
    return true;

  } catch (e) {
    console.error(e);
    return false;
  }

}
