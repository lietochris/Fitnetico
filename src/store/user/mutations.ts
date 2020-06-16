export function SET_ERROR(state: any, payload: string): void {
  state.error = payload;
}

export function SET_USER(state: any, payload: object): void {
  state.user = payload;
}

export function REMOVE_USER(state: any): void {
  state.user = null
}

export function SET_USERS(state: any, payload: Array<any>) {
  state.users = payload;
}

export function SET_TOTAL(state: any, payload: number) {
  state.total = payload;
}

export function SET_PAGES(state: any, payload: number) {
  state.pages = payload;
}
