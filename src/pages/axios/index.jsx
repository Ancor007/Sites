import axios from "axios"

export const instance = axios.create({
    baseURL: 'localhost:5000',
    timeout: 1000,

}) 