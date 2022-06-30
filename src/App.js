import "./App.css";
import Cart from "./components/Cart";
import { Routes, Route, Link, Switch, NavLink } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import Login from "./components/Login";
import ProductFetch from "./components/ProductFetch";
import CheckOut from "./components/CheckOut";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from "./element/Button";
function App() {
  // const auth = useSelector(({ authReducer }) => authReducer);
  const auth = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  console.log("+++App.js run +++", auth);
  if (!auth) {
    return (
      <>
        <Switch>
          <Route path="*">
            <Login />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
        <Redirect to="/login" replace={true} />
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
            <div>
              <Link to="/cart">
                <button>Cart</button>
              </Link>
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
        </nav>
      </div>
      {auth && (
        <Switch>
          <Route path="/" exact>
            <ProductFetch />
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
        </Switch>
      )}
      <footer>
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
