import axios from "axios";
import { getSessionToken } from "../../utils/storageUtils";

export const pocketmonInstance = axios.create({
    baseURL: `${import.meta.env.VITE_API_POKETMON_BASE_URL}`,
});

export const userDataInstance = axios.create({
    baseURL:`${import.meta.env.VITE_APP_URL}`
})

userDataInstance.interceptors.request.use((authData)=>{
    const token = getSessionToken()
    if(token) {
        authData.headers["Authorization"]=`Bearer ${token}`
    }
    return authData
}, (error)=> {
    return Promise.reject(error)
})