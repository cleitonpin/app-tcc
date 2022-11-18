import axios from "axios";
import { APP_ENV_API_URL } from "@env";

const api = axios.create({
  baseURL: APP_ENV_API_URL,
});

export default api;
