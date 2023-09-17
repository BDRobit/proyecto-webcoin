import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';  // imports below so that CSS from your

import img from './img/pajaro.png';
import './Center.css';



function Center() {
    return (
        <div className="container" >


            <div class="row">                
                    <div class='foto col-5'>
                       <img src={img} class="img" alt="nombre foto"/> 
                    </div>
                    <div class='nombre col-7' >
                        <h5 class="card-title">Pajaro Peon</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>



                    </div>
                <div class='heard col-8'> 
                    <div class="card-body">
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>


                </div>
                
  
                
                

            </div>
        

        </div>
        




    );
  }
  
  export default Center;