import './styles/style.css'

import { generateMovieCard, getMovieDetails } from './scripts/card';

let BASE_URL = "https://api.themoviedb.org/3/search/movie?query="

let search = document.querySelector("button.search-button");
let input = document.querySelector(".search-bar");
let queryType = document.querySelector(".dropdown-toggle");
let titleButton = document.querySelector(".title");
let releaseButton = document.querySelector(".release-date");

titleButton.addEventListener("click", () => {
  BASE_URL = "https://api.themoviedb.org/3/search/movie?query=";
  changeDropdown(titleButton);
})

releaseButton.addEventListener("click", () => {
  BASE_URL = "https://api.themoviedb.org/3/discover/movie?primary_release_year=";
  changeDropdown(releaseButton);
})


search.addEventListener("click", async () => {
  let query = input.value.replace(" ", "%20");

  getMovieDetails(query).then((res) => {
    return res.data.results;
  }).then((movies) => {
    document.querySelector(".movie-row").innerHTML = "";
    for (let movie of movies) {
      generateMovieCard(movie, ".movie-row");
    }
  })
})


function changeDropdown(property) {
  queryType.innerHTML = property.innerText;
}








