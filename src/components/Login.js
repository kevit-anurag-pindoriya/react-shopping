import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import "./Login.css";
import { login } from "../Redux/authAction";
import { Button } from "@mui/material";

//============================================== Main function==============================================================

function Login() {
  //=========================================Const Define Here ============================================================

  const auth = useSelector(({ authReducer }) => authReducer);
  console.log("In Login ", auth);
  const emailref = useRef();
  const passwordref = useRef();
  const dispatch = useDispatch();
  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //==============================================validateHandler===============================================================

  const validateHandler = () => {
    if (emailref.current.value.trim() == "") {
      alert(" Email must not be Empty ");
      return;
    }
    if (passwordref.current.value.trim() == "") {
      alert(" password must not be Empty ");
      return;
    }
    if (reg.test(emailref.current.value.trim())) {
      alert(" Please Enter Valid Email ");
      return;
    }
    alert("Login Succesfully");
    console.log("Email ref ==========", emailref.current.value.trim());
    console.log("Email ref ==========", passwordref.current.value.trim());
    emailref.current.value = "";
    passwordref.current.value = "";
    dispatch(login());
    {
      <Redirect to="/"></Redirect>;
    }
  };
  //==============================================(return)======================================================================

  return (
    <div>
      {auth ? (
        <Redirect to="/"></Redirect>
      ) : (
        <div>
          <div className="login">
            <div className="loginbox">
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
              <div className="login__button-div">
                <button class="login__submit" onClick={validateHandler}>
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
