import React from 'react'
import Rating from './Rating';
import { Routes, Route, useParams } from "react-router-dom";

export default function Product(props) {

    const { product, rating, numReviews } = props;
   


    
  return (
    <div>
      <li>
        <div className="product">
          <a href={`/product/${product._id}`}>
            <img className="product-image" src={product.image} alt="product" />
          </a>
          <div className="product-name">
            <a href={`/product/${product._id}`}>
              <h2> {product.name}</h2>
            </a>
          </div>

          <Rating rating={rating} numReviews={numReviews} />
          <div className="product-price"> {product.price} </div>
        </div>
      </li>
    </div>
  );
}
