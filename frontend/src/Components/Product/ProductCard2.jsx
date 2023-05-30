import React from 'react'
import "./ProductCard2.css"
import ReactStars from "react-rating-stars-component"
import {Link} from "react-router-dom"

function ProductCard2({product}) {
    const options = {
        edit:false,
        color: "#c6bdbd",
        activeColor:"tomato",
        value:product.ratings,
        isHalf:true,
        size:window.innerWidth < 600 ? 20 : 25
    }
      return (
        <Link className="productCard2" to={`/product/${product._id}`}>
            <img src={product.images[0].url} alt={product.name} />
            <p>{product.name}</p>
            <div>
                <ReactStars {...options} /><span>{product.numOfReviews} Reviews</span>
            </div>
            <span>₹{product.price}</span>
        </Link>
      )
}

export default ProductCard2