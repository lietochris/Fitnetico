export default interface User {
  readonly id: string,
  email: string,
  password: string,
  name: string,
  paternalName: string,
  maternalName: string,
  height: number,
  weight: number
}
