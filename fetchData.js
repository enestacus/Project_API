import { displayMovies } from "./movieCard.js";
import { loadingMessage, errorMessage, movieContainer } from "./constants.js";

export function fetchData(url, buttonContainer, counter) {
    fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch data!');
      }
      return response.json();
    })
    .then(data => {
      if (data.Response === 'False') {
        throw new Error(data.Error);
      }
      displayMovies(data.Search);
      movieContainer.appendChild(buttonContainer);
      
      (counter-1)*10+data.Search.length === Number(data.totalResults) ? buttonContainer.remove() : null;
    })
    .catch(error => {
      errorMessage.textContent = `Error: ${error.message}`;
    })
    .finally(() => {
      loadingMessage.textContent = '';
    });
}