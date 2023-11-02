import { MovieData } from "../models/movies";
import { Menu } from "./Menu"
import { useEffect, useState } from "react";

export const Romance = () => {
  const [movies, setMovies] = useState<MovieData | null>(null);

  useEffect(() => {
      fetch("https://www.omdbapi.com/?i=tt3896198&apikey=601d6a0c&s=love")
        .then((response) => response.json())
        .then((movies) => setMovies(movies));
    }, []);
 
  return (
<>
    <Menu/>
    <img src="public\img\imageMovieBannerOne.avif" className="img-fluid"/>

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
