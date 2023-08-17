import React, { useEffect, useState } from "react";
//import data from "../data";
import axios from 'axios';
import { Link } from "react-router-dom";
const Homescreen = () => {
  const [products, setProducts] = useState([]);
      useEffect(()=>{
        const fetchData=async()=>{
          const product=await axios.get('/api/products');
          setProducts(product.data)
        }
        fetchData()

      },[])
  return (
    <div>
      <h1>Featured Products</h1>
      <div className="products">
        
        {products.map((product) => {
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
