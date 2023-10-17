import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:49212/",
  withCredentials: true,
});

export default api;
