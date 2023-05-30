import React, { useEffect, useState, Fragment } from "react";
import ReactStars from "react-rating-stars-component";
import Carousel from "react-material-ui-carousel";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  productDetails,
  clearErrors,
} from "../../Actions/productDetailsActions";
import MetaData from "../Layout/MetaData.js";
import ReviewCard from "./ReviewCard.jsx";
import "./productDetails.css";
import { addToCart } from "../../Actions/cartActions";
import Loader from "../Layout/Loader/Loader";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";

function ProductDetails() {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { id } = useParams();
  const navigate = useNavigate();

  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );
  const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(productDetails(id));
  }, [dispatch, id, alert, error]);

  const options = {
    edit: false,
    color: "#c6bdbd",
    activeColor: "tomato",
    isHalf: true,
    size: window.innerWidth < 600 ? 20 : 25,
  };

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    const qty = quantity + 1;
    if (product.Stock <= quantity) {
      alert.error(`Maximum Item Available In Stock is ${product.Stock}`);
      return;
    }
    setQuantity(qty);
  };

  const decreaseQuantity = () => {
    const qty = quantity - 1;
    if (1 >= quantity) {
      alert.error(`Item Cannot be 0`);
      return;
    }
    setQuantity(qty);
  };

  const addToCartHandler = () => {
    dispatch(addToCart(id, quantity));
    alert.success("Item Added To Cart");
  };

  const loginfirst = () => {
    alert.error("Please Login First To Add Item To Cart");
    navigate("/login");
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <div className="main">
          <Fragment>
            <MetaData title={`${product.name} -- ECOMMERCE`} />
            <div className="ProductDetails">
              <div>
                <Carousel>
                  {product.images &&
                    product.images.map((item, i) => (
                      <img
                        className="CarouselImage"
                        key={i}
                        src={item.url}
                        alt={`${i} Slide`}
                      />
                    ))}
                </Carousel>
              </div>

              <div>
                <div className="detailsBlock-1">
                  <h2>{product.name}</h2>
                  <p>Product # {product._id}</p>
                </div>
                <div className="detailsBlock-2">
                  <ReactStars {...options} value={product.Rating} />
                  <span className="detailsBlock-2-span">
                    ({product.numOfReviews} Reviews)
                  </span>
                </div>
                <div className="detailsBlock-3">
                  <h1>{`₹${product.price}`}</h1>
                  <div className="detailsBlock-3-1">
                    <div className="detailsBlock-3-1-1">
                      <button onClick={decreaseQuantity}>-</button>
                      <input
                        readOnly
                        type="number"
                        value={quantity}
                        style={{ color: "black" }}
                      />
                      <button onClick={increaseQuantity}>+</button>
                    </div>
                    <button
                      onClick={isAuthenticated ? addToCartHandler : loginfirst}
                      disabled={product.Stock < 1 ? true : false}
                    >
                      Add to Cart
                    </button>
                  </div>

                  <p>
                    Status :
                    <b
                      className={product.Stock < 1 ? "redColor" : "greenColor"}
                    >
                      {product.Stock < 1 ? "Out Of Stock" : "In Stock"}
                    </b>
                  </p>
                </div>

                <div className="detailsBlock-4">
                  Description :- <p>{product.description}</p>
                </div>

                <button className="submitReview">Submit Review</button>
              </div>
            </div>

            <h3 className="reviewsHeading">REVIEWS</h3>

            {product.reviews && product.reviews[0] ? (
              <div className="reviews">
                {product.reviews.map((review) => (
                  <ReviewCard key={review._id} review={review} />
                ))}
              </div>
            ) : (
              <p className="noReviews">No Reviews Yet</p>
            )}
          </Fragment>
        </div>
      )}
    </Fragment>
  );
}

export default ProductDetails;
