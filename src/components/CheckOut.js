import React from "react";
import { useSelector } from "react-redux";

function CheckOut() {
  const state = useSelector(({ reducer }) => reducer);
  console.log("====This data from Checkout Page =====", state);
  let total = 0;
  return (
    <div>
      {state.map((data) => {
        total += data.data.data.price;
        return (
          <li>
            Name : {data.data.data.title} and Price is : {data.data.data.price}
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
    </div>
  );
}

export default CheckOut;
