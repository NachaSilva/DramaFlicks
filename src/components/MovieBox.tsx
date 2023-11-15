import { useState } from "react";
import { Modal } from "react-bootstrap";
interface MovieBoxProps {
    id: number;
    title: string;
    overview: string;
    poster_path: string; 
    vote_average: number;
    release_date: string; 
}

export const MovieBox: React.FC<MovieBoxProps> = ({title, poster_path, release_date, overview}) => {

const API_IMG = "https://image.tmdb.org/t/p/w500/"
const [show, setShow] = useState(false)  
const handleShow=()=> setShow(true);
const handleClose = ()=> setShow(false);

return (
    <div className="card text-center mb-3 ">
        <div className="card-body cardMovie ">
            <img className="card-img-top" src={API_IMG+poster_path} />
            <div className="card-body">
                <button type="button" className="btn btn-dark" onClick={handleShow}>View More</button>
                <Modal className="" show={show} onHide={handleClose}>
                    <Modal.Header closeButton className="modalMovie">
                    </Modal.Header>
                    <Modal.Body className="modalMovie">
                    <h2 className="text-center text-white">{title}</h2>
                    <h5 className="text-center text-white">{release_date}</h5>
                    <img className="card-img-top imageMovie" src={API_IMG+poster_path} /> 
                    <br/> <br/>
                    <h3 className="text-center text-white">Overview</h3>
                    <p className="text-white">{overview}</p>
                    </Modal.Body>
                    <Modal.Footer className="modalMovie">
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    </div>
  )
}

export default MovieBox;