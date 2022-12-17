import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="col-md-3 p-3 card">
      <img
        className="img"
        src={props.children.image}
        onClick={() => {
          props.onSelect(props.children.id_product);
        }}
        alt={props.children.name}
      ></img>
      <div className="details p-2">
        <Link to={`single/${props.children.id_product}`} className="product-name">
          {props.children.name}
        </Link>
        <p className="product-price m-0">Rs. {props.children.price}</p>
        <p className="product-size m-0">Size- {props.children.size[1]}</p>
      </div>
    </div>
  );
};
export default Card;
