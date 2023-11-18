import {NextApiRequest, NextApiResponse} from "next";
import CreateExperience from "../../../lib/services/experience/CreateExperience";
import {sendResponse} from "../../../lib/utility-functions";
import QueryExperience from "../../../lib/services/experience/QueryExperience";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case 'POST':
            CreateExperience(req.body).then(sendResponse(res)).catch(sendResponse(res, 500));
            break;
        case 'GET':
            QueryExperience(req.query).then(sendResponse(res)).catch(sendResponse(res, 500));
            break;
        default:
            res.status(200).send("Welcome to experience end-point")
    }
}