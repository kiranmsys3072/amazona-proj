import React, { useEffect, useReducer } from "react";
//import data from "../data";
import axios from "axios";
import { Link } from "react-router-dom";
import logger from "use-reducer-logger";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, products: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: true, error: action.payload };
    default:
      return state;
  }
};

const Homescreen = () => {
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    loading: true,
    error: "",
    products: [],
  });
  //const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const product = await axios.get("/api/products");
        dispatch({ type: "FETCH_SUCCESS", payload: product.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }

      //setProducts(product.data)
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Featured Products</h1>

      <div className="products">
        {loading ? (
          <div>loading....</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          products.map((product) => {
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
                    <strong>${product.price}</strong>
                  </p>
                  <button>Add To Cart</button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Homescreen;
