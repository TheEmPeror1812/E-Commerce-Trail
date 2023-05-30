import React, { Fragment, useEffect, useState } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, all_products } from "../../Actions/productActions";
import Loader from "../Layout/Loader/Loader";
import ProductCard2 from "./ProductCard2";
import { useParams } from "react-router";
import Pagination from "react-js-pagination";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import MetaData from "../Layout/MetaData";
import  { useAlert } from "react-alert";

function Products() {

  const categories = [
    "Footwear",
    "Electronic",
    "Bottoms",
    "Tops",
    "Suits",
    "Chemical"
  ]

  const dispatch = useDispatch();
  const params = useParams();
  const alert = useAlert();

  const [CurrentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 50000]);
  const [category, setCategory] = useState("");

  const {
    products,
    error,
    productsCount,
    loading,
    resultPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);

  const keyword = params.keyword;

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const pricehandler = (e, newprice) => {
    setPrice(newprice);
  };


  useEffect(() => {

    if(error){
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(all_products(keyword, CurrentPage, price, category));

  }, [dispatch, keyword, CurrentPage, price, category, error, alert]);

  let count = filteredProductsCount;

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="PRODUCTS -- ECOMMERCE" />
          <div className="main-product-container">
            <h2 className="productsHeading">Products</h2>
            <div className="products">
              {products &&
                products.map((product) => (
                  <ProductCard2 key={product._id} product={product} />
                ))}
            </div>

            <div className="filterBox">
              <Typography>Price</Typography>
              <Slider
                value={price}
                color="secondary"
                onChange={pricehandler}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                min={0}
                max={50000}
              />

              <Typography className="categoryBox">Categories</Typography>
              <ul className="categoryBox">
              {categories.map((category) => (
                <li
                  className="category-link"
                  key={category}
                  onClick={() => setCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
            </div>

            {resultPerPage < count && (
              <div className="paginationBox">
                <Pagination
                  activePage={CurrentPage}
                  itemsCountPerPage={resultPerPage}
                  totalItemsCount={productsCount}
                  onChange={setCurrentPageNo}
                  nextPageText="Next"
                  prevPageText="Prev"
                  firstPageText="1st"
                  lastPageText="Last"
                  itemClass="page-item"
                  linkClass="page-link"
                  activeClass="pageItemActive"
                  activeLinkClass="pageLinkActive"
                />
              </div>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
}

export default Products;
