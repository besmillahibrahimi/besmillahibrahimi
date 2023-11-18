import {sendResponse} from "../../lib/utility-functions";

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const handler = (req, res) => {
    if (req.method !== 'POST')
        return res.status(400).send("Invalid method invocation");

    const data = {
        from: "Besmillah Ibrahimi <besmillah@ibrahimi.info>",
        subject: "Thanks for Reaching Out at www.ibrahimi.info!",
        ...req.body,
    };

    if (req.body.templateId)
        data.templateId = process.env[req.body.templateId];
    sgMail
        .send(data)
        .then(sendResponse(res))
        .catch(sendResponse(res, 500));
}

export default handler;