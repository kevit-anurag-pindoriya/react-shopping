import React from "react";
import { Routes, Route, Link, useParams, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
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
          onClick={() => {alert("Product add to Cart Succesfully");
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
        <div>
          <img src={alldetails.state.image}></img>
        </div>

        <div>
          <h2>Rupee :- {alldetails.state.price}</h2>
        </div>
        <div>
          <h4>category :- {alldetails.state.category}</h4>
        </div>
        <div>
          <h4>Reting : {alldetails.state.rating.rate} / 5</h4>
        </div>
        <div>
          <h4>Reting Count : {alldetails.state.rating.count}</h4>
        </div>
        <div>
          <h5>Description : {alldetails.state.description}</h5>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
