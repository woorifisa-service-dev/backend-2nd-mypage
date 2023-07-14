import axios from "axios";

function createInstance() {
  return axios.create({
    baseURL: "http://localhost:8080",
  });
}

export const baseAxios = createInstance();
