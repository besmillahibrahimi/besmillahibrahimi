import {NextApiResponse} from "next";

export function sendResponse(res: NextApiResponse, statusCode = 200) {
    return (doc: object) => {
        res.status(statusCode).json(doc);
    }
}