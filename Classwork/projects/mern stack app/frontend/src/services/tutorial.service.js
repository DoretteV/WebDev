import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("https://tutorial-p0yf.onrender.com/api/tutorials");
  }

  // get(id) {
  //   return http.get(`/tutorials/${id}`);
  // }

  get(id) {
    return http.get(`https://tutorial-p0yf.onrender.com/api/tutorials/${id}`)
     .catch(error => {
      console.error("Error fetching tutorial:", error);
      throw error;
    });
  }

  create(data) {
    return http.post("https://tutorial-p0yf.onrender.com/api/tutorials", data);
  }

  update(id, data) {
    return http.put(`https://tutorial-p0yf.onrender.com/api/tutorials${id}`, data);
  }

  delete(id) {
    return http.delete(`https://tutorial-p0yf.onrender.com/api/tutorials${id}`);
  }

  deleteAll() {
    return http.delete(`https://tutorial-p0yf.onrender.com/api/tutorials`);
}

findByTitle(title) {
  return http.get(`https://tutorial-p0yf.onrender.com/api/tutorials?title=${title}`);
}
}

const tutorialDataService = new TutorialDataService();
export default tutorialDataService;