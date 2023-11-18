import axios from "axios";

export const sendEmail = (data) => axios.post('/api/send-email', data);