import axios from "axios";

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BE_URL + "/api/v1",
});

client.defaults.timeout = 5000;

export { client };
