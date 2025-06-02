import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://10.3.19.24:10000/',
});