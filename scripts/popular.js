import '../styles/popular.css'
import { generateMovieCard } from './card.js'



document.onload = getPopular();

async function getPopular() {
    console.log("hi");
    axios.get(`${POPULAR_URL}&api_key=${API_KEY}`)
        .then((res) => {
            console.log(res.data.results);
            return res.data.results;
        }).then((results) => {
            document.querySelector(".movie-row-popular").innerHTML = "";
            for (let i = 0; i < 8; i++) {

                generateMovieCard(results[i], ".movie-row-popular");
            }
        })

}



