import React from "react";

import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { useRef } from "react";
import "./Signup.css";

import { useState } from "react";
function Signup() {
  const [signup, setSignup] = useState(false);
  const auth = useSelector(({ authReducer }) => authReducer);
  console.log("In Login ", auth);
  const nameref = useRef();
  const emailref = useRef();
  const passwordref = useRef();
  const confpasswordref = useRef();
  const numberref = useRef();
  

  //==============================================validateHandler===============================================================

  const validateHandler = () => {
    if (emailref.current.value.trim() === "") {
      alert(" Email must not be Empty ");
      return;
    }
    if (passwordref.current.value.trim() === "") {
      alert(" password must not be Empty ");
      return;
    }
    if (confpasswordref.current.value.trim() === "") {
      alert(" Conferm password must not be Empty ");
      return;
    }
    if (
      confpasswordref.current.value.trim() !== passwordref.current.value.trim()
    ) {
      alert("Both password Must be Same");
      return;
    }
    if (numberref.current.value.trim() === "") {
      alert("Number  must not be Empty ");
      return;
    }
    alert("Signup Succesfully");
    console.log("Email ref ==========", emailref.current.value.trim());
    console.log("Email ref ==========", passwordref.current.value.trim());
    emailref.current.value = "";
    passwordref.current.value = "";
    nameref.current.value = "";
    confpasswordref.current.value = "";
    numberref.current.value = "";
    setSignup(true);
  };
  //==============================================(return)======================================================================
  return (
    <>
      <div>
        <div className="login">
          <div className="loginbox">
            <div className="login__email-div">
              <input
                className="login__email"
                type="text"
                ref={nameref}
                placeholder="Enter Your name "
              ></input>
            </div>
            <div className="login__email-div">
              <input
                className="login__email"
                type="text"
                ref={emailref}
                placeholder="Enter your email"
              ></input>
            </div>
            <div className="login__password-div">
              <input
                className="login__password"
                type="text"
                ref={passwordref}
                placeholder="Enter your password "
              ></input>
            </div>
            <div className="login__password-div">
              <input
                className="login__password"
                type="text"
                ref={confpasswordref}
                placeholder="Confirm your password "
              ></input>
            </div>
            <div className="login__password-div">
              <input
                className="login__password"
                type="number"
                maxlength="10"
                ref={numberref}
                placeholder="Enter Your Mobile Number "
              ></input>
            </div>
            <div className="login__button-div">
              <button class="login__submit" onClick={() => validateHandler()}>
                Sign Up.
              </button>
            </div>
          </div>
        </div>
      </div>
      {signup && <Redirect to="/login"></Redirect>}
    </>
  );
}

export default Signup;
