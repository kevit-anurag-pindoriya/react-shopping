import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { removeto } from "../Redux/action";
import { Link } from "react-router-dom";
function Cart() {
  const state = useSelector(({ reducer }) => reducer);
  console.log("This only state ", state);
  console.log(
    "this is map in cart",
    state.map((data) => data.data)
  );
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
            <li>
              {data.data.data.title}
              <button
                onClick={() => {
                  dispatch(removeto(data.data.key));
                }}
              >
                Remove Item from Cart
              </button>
            </li>
          );
        })}
      </div>
      <div className="link">
       {state.length !== 0 && <Link to="/checkout">
          <button>CheckOut</button>
        </Link>}
        <Link to="/">
          <button>Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;