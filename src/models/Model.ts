import {db} from "src/config/firebase";

export default abstract class Model {
  protected name!: string;

  /**
   *
   */
  public async all(): Promise<Array<object>> {
    let data: Array<object> = [];
    //Get all documents
    const response = await db.collection(this.name).get();
    response.forEach(document => data.push({id: document.id, ...document.data()}));
    return data;
  }

  /**
   *
   * @param payload
   */
  public async create(payload: any) {
    try {
      return await db.collection(this.name).add(payload);
    } catch (e) {
      console.error(e)
    }
  }

  /**
   *
   * @param uid
   */
  public async find(uid: string) {
    try {
      const response = await db.collection(this.name).doc(uid).get();
      return response.data();
    } catch (e) {
      console.error(e)
    }

  }

  /**
   *
   * @param uid
   * @param payload
   */
  public async update(uid: string, payload: any) {
    try {
      const response = await db.collection(this.name).doc(uid).update(payload);
      return true;
    } catch (e) {
      console.error(e)
    }
  }

}
