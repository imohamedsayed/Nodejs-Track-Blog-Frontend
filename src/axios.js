import axios from "axios";
import store from "./store/index";

const Api = axios.create({
  baseURL: "http://127.0.0.1:8000/",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

let x = false;
Api.interceptors.response.use(
  (resp) => resp,
  async (error) => {
    if (error.response.status === 401 && !x) {
      x = true;
      await store.dispatch("Logout");
    }
    return error;
  }
);

export default Api;
