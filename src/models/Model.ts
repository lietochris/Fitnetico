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

  public async create(payload: any) {
    try {
      return await db.collection(this.name).add(payload);
    } catch (e) {
      console.error(e)
    }
  }

}
