import axios from "axios";

import { API_KEY, BASE_URL } from "../constants/tmdb";

const request = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: "en-US",
  },
});

export default request;
