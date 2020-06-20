import Model from "src/models/Model";
import {db} from "src/config/firebase";

export default class Routine extends Model {
  name = "routines";

  /**
   *
   * @param uid
   */
  public async currentUser(uid: string) {
    try {
      const data: Array<object> = [];
      const response = await db.collection(this.name).where('userId', '==', uid).get();
      response.forEach(doc => {
        data.push({
          id: doc.id,
          ...doc.data()
        })
      });
      return data;
    } catch (e) {
      console.error(e)
    }
  }
}
