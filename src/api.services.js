import axios from 'axios'

export const apiReq = axios.create({
    baseURL: 'https://immense-taiga-58793.herokuapp.com/api',
})