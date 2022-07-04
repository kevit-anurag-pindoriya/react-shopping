import React from "react";
import "./UserProfile.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";

function UserProfile() {
  const state = useSelector(({ reducer }) => reducer);
  const dispatch = useDispatch();
  return (
    <>
      <section>
        <div>
          <h1> Account</h1>
        </div>
        <div className="userprofile">
          <div className="userprofile-name">
            <div className="name">
              <h2>User : Ankur Khatapita</h2>
            </div>
            <div className="purchase">
              <h4>: Your purchase : </h4> {state.langth}
            </div>
            <div className="display-item">
              {state.map((data, index) => {
                return (
                  <li className="cart-list">
                    <figure className="cart-list-img-div">
                      <img
                        className="cart-list-img"
                        src={data.data.data.image}
                        alt=""
                      ></img>
                    </figure>
                    <p>{data.data.data.title}</p>
                  </li>
                );
              })}
            </div>
          </div>
          <div>
            <button
              onClick={() => {
                alert("You are Logout Now ");
                dispatch({ type: "logout" });
              }}
            >
              Logout..
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default UserProfile;
