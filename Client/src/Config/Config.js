import axios from "axios";
export const axio = axios.create({
  baseURL: "http://localhost:8001",
  //https://mern-acadamy-app.herokuapp.com
  headers: { 
  "X-Custom-Header": "foobar",
  "Accept": "application/json",
  "Content-Type": undefined},
});
