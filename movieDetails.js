export function displayMovieDetails(movie) {
    movieContainer.innerHTML = '';
  
    const { Title, Year, Rated, Runtime, Genre, Director, Plot, Poster } = movie;
  
    const movieElement = document.createElement('div');
    movieElement.classList.add('movie-details');
  
    const posterElement = document.createElement('img');
    posterElement.src = Poster !== 'N/A' ? Poster : 'no-poster.jpg';
    posterElement.alt = Title;
    movieElement.appendChild(posterElement);
  
    const titleElement = document.createElement('h2');
    titleElement.textContent = Title;
    movieElement.appendChild(titleElement);
  
    const yearElement = document.createElement('p');
    yearElement.textContent = `Year: ${Year}`;
    movieElement.appendChild(yearElement);
  
    const ratedElement = document.createElement('p');
    ratedElement.textContent = `Rated: ${Rated}`;
    movieElement.appendChild(ratedElement);
  
    const runtimeElement = document.createElement('p');
    runtimeElement.textContent = `Runtime: ${Runtime}`;
    movieElement.appendChild(runtimeElement);
  
    const genreElement = document.createElement('p');
    genreElement.textContent = `Genre: ${Genre}`;
    movieElement.appendChild(genreElement);
  
    const directorElement = document.createElement('p');
    directorElement.textContent = `Director: ${Director}`;
    movieElement.appendChild(directorElement);
  
    const plotElement = document.createElement('p');
    plotElement.textContent = `Plot: ${Plot}`;
    movieElement.appendChild(plotElement);
  
    movieContainer.appendChild(movieElement);
  }