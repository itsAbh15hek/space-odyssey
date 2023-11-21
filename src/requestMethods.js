import axios from "axios";
const BASE_URL = "https://space-odyssey.onrender.com/";
const TOKEN = localStorage.getItem("persist:root")
  ? JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user)
      ?.currentUser?.token
  : "";
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `Bearer ${TOKEN}` },
});
