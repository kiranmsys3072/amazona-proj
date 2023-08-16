import React from "react";
import data from "../data";
import { Link } from "react-router-dom";
const Homescreen = () => {
  return (
    <div>
      <h1>Featured Products</h1>
      <div className="products">
        {data.products.map((product) => {
          return (
            <div key={product.slug} className="product">
              <Link to={`/products/${product.slug}`}>
                <img src={product.image} alt={product.name} />
              </Link>
              <div className="product-info">
                <Link to={`/products/${product.slug}`}>
                  <p>{product.name}</p>
                </Link>
                <p>
                  {" "}
                  <strong>${product.price}</strong>
                </p>
                <button>Add To Cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Homescreen;
