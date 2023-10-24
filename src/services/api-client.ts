import axios from "axios";
import apiKey from '../config/apiKey';

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: apiKey
  },
});

export default apiClient;