import "./App.css";
import Cart from "./components/Cart/Cart";
import { Route, Link, Switch, NavLink } from "react-router-dom";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Login from "./components/Login/Login";
import ProductFetch from "./components/ProductFetch/ProductFetch";
import CheckOut from "./components/CheckOut/CheckOut";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
// import { useDispatch } from "react-redux";
import UserProfile from "./components/UserProfile/UserProfile";
import { useState } from "react";
import Signup from "./components/Signup/Signup";

function App() {
  const [select, setSelect] = useState();
  const auth = useSelector((state) => state.authReducer);
  // const dispatch = useDispatch();
  console.log("+++App.js run +++", auth);
  if (!auth) {
    return (
      <>
        <main>
          <Switch>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/signup" exact>
              <Signup></Signup>
            </Route>
            <Route path="*">
              <Login />
            </Route>
          </Switch>
          <Redirect to="/login" replace={true} />
        </main>
      </>
    );
  }
  return (
    <div className="App">
      <div>
        <nav className="App__header">
          <div>
            <NavLink className="App__homelink" to="/">
              <p className="App__header-title">Only Shopping</p>
            </NavLink>
          </div>
          <div className="App__button-group">
            <div className="App__dropdown">
              <select
                className="dropdown"
                value={select}
                onChange={(event) => {
                  setSelect(event.target.value);
                  console.log("Current Seleted is Option " + select);
                }}
              >
                <option value="none">None</option>
                <option value="men's clothing">men's clothing</option>
                <option value="women's clothing">women's clothing</option>
                <option value="jewelery">jewelery</option>
                <option value="electronics">electronics</option>
              </select>
            </div>
            <div>
              <Link to="/cart">
                <button>Cart</button>
              </Link>
            </div>
            <div>
              <Link to="/user-profile">
                <button>Account</button>
              </Link>
            </div>
          </div>
        </nav>
      </div>
      <main>
        {auth && (
          <Switch>
            <Route path="/" exact>
              <ProductFetch seleted={select} />
            </Route>
            <Route path="/login" exact>
              <Redirect to=""></Redirect>
            </Route>
            <Route path="/cart">
              <Cart></Cart>
            </Route>
            <Route path="/checkout">
              <CheckOut></CheckOut>
            </Route>
            <Route path="/productdetail/:type">
              <ProductDetail />
            </Route>
            <Route path="/user-profile">
              <UserProfile />
            </Route>
          </Switch>
        )}
      </main>
      <footer className="footer">
        <div className="footer__all">
          <div className="footer__all-media">
            <div>
              <p>About Us,</p>
            </div>
            <div>
              <p>Careers,</p>
            </div>
            <div>
              <p>Press Releases,</p>
            </div>
            <div>
              <p>Unknown Cares,</p>
            </div>
            <div>
              <p>Gift a Smile,</p>
            </div>
            <div>
              <p>Unknown Science</p>
            </div>
          </div>
          <div>
            <p>
              Conditions of Use & SalePrivacy NoticeInterest-Based Ads©
              1996-2022, Unknown.com, Inc. or its affiliates
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
