import axios from "axios";

const baseAxios = axios.create({
    baseURL: '/api',
    headers: {
        "Content-Type": "application/json",
    }
})

export default baseAxios;