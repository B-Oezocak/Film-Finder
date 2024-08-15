const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const assert = require('assert');


// Create a new JSDOM instance
const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`);

// Set the global window and document objects
global.window = dom.window;
global.document = dom.window.document;

const { 
  getGenres,
  getMovies,
  getMovieInfo,
} = require('../public/script.js');

const {
  populateGenreDropdown,
  getSelectedGenre,
  showBtns,
  clearCurrentMovie,
  likeMovie,
  dislikeMovie,
  createMoviePoster,
  createMovieTitle,
  createMovieOverview,
  getRandomMovie,
  displayMovie,
} = require('../public/helpers.js');

describe ('filmFinder', () => {
  describe('getGenres', () => {
    it('returns an array of genres', async () => {
      //Setup - Define expected output
      const expected = [
        { id: 28,name: 'Action' },
        { id: 12, name: 'Adventure' },
        { id: 16, name: 'Animation' },
        { id: 35, name: 'Comedy' },
        { id: 80, name: 'Crime' },
        { id: 99, name: 'Documentary' },
        { id: 18, name: 'Drama' },
        { id: 10751, name: 'Family' },
        { id: 14, name: 'Fantasy' },
        { id: 36, name: 'History' },
        { id: 27, name: 'Horror' },
        { id: 10402, name: 'Music' },
        { id: 9648, name: 'Mystery' },
        { id: 10749, name: 'Romance' },
        { id: 878, name: 'Science Fiction' },
        { id: 10770, name: 'TV Movie' },
        { id: 53, name: 'Thriller' },
        { id: 10752, name: 'War' },
        { id: 37, name: 'Western' }
      ];

      //Exercise - Call the method under test
      const actual = getGenres();

      //Verify - Verify the expected output matches the actual output
      assert.equal(JSON.stringify(await actual), JSON.stringify(expected));
    });
  });
  
  describe('getMovies', () => {
    it('returns an array of movies', async () => {
      //Setup - Define expected output
      const expected = [

      ];

      //Exercise - Call the method under test
      const actual = getMovies("Action");

      //Verify - Verify the expected output matches the actual output
      assert.equal((typeof await actual), "object");
    });
  });
  
  describe('getMovieInfo', () => {
    it('returns object with movie details', async () => {
      //Setup - Define expected output
      const movie = {
        id: "5",
      };
      const expected = {
        adult: false,
        backdrop_path: '/f2t4JbUvQIjUF5FstG1zZFAp02N.jpg',
        belongs_to_collection: null,
        budget: 4000000,
        genres: [ { id: 35, name: 'Comedy' } ],
        homepage: 'https://www.miramax.com/movie/four-rooms/',
        id: 5,
        imdb_id: 'tt0113101',
        origin_country: [ 'US' ],
        original_language: 'en',
        original_title: 'Four Rooms',
        overview: "It's Ted the Bellhop's first night on the job...and the hotel's very unusual guests are about to place him in some outrageous predicaments. It seems that this evening's room service is serving up one unbelievable happening after another.",
        popularity: 17.157,
        poster_path: '/75aHn1NOYXh4M7L5shoeQ6NGykP.jpg',
        production_companies: [
          {
            id: 14,
            logo_path: '/m6AHu84oZQxvq7n1rsvMNJIAsMu.png',
            name: 'Miramax',
            origin_country: 'US'
          },
          {
            id: 59,
            logo_path: '/yH7OMeSxhfP0AVM6iT0rsF3F4ZC.png',
            name: 'A Band Apart',
            origin_country: 'US'
          }
        ],
        production_countries: [ { iso_3166_1: 'US', name: 'United States of America' } ],
        release_date: '1995-12-09',
        revenue: 4257354,
        runtime: 98,
        spoken_languages: [ { english_name: 'English', iso_639_1: 'en', name: 'English' } ],
        status: 'Released',
        tagline: "Twelve outrageous guests. Four scandalous requests. And one lone bellhop, in his first day on the job, who's in for the wildest New year's Eve of his life.",
        title: 'Four Rooms',
        video: false,
        vote_average: 5.837,
        vote_count: 2594
      };

      //Exercise - Call the method under test
      const actual = getMovieInfo(movie);

      //Verify - Verify the expected output matches the actual output
      //assert.equal((typeof await actual), "object");
      assert.equal(JSON.stringify(await actual), JSON.stringify(expected));
    });
  });
});