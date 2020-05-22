export function SET_ERROR(state: any, payload: string): void {
  state.error = payload;
}

export function SET_USER(state: any, payload: object): void {
  state.user = payload;
}

export function REMOVE_USER(state: any): void {
  state.user = null
}
