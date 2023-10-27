import axios from "axios";

export default axios.create({
  baseURL: "https://tutorial-p0yf.onrender.com/api/tutorials", //change to render link
  headers: {
    "Content-type": "application/json"
  }
});