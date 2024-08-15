const filmAPI = require("../../private/APIs.js");

const tmdbKey = filmAPI.APIKey;  //change this to your API key
const tmdbBaseUrl = "https://api.themoviedb.org/3";
const playBtn = document.getElementById("playBtn");

const getGenres = async () => {
  const genreRequestEndpoint = "/genre/movie/list";
  const requestParams = `?api_key=${tmdbKey}`;
  const urlToFetch = `${tmdbBaseUrl}${genreRequestEndpoint}${requestParams}`;

  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();

      //console.log(jsonResponse);

      const genres = jsonResponse.genres;

      return genres;
    }
    throw new Error("Failed to fetch genres");
  } catch (error) {
    console.error(error);
  }
};

const getMovies = async (testGenre) => {
  let selectedGenre = "";
  if (typeof getSelectedGenre === "function") {
    selectedGenre = getSelectedGenre();
  } else {
    selectedGenre = testGenre;
  }
  //console.log(selectedGenre);
  const discoverMovieEndpoint = "/discover/movie";
  const requestParams = `?api_key=${tmdbKey}&genre=${selectedGenre}`;
  const additionalParams = "&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
  const urlToFetch = `${tmdbBaseUrl}${discoverMovieEndpoint}${requestParams}${additionalParams}`;

  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();

      const movies = jsonResponse.results;

      return movies;
    }
    throw new Error("Failed to fetch movies");
  } catch (error) {
    console.error(error);
  }
};

const getMovieInfo = async (movie) => {
  const movieId = movie.id;
  const moviesDetailsEndpoint = "/movie";
  const requestParams = `/${movieId}?api_key=${tmdbKey}`;
  const additionalParams = "&language=en-US";
  const urlToFetch = `${tmdbBaseUrl}${moviesDetailsEndpoint}${requestParams}${additionalParams}`;

  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();

      const movieInfo = jsonResponse;

      return movieInfo;
    }
    throw new Error("Failed to fetch info of movie");
  } catch (error) {
    console.error(error);
  }
};

// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = async () => {
  const movieInfo = document.getElementById("movieInfo");
  if (movieInfo.childNodes.length > 0) {
    clearCurrentMovie();
  }

  const movies = await getMovies();
  const randomMovie = await getRandomMovie(movies);
  const info = await getMovieInfo(randomMovie);
  displayMovie(info);
};

//getGenres().then(populateGenreDropdown);
getGenres().then((result) => {
  if (typeof populateGenreDropdown === "function") {
    populateGenreDropdown(result);
  } else {
    //console.log("populateGenreDropdown function is not defined");
  }
});

//playBtn.onclick = showRandomMovie;
if (playBtn) {
  playBtn.onclick = showRandomMovie;
} else {
  //console.log("playBtn element not found");
}

module.exports = {
  getGenres,
  getMovies,
  getMovieInfo,
};