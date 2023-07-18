import { urlFetch, searchInput, searchButton, movieContainer, loadingMessage, errorMessage } from "./constants.js";
import { fetchData } from "./fetchData.js";

searchButton.addEventListener('click', searchMovies);

let counter;

function searchMovies(event) {
  event.preventDefault();
  counter = 1;
  const searchTerm = searchInput.value.trim();
  if (searchTerm === '') return;

  const urlFetchSearch = `${urlFetch}&s=${searchTerm}`;

  loadingMessage.textContent = 'Loading...';
  errorMessage.textContent = '';
  movieContainer.innerHTML = '';

  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('buttonContainer');
  const showMoreButton = document.createElement('button');
  buttonContainer.appendChild(showMoreButton);
  showMoreButton.classList.add('showMore');
  showMoreButton.id = 'showMore';
  showMoreButton.textContent = 'Show More';
  showMoreButton.addEventListener('click', () => {
    counter++;
    const nextUrl = urlFetchSearch + `&page=${counter}`;
    fetchData(nextUrl, buttonContainer, counter);
  })
  
  fetchData(urlFetchSearch, buttonContainer, counter);

}