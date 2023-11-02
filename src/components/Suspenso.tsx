import { useEffect, useState } from "react";
import { Menu } from "./Menu"
import { MovieData } from "../models/movies";

export const Suspenso = () => {

  const [movies, setMovies] = useState<MovieData | null>(null);

  useEffect(() => {
      fetch("https://www.omdbapi.com/?i=tt3896198&apikey=601d6a0c&s=suspense")
        .then((response) => response.json())
        .then((movies) => setMovies(movies));
    }, []);

  return (
    <>
    <Menu/>
    <img src="public\img\suspenso.avif" className="img-fluid"/>

    <h2 className='titleList'>Lista de películas:</h2>
    <div className='movies-genre'>
        {movies &&
          movies.Search.map((movie) => (
            <div className='movieDiv' key={movie.imdbID}>
              <img 
                className='movieImage'
                src={movie.Poster}
                alt='Imagen Película'
              />
            </div>
          ))}
      </div>
    </>
  )
}
