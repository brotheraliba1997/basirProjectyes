import React from 'react'
import { Routes, Route, useParams } from "react-router-dom";
import data from '../../data';
import Rating from '../Rating';



export default function ProductScreen() {
    let params = useParams();
    console.log(params)

    const exit = data.products.find(x => x._id === params.id)
    console.log(exit);

    if(!exit){
      return  <div> product is loading</div>
    }

    
     

  return (
    <div className="row">
      <div className="col-2">
        <img className="large" src={exit.image} />
      </div>

      <div className="col-1">
        <ul>
          <li>
            <h1>{exit.name} </h1>
          </li>
          <li>
            <h1>Price :$ {exit.price} </h1>
          </li>
          <li>
            <h1>Catefory {exit.category} </h1>
          </li>
          <li>
            <Rating rating={exit.rating} numReviews={exit.numReviews} />
          </li>
          <li></li>
        </ul>
      </div>
      <div className="col-1">
        <div className="card card-body">
          <ul>
            <li>
              <div className="row">
                <div>Price</div>
                <div className="price"> ${exit.price} </div>
              </div>
            </li>
            <li>
              <div className="row">
                <div>status</div>
                <div>
                  {exit.cout > 0 ? (
                    <span className="sucess">stock </span>
                  ) : (
                    <span className="error">unavilable </span>
                  )}
                </div>
              </div>
            </li>

            <li>
              <button className="primary block">Add</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
