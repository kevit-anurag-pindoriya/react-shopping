import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./ProductDetail.css";
function ProductDetail() {
  // console.log(useParams());
  const dispatch = useDispatch();
  const alldetails = useLocation();
  console.log(alldetails);
  return (
    <>
      <div>
        <h1>ProductDetail</h1>
      </div>
      <div>
        <Link to="/">
          <button>Go Back</button>
        </Link>
        <button
          onClick={() => {
            alert("Product add to Cart Succesfully");
            dispatch({
              type: "ADD",
              payload: { data: { ...alldetails.state } },
            });
          }}
        >
          Add to Cart
        </button>
      </div>
      <div>
        <div>
          <p>
            <h2>---... ) {alldetails.state.title} ( ...---</h2>
          </p>
        </div>
        <div className="product-image-div">
          <img
            className="product-image-img"
            src={alldetails.state.image}
            alt="Product comes here"
          ></img>
        </div>
        <div className="all-info">
          <div className="product-price-div">
            <h2> ₹ : {alldetails.state.price}</h2>
          </div>

          <div className="product-category-div">
            <h4>category :- {alldetails.state.category}</h4>
          </div>
          <div className="product-Rating-div">
            <h4>Rating : {alldetails.state.rating.rate} / 5</h4>
          </div>
          <div className="product-Rating-Count-div">
            <h4>Rating Count : {alldetails.state.rating.count}</h4>
          </div>
          <div className="product-Description-div">
            <h5>Description : {alldetails.state.description}</h5>
          </div>
        </div>
        <div>
          <Link to="/">
            <button>Go Back</button>
          </Link>
          <button
            onClick={() => {
              alert("Product add to Cart Succesfully");
              dispatch({
                type: "ADD",
                payload: { data: { ...alldetails.state } },
              });
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
