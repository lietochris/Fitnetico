import Model from "src/models/Model";
import {db, storage} from "src/config/firebase";

export default class Exercise extends Model {
  name = "exercises";

  public async uploadImage(image: any) {
    const imageRef = storage.child(`exercises/${image.name}`);
    await imageRef.put(image);

    return await imageRef.getDownloadURL();
  }

  public async allByMuscle(muscle: string): Promise<Array<object>> {
    try {
      let data: Array<object> = [];
      const response = await db.collection(this.name)
        .where('muscle', '==', muscle)
        .get();
      response.forEach(doc => {
        data.push({
          id: doc.id,
          ...doc.data()
        })
      });
      return data;
    } catch (e) {
      console.error(e);
      return await Promise.reject()
    }
  }
}
