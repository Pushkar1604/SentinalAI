import axios from "axios";

export const api = axios.create({
  baseURL: "https://sentinalai-ottj.onrender.com",
});