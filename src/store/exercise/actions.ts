import Exercise from "src/models/Exercise";

const exercise = new Exercise();

/**
 * Return all exercises paginated
 * @param commit
 * @param state
 */
export async function index({commit}: any) {
  commit('SET_EXERCISES', await exercise.all())
}

export async function show({commit}: any, id: string) {

}

export async function store({commit}: any, payload: any) {
  const url = await exercise.uploadImage(payload.image);
  await exercise.create({
    description: payload.description,
    difficult: payload.difficult,
    image: url,
    muscle: payload.muscle,
    name: payload.name,
    objective: payload.objective
  })
}

export async function update({commit}: any, id: string) {

}

export async function remove({commit}: any, id: string) {

}

