const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const assert = require('assert');


// Create a new JSDOM instance
const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`);

// Set the global window and document objects
global.window = dom.window;
global.document = dom.window.document;

const { getGenres } = require('../public/script.js');

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
      const actual = await getGenres();

      //Verify - Verify the expected output matches the actual output
      assert.equal(JSON.stringify(actual), JSON.stringify(expected));
    });
  });
});