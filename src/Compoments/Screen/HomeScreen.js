import React from 'react'
import Product from "../../Compoments/Product";
import Rating from "../Rating";
import data from "../../data";

export default function HomeScreen() {
  return (
    <div>
      <main className="main">
        <div className="content">
          <ul className="products">
            {data.products.map((product, i) => (
              <Product
                key={product._id}
                product={product}
                rating={product.rating}
                numReviews={product.numReviews}
              />
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
