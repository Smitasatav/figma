import axios from "axios";

const baseURL = "https://crudcrud.com/api/98972ccffa9f4c1fb3a3b93c1af08fc7/";
const instance = axios.create({
  baseURL,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
