import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { removeto } from "../Redux/action";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import "./Cart.css";
import { removeone } from "../Redux/action";
import { addone } from "../Redux/action";
function Cart() {
  let total = 0;
  const [price, setPrice] = useState(0);
  const state = useSelector(({ reducer }) => reducer);

  console.log("This only state ", state);
  // console.log(
  //   "this is map in cart",
  //   state.map((data) => data.data)
  // );
  useEffect(() => {
    setPrice(total);
  }, [state]);

  const dispatch = useDispatch();
  return (
    <div>
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
              {/* {setPrice(()=>price + data.data.data.price)} */}
              {(total += data.data.data.price)}
              <div className="cart-list-img-div">
                <img
                  className="cart-list-img"
                  src={data.data.data.image}
                  alt=""
                ></img>
              </div>
              <p>{data.data.data.title}</p>
              <div>
                <p>Count:</p>
              </div>
              <div className="inc">
                <button
                  className="inc"
                  onClick={() => {console.log(data.data.data.id);dispatch(addone(data.data.data.id))}}
                >
                  Increment
                </button>
                <p>{data.data.count}</p>
                <button className="dec" onClick={() => {console.log(data.data.data.id);dispatch(removeone(data.data.data.id))}}>
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
            <button>CheckOut Pay : {price}</button>
          </Link>
        )}
        <Link to="/">
          <button>Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;
