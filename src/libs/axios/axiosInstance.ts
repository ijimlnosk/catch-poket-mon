import axios from "axios";

export const pocketmonInstance = axios.create({
    baseURL: `${import.meta.env.VITE_API_POKETMON_BASE_URL}`,
});
