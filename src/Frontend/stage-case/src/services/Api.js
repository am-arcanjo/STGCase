import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:49212",
});

export default api;
