import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';  // imports below so that CSS from your
import Card from './Card';
import './Centro.css';




function Centro() {
    return (
        <div className='container c-1'>
            <h1 className="text-center">Sala de Ventas</h1>


        <div className="row col flex c-2 container py-3">
                    <div className="row col3 col-izquierda flex py-3">

            </div>    

            <div className="row col-centro col6 flex row-cols-1 row-cols-md-3 row-cols-g-6 py-3">                
                <div className="col col2 ">
                    <Card />

                </div>
                <div className="col col2 ">
                    <Card />

                </div>
                <div className="col col2 ">
                    <Card />
                </div>
            </div> 

        <div className="row col3 flex col-derecha py-3">
                

            

</div>

            
        </div></div>

      




    );
  }
  
  export default Centro;