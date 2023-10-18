import { useEffect, useState } from "react";
import { GetMovies } from "../services/TokenShowMovies";
import { showMovies } from "../models/movies";


export const Home = () => {

// const API_URL = 'http://api.themoviedb.org/3'
// const API_KEY = 'ce9a8ba9fbedd1b69dad102a695950c2'
// const IMAGE_PATH = 'https://image.tmdb.org/t/p/original'
const URL_IMAGE = 'https://image.tmdb.org/t/p/original'

//VARIABLES DE ESTADO

const [movies, setMovies] = useState <showMovies[]>([])
// const [serachKey, setSearchKey] = useState("") 
// const [trailer, setTrailer] = useState(null)
// const [movie, setMovie] = useState({title})


useEffect(()=>{
  GetMovies()
  .then((response) => response.json())
  .then((data) =>{setMovies(data);
  })
  .catch((e) => {
    console.log('catch error', e);
  });
}, []);

  return (
    <>
      <div className="header">
        <img className='logo' src='public\img\logo.png' alt='logo imagen' />
        <nav className='navbar navbar-light'>
          <form className='form-inline'>
            <input
              className='form-control mr-sm-2'
              type='search'
              placeholder='Qué película buscas?'
              aria-label='Search'
            />
          </form>
        </nav>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='30'
          height='30'
          fill='currentColor'
          className='bi bi-list text-light'
          viewBox='0 0 16 16'
        >
          <path
            fill-rule='evenodd'
            d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
          />
        </svg>
      </div>
      <hr className="hr"/>

      <div>
      <div className="container mt-3">
        <div className="row">
        {/* {movies.map((movie)=>(
         <div className="col-md-4 mb-3" >
       
          
         </div>  */}


        {/* ))} */}

        </div>
      </div>
      </div>
    </>
  );
};
