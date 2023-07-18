import { movieContainer } from "./constants.js";
import { showMovieDetails } from "./getAndDisplayMovieData.js";

export function displayMovies(movies) {
      const moviesBox = document.createElement('div');
      moviesBox.classList.add('moviesBox');
    movies.forEach(movie => {
      const { imdbID, Title, Year, Poster } = movie;
      
      const movieElement = document.createElement('div');
      
      movieElement.classList.add('movie');
      movieElement.addEventListener('click', () => showMovieDetails(imdbID));
  
      const posterElement = document.createElement('img');
      posterElement.src = Poster !== 'N/A' ? Poster : 'no-poster.jpg';
      posterElement.alt = Title;
      movieElement.appendChild(posterElement);
  
      const titleElement = document.createElement('h2');
      titleElement.textContent = Title;
      movieElement.appendChild(titleElement);
  
      const yearElement = document.createElement('p');
      yearElement.textContent = Year;
      movieElement.appendChild(yearElement);
  
      moviesBox.appendChild(movieElement);
    });
    
    movieContainer.appendChild(moviesBox);
  }