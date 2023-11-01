import { useEffect, useState } from "react";

export const GetMovies = (url)=>{
    const [movies, setMovies] = useState<MovieData | null>(null);
    
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
    
    useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((movies) => setMovies(movies.search))
  }, []);

    return {movies}
    // const options = {
    //     method: 'GET',
    //     // url: 'https://api.themoviedb.org/3/movie/popular',
    //     headers: {

    //     } 
    // }
    // return fetch('https://api.themoviedb.org/3/movie/latest', options);
}
