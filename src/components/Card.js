import './Card.css';
import img from '../img/pajaro.png';


function Card() {
    return (
   
    <div className="card">
        <div className='heard d-flex'>
            <p className='id col-9' ></p> 
            <button className="btn btn-danger col-3">X</button>
        </div>
        <div>
            <img src={img} className="card-img-top" alt="..."/>        
        </div>
        <div className="card-body">
            <h5 className="card-title">Pajaro peon</h5>
            <p classname="card-text">El pajaro peon es el trabajador principal, mano de obra basica.</p>
        </div>
        <div className="mb-5 d-flex justify-content-around">
            <h3>190$</h3>
            <button className="btn btn-primary">Descripción</button>
        </div>        

        <div>
        </div> 
   
   
    </div>     
    );
  }
  
  export default Card;



