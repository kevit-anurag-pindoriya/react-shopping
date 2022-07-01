import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Card.css";
function Card(props) {
  console.log(props.post);
  const dispatch = useDispatch();
  const state = useSelector(({ reducer }) => reducer);
  console.log("This is a state from card  =====", state);

  return (
    <>
      <ol>
        <div className="all-card">
          {props.post
            .filter((data) => {
              return !!props.select === false || props.select === "none"
                ? data
                : data.category === props.select;
            })
            .map((data) => {
              return (
                <div className="card-item" key={data.id}>
                  <li>
                    <div className="card">
                      <div className="img">
                        <Link
                          to={{
                            pathname: `/productdetail/${data.id}`,
                            state: data,
                          }}
                        >
                          <img
                            src={data.image}
                            alt="pic come hare"
                            height="150px"
                          ></img>
                        </Link>
                        {console.log(data.price)}
                      </div>
                      <div className="card-name">
                        <p>{data.title}</p>
                      </div>
                      <div className="card-price">
                        <p> ₹ : {data.price}</p>
                      </div>
                      <div>
                        <button
                          onClick={() => {
                            alert("Product add to Cart Succesfully");
                            dispatch({ type: "ADD", payload: { data } });
                          }}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </li>
                </div>
              );
            })}
        </div>
      </ol>
    </>
  );
}

export default Card;
