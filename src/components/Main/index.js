import React, { useState, useEffect } from "react";
import "./Main.css";
import ItemBar from "./ItemBar";
import Card from './Card'

const Main = () => {
  //  API
  const API =
    "https://pim.wforwoman.com/pim/pimresponse.php/?service=category&store=1&url_key=top-wear-kurtas&page=1&count=20&sort_by=&sort_dir=desc&filter=";

  // variable
  const [data, setData] = useState([]);

  // Function
  useEffect(() => {
    const getting = async (url) => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setData(data.result.products);
      } catch (error) {
        console.log(error);
      }
    };
    getting(API);
  }, []);


  return (
    <div className="col-md-9 mt-5">
      <ItemBar/>
      <div className="row">
        {data.map((item ,index) =><Card key={index}>{item}</Card>)}
      </div>
    </div>
  );
};
export default Main;
