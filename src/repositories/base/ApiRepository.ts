import axios from "axios";

const baseDomain = "http://127.0.0.1:5000";
const baseURL = `${baseDomain}/api/_v1`;
// const baseURL = `${baseDomain}`;

export default axios.create({
  baseURL
  // headers: {'Authorization": "Bearer yourToken"}
})