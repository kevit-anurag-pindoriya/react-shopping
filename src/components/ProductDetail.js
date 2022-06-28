import React from "react";
import { Routes, Route, Link, useParams, useLocation } from "react-router-dom";
function ProductDetail() {
  // console.log(useParams());

  const alldetails = useLocation();
  console.log(alldetails);
  return (
    <>
      <div>
        <h1>ProductDetail</h1>
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
