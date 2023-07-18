import { displayMovieDetails } from "./movieDetails.js";
import { urlFetch } from "./constants.js";

export function showMovieDetails(imdbID) {
    const urlFetchDetails = `${urlFetch}&i=${imdbID}`;
  
    fetch(urlFetchDetails)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(movie => {
        displayMovieDetails(movie);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }