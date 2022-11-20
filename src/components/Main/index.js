import React from "react";
import "./Main.css";
import ItemBar from "./ItemBar";
import Card from "./Card";

const Main = (props) => {
  console.log(props.data);
  return (
    <div className="col-md-9 mt-5">
      <ItemBar data={props.data.count} />
      <div className="row">
        {props.data.products ? props.data.products.map((item, index) => <Card key={index}>{item}</Card>) : null}
      </div>
    </div>
  );
};
export default Main;
