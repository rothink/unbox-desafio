import axios from "axios";

axios.interceptors.request.use(
  config => {
    config.baseURL = process.env.VUE_APP_API;
    return Promise.resolve(config);
  },
  error => {
    return Promise.reject(error);
  }
);
