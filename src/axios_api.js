import axios from "axios";

const getAPI = axios.create({
  baseURL: "https://api.jikan.moe/v3",
  config: {
    headers: {
      "Content-Type": "application/json",
    },
  },
  timeout: "2000",
});
export { getAPI };
