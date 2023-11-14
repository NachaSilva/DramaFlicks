import { useEffect, useState } from 'react';
import { MovieBox } from './MovieBox';

export const MoviesHome = () => {

  interface MovieData{
    id: number;
    title: string;
    overview: string;
    poster_path: string; 
    vote_average: number;
    vote_count: number; 
    popularuty: number;
    release_date: string; 
    
  }


  const API_URL =
    'https://api.themoviedb.org/3/movie/popular?api_key=ce9a8ba9fbedd1b69dad102a695950c2';

  const [movies, setMovies] = useState<MovieData[]>([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setMovies(data.results);
      });
  }, []);

  return (
    <>
      <div className='container'>
        <div className='grid'>
        {movies.map((movieReq) => (
          <MovieBox key={movieReq.id} {...movieReq} />
        ))}
        </div>
      </div>
    </>
  );
};
