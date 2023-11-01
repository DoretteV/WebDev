import axios from "axios";

export default axios.create({
  baseURL: "https://tutorial-hq7w.onrender.com/api/tutorials",
  headers: {
    "Content-type": "application/json"
  }
});