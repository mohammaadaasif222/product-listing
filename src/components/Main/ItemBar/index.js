import React from "react";
import "../ItemBar/itembar.css";
const ItemBar = (props) => {

  return (
    <>
      <div className="container filter-box">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center">{props.data}</div>
          <div className="col-md-6 text-right">
            <select className="item-bar" name="filter" id="filter">
              <option value="newest">Newest</option>
              <option value="lth">Price(Low to High)</option>
              <option value="htl">Price(High to Low)</option>
              <option value="discoutn">Discount</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};
export default ItemBar;
