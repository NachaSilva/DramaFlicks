// import { useLocation } from "react-router-dom"
// import { Menu } from "./Menu"

// export const InfoMovie = () => {
//   const location = useLocation();
//   const selectedMovie = location.state?.selectedMovie;
//   // const movie = location.state?.selectedMovie;
//   console.log(selectedMovie)
//   console.log(selectedMovie[0].imdbID)

// if(!selectedMovie){
//   return <p className="errorList"> no se encuentran detalles de las pelis</p>
// }

//   return (
//     <>
//     <Menu/>

//     <img src={selectedMovie[0].Poster} alt="Imagen Pelicula" />
//     <h2 className="titleInfoMovie">{selectedMovie[0].Title}</h2>
//     <h3 className="titleInfoMovie">{selectedMovie[0].Year}</h3>
//     <p></p>
//     </>
//   )
// }
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MovieData } from '../models/movies';

export const MoviesHome = () => {
  const [movies, setMovies] = useState<MovieData | null>(null);
  const [moviesDrama, setMoviesDrama] = useState <MovieData | null>(null);
  const [moviesLove, setMoviesLove] = useState <MovieData | null>(null);
  const [selectedMovie, setSelectedMovie] = useState <MovieData | null>(null);


  const api = 'https://www.omdbapi.com/?';
  const apiKey= 'apikey=601d6a0c' 

  useEffect(() => {
    fetch(api + "i=tt3896198&" + apiKey + "&s=batman")
      .then((response) => response.json())
      .then((movies) => setMovies(movies));
  }, []);

  useEffect(() => {
    fetch(api + "i=tt3896198&" + apiKey + "&s=wedding")
      .then((response) => response.json())
      .then((moviesDrama) => setMoviesDrama(moviesDrama));
  }, []);

  useEffect(() => {
    fetch(api + "i=tt3896198&" + apiKey + "&s=love")
      .then((response) => response.json())
      .then((moviesLove) => setMoviesLove(moviesLove));
  }, []);

  console.log(moviesDrama)

  const navigate = useNavigate();


  const handleClickInfo= (movie: MovieData) =>{
    setSelectedMovie(movie);
     navigate("/movieInfo", { state: { selectedMovie: movie.Search } });

    // navigate("/movieInfo", { state: { selectedMovie: movie } });
    
    // navigate("/movieInfo");
  }
  // console.log(movies);
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
                onClick={()=>handleClickInfo(movies)}
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
          moviesDrama.Search.map((movie) => (
            <div className='movieDiv' key={movie.imdbID}>
              <img 
                onClick={()=>handleClickInfo(moviesDrama)}
                className='movieImage'
                src={movie.Poster}
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
                onClick={()=>handleClickInfo(moviesLove.imdbID)}
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

