import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { useSelector } from "react-redux";
import { Routes, Route, Link } from "react-router-dom";
function Card(props) {
  console.log(props.post)
  const dispatch = useDispatch();
  const state = useSelector(({ reducer }) => reducer);
  console.log("This is a state from card  =====", state);

  return (
    <>
      <ol>
        {props.post
          .filter((data) => {
            return !!props.select === false || props.select === "none"
              ? data
              : data.category === props.select;
          })
          .map((data) => {
            return (
              <li key={data.id}>
                <div className="card">
                  <div className="img">
                    <Link to={{ pathname: `/productdetail/${data.id}` }} state={data}>
                      <img
                        src={data.image}
                        alt="pic come hare"
                        height="200px"
                      ></img>
                    </Link>
                    {console.log(data.price)}
                  </div>
                  <div>
                    <p>Name : {data.title}</p>
                  </div>
                  <div>
                    <p>price : {data.price}</p>
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        dispatch({ type: "ADD", payload: { data } });
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
      </ol>
    </>
  );
}

export default Card;
