import Exercise from "src/interfaces/Exercise";

export function SET_EXERCISES(state: any, payload: Array<Exercise>) {
  state.exercises = payload;
}

export function SET_TOTAL(state: any, payload: number) {
  state.total = payload;
}

export function SET_PAGES(state: any, payload: number) {
  state.pages = payload;
}
