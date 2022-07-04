import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./CheckOut.css";
function CheckOut() {
  const state = useSelector(({ reducer }) => reducer);
  console.log("====This data from Checkout Page =====", state);
  let total = 0;
  return (
    <div className="checkout-details">
      <div>
        <h1> Checkout </h1>
      </div>
      {state.map((data) => {
        total += data.data.data.price * data.data.count;
        return (
          <li className="li">
            Name : {data.data.data.title} and Price is : {data.data.data.price}{" "}
            and Quantity : {data.data.count}
          </li>
        );
      })}
      <div>
        <h1>Total is : {total}</h1>
      </div>
      <div>
        <h1>
          <button>PayNowwww : {total}</button>
        </h1>
      </div>
      <div className="link">
        <Link to="/cart">
          <button> Back to Cart </button>
        </Link>
        <Link to="/">
          <button>Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
}

export default CheckOut;
