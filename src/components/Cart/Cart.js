import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { removeto } from "../../Services/Actions/action";
import { Link } from "react-router-dom";
import "./Cart.css";
import { removeone } from "../../Services/Actions/action";
import { addone } from "../../Services/Actions/action";

function Cart() {
  const state = useSelector(({ reducer }) => reducer);

  const dispatch = useDispatch();
  return (
    <section className="cart-details">
      <div>
        <p>
          <h1>This is a cart Page </h1>
        </p>
        <p>
          <h1>Total time in Cart is {state.length}</h1>
        </p>
        <div>{state.length === 0 && <p>Empty Cart </p>}</div>
      </div>
      <div className="display-item">
        {state.map((data, index) => {
          return (
            <li className="cart-list">
              Rs. <strong>{data.data.data.price * data.data.count}</strong>
              <figure className="cart-list-img-div">
                <img
                  className="cart-list-img"
                  src={data.data.data.image}
                  alt=""
                ></img>
              </figure>
              <p>{data.data.data.title}</p>
              <div>
                <p>Count:</p>
              </div>
              <div className="inc">
                <button
                  className="inc"
                  onClick={() => {
                    console.log("Button click ", data.data.data.id);
                    dispatch(addone(data.data.data.id));
                  }}
                >
                  Increment
                </button>
                <p>{data.data.count}</p>
                <button
                  className="dec"
                  onClick={() => {
                    data.data.count === 1
                      ? alert("Min Limit reach")
                      : dispatch(removeone(data.data.data.id));
                  }}
                >
                  Decrement
                </button>
              </div>
              <div className="cart-button-div">
                <button
                  className="cart-list-button"
                  onClick={() => {
                    dispatch(removeto(data.data.key));
                  }}
                >
                  <i
                    className="material-icons"
                    onClick={() => {
                      dispatch(removeto(data.data.key));
                    }}
                  >
                    delete
                  </i>
                </button>
              </div>
            </li>
          );
        })}
      </div>
      <div className="link">
        {state.length !== 0 && (
          <Link to="/checkout">
            <button>CheckOut Pay</button>
          </Link>
        )}
        <Link to="/">
          <button>Continue Shopping</button>
        </Link>
      </div>
    </section>
  );
}

export default Cart;
