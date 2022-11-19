import React, { useState } from "react";
import "./sidebar.css";
import { RiArrowDropUpLine } from "react-icons/ri";

const SideBar = (props) => {
  const [isActive, setIsActive] = useState(false);
  const showButtons = () => {
    setIsActive((current) => !current);
  };

  return (
    <div className="col-md-3 pt-5 pl-5">
      <div className="filter-container">
        <h3 className="title pt-3">Filter</h3>
        <hr />
        {props.data.filters
          ? props.data.filters.map((item, index) => {
              return (
                <>
                  <div className="filters" key={index} onClick={showButtons}>
                  {item.filter_lable}<RiArrowDropUpLine className="cat-icon" />
                  </div>
                  <div
                    className="filter-name"
                    style={{
                      display: isActive ? "block" : "none",
                    }}
                  >
                    {props.data.filters.options ? props.data.filters.options.map((item,index)=>{
                      return<>
                    <input
                      type="checkbox"
                      id="kurtas"
                      name="kurtas"
                      value={item.value}
                    />
                    <label htmlFor="kurtas">{item.value}</label>
                    <br />
                      </>
                    }) : null}
                
                  </div>
                  <hr />
                </>
              );
            })
          : null}
      </div>
    </div>
  );
};
export default SideBar;
