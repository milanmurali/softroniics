import axios from 'axios';

const IP = "http://localhost"
const PORT = 6969


export async function loginApi(logindata) {
    try {
        const response = await axios.post(`${IP}:${PORT}/auth/login`, logindata)
        return response
    }
    catch (error) {
        return error
    }


}