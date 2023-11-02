import { useNavigate } from 'react-router-dom';
export const ErrorRoute = () => {

  const navigate = useNavigate();
  const handleHome = () => {
    navigate('/')
  }
  return (
    <>
    <div className="error-container">
    <button className='unstyle'><img className='logo error-logo ' src='public\img\logo.png' alt='logo imagen'/></button>
    <div className="d-grid gap-2 error-flex">
    <div className="error-flex">
    <h2 className="error-title">Ups! No encontramos</h2>
    <h2 className="error-title">lo que estás buscando</h2>
    <button type="button" className="btn btn-outline-light error-button" onClick={handleHome}>REGRESAR AL HOME</button>
    </div>
    <img className="error-img" src="public\img\error.png" />
    </div>
    </div>
    </>
  )
}
