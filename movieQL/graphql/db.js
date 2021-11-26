import axios from "axios";
const API_URL = "https://yts.mx/api/v2/list_movies.json";

export const getMovies = (limit, rating) => {
    const test = axios.get(`${API_URL}`)
    .then(res => res.data)
    .then(json => json.data.movies);
    return test
}