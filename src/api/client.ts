import axios from "axios";

const BEUrl = process.env.NEXT_PUBLIC_BE_URL;
const baseURL = BEUrl + "/api/v1";

const client = axios.create({
  baseURL,
});

client.defaults.timeout = 5000;

export { client, BEUrl, baseURL };
