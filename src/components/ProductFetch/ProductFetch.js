import React from "react";
// import Loder from "../element/Loder";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./ProductFetch.css";
import InfiniteScroll from "react-infinite-scroll-component";
function ProductFetch(props) {
  //-----------------------------------------------------------------------------------
  //---------------------------new code -----------------------------------------------
  const [items, setData] = useState([]);
  const [noMore, setNoMore] = useState(true);
  const [limit, setLimit] = useState(10);
  //-----------------------------------------------------------------------------------

  //-----------------------------------------------------------------------------------------
  //----------------------------------New code ----------------------------------------------

  const fetchdata = async () => {
    const { data } = await axios("https://fakestoreapi.com/products?limit=5");
    setData(data);
  };

  const fetchmoredata = async () => {
    const { data } = await axios(
      `https://fakestoreapi.com/products?limit=${limit}`
    );
    return data;
  };

  useEffect(() => {
    fetchdata();
  }, []);

  console.log("This is data", items);
  const fetchData = async () => {
    const fatchmoredata = await fetchmoredata();
    console.log(fatchmoredata);
    setData(fatchmoredata);
    setLimit(limit + 5);

    if (fatchmoredata.length === 20) {
      setNoMore(false);
    }
  };

  //---------------------------------------------------------------------------------------------

  return (
    <div className="App">
      <div></div>
      <InfiniteScroll
        dataLength={items.length} //This is important field to render the next data
        next={fetchData}
        hasMore={noMore}
        loader={<h1>... Loding ...</h1>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <h2>--- That's All ---</h2>
          </p>
        }
      >
        <Card post={items} select={props.seleted}></Card>
      </InfiniteScroll>
    </div>
  );
}

export default ProductFetch;
