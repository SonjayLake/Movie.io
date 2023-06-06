const IMG_URL = "https://image.tmdb.org/t/p/w500/";
const API_KEY = "9a8fe73926fa840ef3ba12ecb4efe819";
let BASE_URL = "https://api.themoviedb.org/3/search/movie?query="
// const POPULAR_URL = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

const config = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: "Bearer " + API_KEY,
    }
}

export function generateMovieCard(movie, movierow) {


    let col = document.createElement("div");
    col.classList.add("col-lg-3", "col-md-4", "col-sm-6", "mb-2");


    //main card
    let card = document.createElement("div");
    card.classList.add("card");


    //card image
    let img = document.createElement("img");
    if (movie.poster_path) {
        img.src = `${IMG_URL}${movie.poster_path}`;
    } else {
        img.src = "images/no_poster.png";
    }

    img.classList.add("card-img-top");
    card.appendChild(img); //adding image to card

    //card body
    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");


    //card title
    let cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.innerHTML = movie.original_title;

    cardBody.appendChild(cardTitle); // adding title to body


    //card text
    let cardText = document.createElement("p");
    cardText.classList.add("card-text");
    if (movie.overview) cardText.innerHTML = movie.overview.slice(0, 50) + "...";

    cardBody.appendChild(cardText); //adding text to body

    //adding body to card
    card.appendChild(cardBody);


    //adding card to display;
    col.appendChild(card);
    document.querySelector(movierow).appendChild(col);

}
export async function getMovieDetails(query) {
    //getting image
    let resData = axios.get(`${BASE_URL}${query}&api_key=${API_KEY}`, config)
        .then((res) => {
            console.log("Successful Query");
            return res;


        })
        .catch((e) => {
            console.error("Failure, with error: " + e);
        }

        );
    return resData;
}


