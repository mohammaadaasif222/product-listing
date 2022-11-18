import  React from "react";
import {useState } from "react";
import "./Main.css";
import ItemBar from "./ItemBar";
import Card from './Card'

const Main = (props) => {
  console.log(props.data?.products);
  const [items, setItems] = useState()
  return (
    <div className="col-md-9 mt-5">
      <ItemBar/>
      <div className="row">
        {items.map((item ,index) =><Card key={index} >{item}</Card>)}
      </div>
    </div>
  );
};
export default Main;
