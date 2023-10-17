export const Home = () => {
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
          className='bi bi-list'
          viewBox='0 0 16 16'
        >
          <path
            fill-rule='evenodd'
            d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
          />
        </svg>
      </div>
      <hr/>
      <div>

      </div>
    </>
  );
};
