import axios from "axios";
import { LanguageContext } from "../context/Context";

let navigatorLanguage = LanguageContext || navigator.language;

const options = {
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    "Accept-Language": `${String(navigatorLanguage)}`,
  },
};

const http = axios.create(options);

export default http;
