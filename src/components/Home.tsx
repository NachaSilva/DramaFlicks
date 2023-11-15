import { NavLink, useNavigate } from 'react-router-dom';
import { MoviesHome } from './MoviesHome';
import { useState } from 'react';

export const Home = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate('/');
  };

  // const [movies, setMovies] = useState<MovieData[]>([]);
  const [query, setQuery] = useState('');

  const searchMovie = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('searching');
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=ce9a8ba9fbedd1b69dad102a695950c2&query=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      // setMovies(data.results)
    } catch (e) {
      console.log(e);
    }
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <div className='header'>
        <button className='unstyle'>
          {' '}
          <img
            className='logo'
            src='public\img\logo.png'
            alt='logo imagen'
            onClick={handleHome}
          />
        </button>
        <nav className='navbar navbar-light'>
          <form className='form-inline nav-bar navBar' onSubmit={searchMovie}>
            <input
              className='form-control mr-sm-2'
              type='search'
              placeholder='Movie Search'
              aria-label='Search'
              value={query}
              onChange={changeHandler}
            />
            <button
              className='btn btn-outline-light my-2 my-sm-0 button-search custom-btn-size'
              type='submit'
            >
              Search
            </button>
          </form>
        </nav>
        <div className='dropdown'>
          <button
            className='btn'
            type='button'
            data-bs-toggle='dropdown'
            aria-expanded='false'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='40'
              height='40'
              fill='currentColor'
              className='bi bi-list text-light'
              viewBox='0 0 16 16'
            >
              <path
                fillRule='evenodd'
                d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
              />
            </svg>
          </button>
          <ul className='dropdown-menu unstyle'>
            <li className='dropdown-item'>
              <NavLink className='nav-link menuNav' to='/action'>
                Acción
              </NavLink>
            </li>
            <li className='dropdown-item'>
              <NavLink className='nav-link menuNav' to='/comedy'>
                Comedia
              </NavLink>
            </li>
            <li className='dropdown-item'>
              <NavLink className='nav-link menuNav' to='/drama'>
                Drama
              </NavLink>
            </li>
            <li className='dropdown-item'>
              <NavLink className='nav-link menuNav' to='/romantic'>
                Romance
              </NavLink>
            </li>
            <li className='dropdown-item'>
              <NavLink className='nav-link menuNav' to='/suspense'>
                Suspenso
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <MoviesHome />
    </>
  );
};
