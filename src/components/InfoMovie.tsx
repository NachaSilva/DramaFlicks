import { useLocation } from "react-router-dom"
import { Menu } from "./Menu"

export const InfoMovie = () => {
  const location = useLocation();
  const selectedMovie = location.state?.selectedMovie;
  // const movie = location.state?.selectedMovie;
  console.log(selectedMovie)
  console.log(selectedMovie[0].imdbID)


  // const imdbIDFromURL = new URLSearchParams(location.search).get("imdbID");
// const id = selectedMovie.imdbID;

// const movieToDisplay = selectedMovie.find(movie => movie.imdbID === imdbIDFromURL);


  // const movieInfoId = selectedMovie.find(movie => movie.imdbID === id)


if(!selectedMovie){
  return <p className="errorList"> no se encuentran detalles de las pelis</p>
}

  return (
    <>
    <Menu/>

    <img src={selectedMovie[0].Poster} alt="Imagen Pelicula" />
    <h2 className="titleInfoMovie">{selectedMovie[0].Title}</h2>
    <h3 className="titleInfoMovie">{selectedMovie[0].Year}</h3>
    <p></p>
    </>
  )
}
