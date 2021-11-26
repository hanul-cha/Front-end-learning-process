import axios from "axios";
const API_URL = "https://yts.mx/api/v2/list_movies.json?";

export const getMovies = (limit, rating) => {
    let REQUEST_URL = API_URL;
    if(limit > 0) {
        REQUEST_URL += `limit=${limit}`;
    }
    if(rating > 0) {
        REQUEST_URL += `&minimum_rating=${rating}`;
    }

    const movieList = axios.get(`${REQUEST_URL}`)
    .then(res => res.data)
    .then(json => json.data.movies);
    return movieList
}