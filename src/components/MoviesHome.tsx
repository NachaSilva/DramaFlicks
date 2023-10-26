import { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';

export const MoviesHome = () => {
  const [movies, setMovies] = useState<MovieData | null>(null);

  useEffect(() => {
    fetch('https://www.omdbapi.com/?i=tt3896198&apikey=601d6a0c&s=batman')
      .then((response) => response.json())
      .then((movies) => setMovies(movies));
  }, []);

  interface MovieData {
    Search: {
      Title: string;
      Year: string;
      imdbID: string;
      Poster: string;
      Genre: string;

      // Otras propiedades de una película
    }[];
    totalResults: string;
    Response: string;
  }

  console.log(movies);
  return (
    <>
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="public\img\imageMovieBannerOne.avif" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="public\img\imageMovieBannerTwo.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="public\img\imageMovieBannerThree.avif" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    <h2 className='titleCategories'>Acción</h2>
      <div className='movies'>
        {movies &&
          movies.Search.map((movie) => (
            <div className='movieDiv' key={movie.imdbID}>
              <img className='movieImage' src={movie.Poster} alt='Imagen Película' />
            </div>
            
          ))}
          </div>
      
    </>
  );
};

{
  /* <ul>
{movies &&
  movies.Search.map((movie) => (
    <li key={movie.imdbID}>
      <div>Title: {movie.Title}</div>
      <div><img src={movie.Poster}/></div>
    </li>
  ))}
</ul> */
}
