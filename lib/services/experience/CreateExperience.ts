import Database from "../../db/MongoDB";
import Schemas from "../../db/Schemas";
import Dao from "../../dao/Dao";

const CreateExperience = async (doc: object) => {
  const collection = await Database.of(Schemas.EXPERIENCE);
  const dao = new Dao(collection);
  return dao.create(doc);
}

export default CreateExperience;