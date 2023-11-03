import { useLocation } from "react-router-dom"
import { Menu } from "./Menu"



export const InfoMovie = () => {
  const location = useLocation();
  const movie = location.state?.selectedMovie;

if(!movie){
  return <p> no se encuentran detalles de las pelis</p>
}

  return (
    <>
    <Menu/>
    <h2>{movie.Title}</h2>
    <img src={movie.Poster} alt="Imagen Pelicula" />
    </>
  )
}
