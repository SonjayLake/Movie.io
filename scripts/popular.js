import '../styles/popular.css'
import { generateMovieCard } from './card.js'
const POPULAR_URL = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
const API_KEY = "9a8fe73926fa840ef3ba12ecb4efe819";



document.onload = getPopular();

async function getPopular() {
    axios.get(`${POPULAR_URL}&api_key=${API_KEY}`)
        .then((res) => {
            return res.data.results;
        }).then((results) => {
            document.querySelector(".movie-row-popular").innerHTML = "";
            for (let i = 0; i < 8; i++) {

                generateMovieCard(results[i], ".movie-row-popular");
            }
        })

}



