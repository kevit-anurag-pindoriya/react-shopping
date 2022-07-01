import React from "react";

import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from "../element/Button";
function ProductFetch(props) {
  console.log(props.seleted);
  const [post, setPost] = useState([]);
  const [loding, setLoding] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(5);
  const [select, setSelect] = useState();
  const dispatch = useDispatch();
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

  // const indexOfLastPost = currentPage * postPerPage;

  // const indexOfFristPost = indexOfLastPost - postPerPage;

  // const currentPosts = post.slice(indexOfFristPost, indexOfLastPost);

  const paginate = (number) => {
    setCurrentPage(number);
  };
  console.log("You seletedt ====" + select);
  return (
    <div className="App">
      {loding && (
        <p>
          <h1>Loding................</h1>
        </p>
      )}

      <div></div>
      <Card post={post} select={props.seleted}></Card>
      <Pagination
        postPerPage={postPerPage}
        totalPost={post.length}
        paginate={paginate}
      ></Pagination>
      {/* <Cart></Cart> */}

      {/* <CheckOut></CheckOut> */}
    </div>
  );
}

export default ProductFetch;
