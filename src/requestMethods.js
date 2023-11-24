import axios from "axios";
const BASE_URL = "https://spaceodysseyapi-xffsa.ondigitalocean.app/";
const getToken = () => {
  const TOKEN = localStorage.getItem("persist:root")
    ? JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user)
        .currentUser.token
    : "";
  console.log("TOKEN rm", TOKEN);
  return TOKEN;
};
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
});
