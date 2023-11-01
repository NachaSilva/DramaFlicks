import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const MoviesHome = () => {
  const [movies, setMovies] = useState<MovieData | null>(null);
  const [moviesDrama, setMoviesDrama] = useState <MovieData | null>(null);
  const [moviesLove, setMoviesLove] = useState <MovieData | null>(null);


  const api = 'https://www.omdbapi.com/?';

  const apiKey= 'apikey=601d6a0c&s' 

  // useEffect(() => {
  //   fetch(api + apiKey+ `&s=${movies}`+ "&type=movie" + "&page=batman")
  //     .then((response) => response.json())
  //     .then((movies) => setMovies(movies));
  // }, []);

    useEffect(() => {
    fetch("https://www.omdbapi.com/?i=tt3896198&apikey=601d6a0c&s=batman")
      .then((response) => response.json())
      .then((movies) => setMovies(movies));
  }, []);

  useEffect(() => {
    fetch('https://www.omdbapi.com/?i=tt3896198&apikey=601d6a0c&s=wedding')
      .then((response) => response.json())
      .then((moviesDrama) => setMoviesDrama(moviesDrama));
  }, []);

  useEffect(() => {
    fetch('https://www.omdbapi.com/?i=tt3896198&apikey=601d6a0c&s=love')
      .then((response) => response.json())
      .then((moviesLove) => setMoviesLove(moviesLove));
  }, []);

  console.log(moviesDrama)

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
  const navigate = useNavigate();
  const handleClickInfo= () =>{
    navigate('/movieInfo')
  }

  console.log(movies);

  const handleScrollLeft =()=>{
    const content = document.querySelector(".movies-container").scrollLeft -= 800;
  }
  const handleScrollRight = ()=>{
    const content = document.querySelector(".movies-container").scrollLeft += 800;
  }

  return (
    <>
    <h2 className='titleCategories'>Acción</h2>

    <div className='div-buttons-directions'>
      <button id='scrolling-button-left' className='unstyle' onClick={handleScrollLeft}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          fill='currentColor'
          className='bi bi-arrow-left-circle text-light'
          viewBox='0 0 16 16'
        >
          <path
            fill-rule='evenodd'
            d='M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z'
          />
        </svg>
      </button>
      <button id='scrolling-button-right' className='unstyle' onClick={handleScrollRight}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          fill='currentColor'
          className='bi bi-arrow-right-circle text-light'
          viewBox='0 0 16 16'
        >
          <path
            fill-rule='evenodd'
            d='M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z'
          />
        </svg>
      </button>
      </div>

      <div className='movies-container'>
        
        {movies &&
          movies.Search.map((movie) => (
            <div className='movieDiv' key={movie.imdbID}>
              <img 
                onClick={handleClickInfo}
                className='movieImage'
                src={movie.Poster}
                alt='Imagen Película'
              />
            </div>
          ))}
      </div>
      <h2 className='titleCategories'>Comedia</h2>

<div className='div-buttons-directions'>
  <button id='scrolling-button-left' className='unstyle' onClick={handleScrollLeft}>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      fill='currentColor'
      className='bi bi-arrow-left-circle text-light'
      viewBox='0 0 16 16'
    >
      <path
        fill-rule='evenodd'
        d='M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z'
      />
    </svg>
  </button>
  <button id='scrolling-button-right' className='unstyle' onClick={handleScrollRight}>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      fill='currentColor'
      className='bi bi-arrow-right-circle text-light'
      viewBox='0 0 16 16'
    >
      <path
        fill-rule='evenodd'
        d='M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z'
      />
    </svg>
  </button>
  </div>
  <div className='movies-container'>
        
        {moviesDrama &&
          moviesDrama.Search.map((moviesDrama) => (
            <div className='movieDiv' key={moviesDrama.imdbID}>
              <img 
                onClick={handleClickInfo}
                className='movieImage'
                src={moviesDrama.Poster}
                alt='Imagen Película'
              />
            </div>
          ))}
      </div>
  <h2 className='titleCategories'>Amor</h2>

<div className='div-buttons-directions'>
  <button id='scrolling-button-left' className='unstyle' onClick={handleScrollLeft}>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      fill='currentColor'
      className='bi bi-arrow-left-circle text-light'
      viewBox='0 0 16 16'
    >
      <path
        fill-rule='evenodd'
        d='M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z'
      />
    </svg>
  </button>
  <button id='scrolling-button-right' className='unstyle' onClick={handleScrollRight}>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      fill='currentColor'
      className='bi bi-arrow-right-circle text-light'
      viewBox='0 0 16 16'
    >
      <path
        fill-rule='evenodd'
        d='M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z'
      />
    </svg>
  </button>
  </div>
  <div className='movies-container'>
        
        {moviesLove &&
          moviesLove.Search.map((movie) => (
            <div className='movieDiv' key={movie.imdbID}>
              <img 
                onClick={handleClickInfo}
                className='movieImage'
                src={movie.Poster}
                alt='Imagen Película'
              />
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
