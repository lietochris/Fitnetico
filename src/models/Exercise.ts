import Model from "src/models/Model";
import {storage} from "src/config/firebase";

export default class Exercise extends Model {
  name = "exercises";

  public async uploadImage(image: any) {
    const imageRef = storage.child(`exercises/${image.name}`);
    await imageRef.put(image);

    return await imageRef.getDownloadURL();
  }
}
