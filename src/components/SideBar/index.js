import React, { useState } from "react";
import "./sidebar.css";
import { RiArrowDropUpLine } from "react-icons/ri";

const SideBar = () => {
  const [isActive, setIsActive] = useState(false);
  const showButtons = () => {
    setIsActive((current) => !current);
  };
  return (
    <div className="col-md-3 pt-5 pl-5">
      <div className="filter-container">
        <h3 className="title pt-3">Filter</h3>
        <hr />
        <div className="filters" onClick={showButtons}>
          Category <RiArrowDropUpLine className="cat-icon" />
        </div>
        <div
          className="filter-name"
          style={{
            display: isActive ? "block" : "none",
      
          }}
        >
          <input type="checkbox" id="kurtas" name="kurtas" value="kurtas" />
          <label htmlFor="kurtas" >Kurats</label>
          <br />
          <input type="checkbox" id="dress" name="dress" value="dress" />
          <label htmlFor="dress">Sets & Dresses</label>
          <br></br>
        </div>
        <hr />
        <div className="filters">
          Price <RiArrowDropUpLine className="cat-icon" />
        </div>
        <hr />
        <div className="filters">
          Color <RiArrowDropUpLine className="cat-icon" />
        </div>
        <hr />
        <div className="filters">
          Size
          <RiArrowDropUpLine className="cat-icon" />
        </div>
        <hr />
        <div className="filters">
          Neck Type <RiArrowDropUpLine className="cat-icon" />
        </div>
        <hr />
        <div className="filters">
          Occasion <RiArrowDropUpLine className="cat-icon" />
        </div>
        <hr />
        <div className="filters">
          Length <RiArrowDropUpLine className="cat-icon" />
        </div>
        <hr />
        <div className="filters">
          Pattern <RiArrowDropUpLine className="cat-icon" />
        </div>
        <hr />
        <div className="filters pb-3">
          Ornamentation <RiArrowDropUpLine className="cat-icon" />
        </div>
      </div>
    </div>
  );
};
export default SideBar;
