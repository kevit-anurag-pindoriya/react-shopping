import "./App.css";
import Cart from "./components/Cart";
import { Routes, Route, Link, Switch } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import Login from "./components/Login";
import ProductFetch from "./components/ProductFetch";
import CheckOut from "./components/CheckOut";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
function App() {
  const auth = useSelector(({ authReducer }) => authReducer);
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
    </div>
  );
}

export default App;
