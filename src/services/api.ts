import axios from "axios";
import { APP_ENV_API_URL } from "@env";

const api = axios.create({
  baseURL: "https://api-app-descart-production.up.railway.app",
});

export default api;
