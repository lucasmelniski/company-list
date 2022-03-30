import { ObjectId } from "mongodb";
export default class Utils {
  constructor() {}

  static transformObjectId = (_id) => {
    try {
      return new ObjectId(_id);
    } catch (error) {
      console.log("passed parameter isn't a object id");
      return false;
    }
  };
}
