import React, { Fragment, useEffect } from "react";
import { BiMouseAlt } from "react-icons/bi";
import ProductCard from "./ProductCard.jsx";
import MetaData from "../Layout/MetaData.js";
import { all_products,clearErrors } from "../../Actions/productActions.js";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../Layout/Loader/Loader.jsx";
import  {useAlert}  from "react-alert";
import "./Home.css";

function Home() {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(all_products());
    if(error){
      alert.error(error);
      dispatch(clearErrors())
    }
  }, [dispatch,error,alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="E-Commerce" />

          <div className="banner">
            <p>Welcome To E-Commerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>
            <a href="#container">
              <button>
                Scroll <BiMouseAlt />
              </button>
            </a>
          </div>

          <h2 className="homeHeading">Featured Products</h2>

          <div id="container" className="container">
            {products &&
              products.map((product) => <ProductCard key={product._id} product={product} />)}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
}

export default Home;
