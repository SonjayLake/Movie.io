import './style.css'


const BASE_URL = "https://api.themoviedb.org/3/search/movie?query="
const API_KEY = "9a8fe73926fa840ef3ba12ecb4efe819";
const IMG_URL = "https://image.tmdb.org/t/p/w500/";

let search = document.querySelector("button.search-button");
let input = document.querySelector(".search-bar");

search.addEventListener("click", async () => {
  let query = input.value.replace(" ", "%20");

  getMovieDetails(query).then((res) => {
    return res.data.results;
  }).then((movies) => {
    console.log(movies);
    for (let movie of movies) {
      generateMovieCard(movie);
    }
  })
})



const config = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + API_KEY,
  }
}


function generateMovieCard(movie) {


  let col = document.createElement("div");
  col.classList.add("col-md-4", 'mb-3');

  console.log("movie")
  //main card
  let card = document.createElement("div");
  card.classList.add("card");


  //card image
  let img = document.createElement("img");
  img.src = `${IMG_URL}${movie.poster_path}`;
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
  cardText.innerHTML = movie.overview.slice(0, 50) + "...";
  cardBody.appendChild(cardText); //adding text to body

  //adding body to card
  card.appendChild(cardBody);


  //adding card to display;
  col.appendChild(card);
  document.querySelector(".movie-row").appendChild(col);

}

async function getMovieDetails(query) {
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








