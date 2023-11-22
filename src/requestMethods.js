import axios from "axios";
const BASE_URL = "https://space-odyssey.onrender.com/";
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
// export const userRequest = axios.create({
//   baseURL: BASE_URL,
//   headers: { Authorization: `Bearer ${getToken()}` },
// });
export const userRequest = axios.create({
  baseURL: BASE_URL,
});
