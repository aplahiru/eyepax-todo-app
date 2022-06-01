import axios from "axios";

export const createApiClient = (baseURL: string) => {
    const instance = axios.create({
      baseURL,
    });
    return instance;
    }