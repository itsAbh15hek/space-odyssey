import axios from "axios";
const BASE_URL = "https://spaceodysseyapi-xffsa.ondigitalocean.app/";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
});
