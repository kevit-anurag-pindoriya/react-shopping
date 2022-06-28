import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";
import Pagination from "./Pagination";
import Cart from "./Cart";
import { Routes, Route, Link } from "react-router-dom";
import CheckOut from "./components/CheckOut";
import ProductDetail from "./components/ProductDetail";

function App() {
  const [post, setPost] = useState([]);
  const [loding, setLoding] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(5);
  const [select, setSelect] = useState();
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setPost(res.data);
        setLoding(false);
      })
      .catch((err) => console.log(err));
  }, []);
  // console.log(post[0]);

  //========================================

  const indexOfLastPost = currentPage * postPerPage;

  const indexOfFristPost = indexOfLastPost - postPerPage;

  const currentPosts = post.slice(indexOfFristPost, indexOfLastPost);

  const paginate = (number) => {
    setCurrentPage(number);
  };
  console.log("You seletedt ====" + select);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<app />}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route
          path="/about"
          element={<div>Hello How are you im about </div>}
        ></Route>
        <Route path="/productdetail/:type" element={<ProductDetail/>}></Route>
      </Routes>
      {loding && (
        <p>
          <h1>Loding................</h1>
        </p>
      )}
      <select
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
      <Card post={currentPosts} select={select}></Card>
      <Pagination
        postPerPage={postPerPage}
        totalPost={post.length}
        paginate={paginate}
      ></Pagination>
      <Cart></Cart>

      <div>
        <h1>This is a Checkout Page </h1>
      </div>
      <CheckOut></CheckOut>
      {/* <ProductDetail></ProductDetail> */}
    </div>
  );
}

export default App;
