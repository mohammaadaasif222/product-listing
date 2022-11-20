import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="col-md-3 p-3 card">
      <img src={props.children.image} alt={props.children.name}></img>
      <div className="details p-2">
        <Link to="/single-card" id={props.children.id_product}><p className="product-name">{props.children.name}</p></Link>
        <p className="product-price m-0">Rs. {props.children.price}</p>
        <p className="product-size m-0">Size- {props.children.size[1]}</p>
      </div>
    </div>
  );
};
export default Card;
