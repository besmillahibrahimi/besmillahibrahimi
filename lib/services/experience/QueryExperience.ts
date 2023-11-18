import Database from "../../db/MongoDB";
import Schemas from "../../db/Schemas";
import Dao from "../../dao/Dao";

export default async function QueryExperience(query: object) {
    const col = await Database.of(Schemas.EXPERIENCE);
    const dao = new Dao(col);
    return dao.find(query);
}