import axios from "axios";

class MovieDataService {

  getAll(page = 0) {
    return axios.get(`https://movies-ksdu.onrender.com/api/v1/movies?page=${page}`);
  }

  get(id) {
    return axios.get(`https://movies-ksdu.onrender.com/api/v1/movies/id/${id}`);
  }

  find(query, by = "title", page = 0) {
    return axios.get(
      `https://movies-ksdu.onrender.com/api/v1/movies?${by}=${query}&page=${page}`
    );
  }
  
  createReview(data) {
    return axios.post("https://movies-ksdu.onrender.com/api/v1/movies/review", data);
  }
  updateReview(data) {
    return axios.put("https://movies-ksdu.onrender.com/api/v1/movies/review", data);
  }
  deleteReview(id, userId) {
    return axios.delete("https://movies-ksdu.onrender.com/api/v1/movies/review", {
      data: { review_id: id, user_id: userId },
    });
  }
  getRatings() {
    return axios.get("https://movies-ksdu.onrender.com/api/v1/movies/ratings");
  }
}

export default new MovieDataService();
