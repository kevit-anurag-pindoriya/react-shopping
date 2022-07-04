import React from "react";
import { useDispatch } from "react-redux/es/exports";

import { Link } from "react-router-dom";
import "./Card.css";
function Card(props) {
  const dispatch = useDispatch();
  

  return (
    <>
      <ol>
        <section className="all-card">
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
                      <figure className="img">
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
                      </figure>
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
        </section>
      </ol>
    </>
  );
}

export default Card;
