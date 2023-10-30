import axios from "axios";

export default axios.create({
  baseURL: "https://tutorialapp.onrender.com/api/tutorials",
  headers: {
    "Content-type": "application/json"
  }
});