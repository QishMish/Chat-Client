import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://sweeft-chat-app.herokuapp.com/api/",
});

export default axiosInstance
