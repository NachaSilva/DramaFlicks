import { useEffect, useState } from 'react';
import { MovieBox } from './MovieBox';
import { BannerHome } from './BannerHome';
import { MovieData } from '../models/movies';

export const MoviesHome = () => {

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
    <BannerHome/>
      <div className='containerHome'>
        <div className='grid'>
        {movies.map((movieReq) => (
          <MovieBox key={movieReq.id} {...movieReq} />
        ))}
        </div>
      </div>
    </>
  );
};
