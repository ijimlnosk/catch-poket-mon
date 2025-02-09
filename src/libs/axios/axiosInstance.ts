import axios from "axios";
import { getSessionToken } from "../../utils/storageUtils";

export const pocketmonInstance = axios.create({
  baseURL: `${import.meta.env.VITE_APP_POKE_BASE_URL}`,
});

export const userDataInstance = axios.create({
  baseURL: `${import.meta.env.VITE_APP_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

userDataInstance.interceptors.request.use(
  (authData) => {
    const token = getSessionToken();
    console.log(token);
    if (token) {
      authData.headers["Authorization"] = `Bearer ${token}`;
    }
    return authData;
  },
  (error) => {
    return Promise.reject(error);
  }
);
