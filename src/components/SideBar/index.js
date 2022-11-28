import React from "react";
import "./sidebar.css";
import { useSelector } from "react-redux";

const SideBar = () => {
  const { data } = useSelector((state) => state.data);
  return (
    <div className="col-sm-3 pt-5">
      <div className="filter-container">
        <h3 className="title pt-3">Filter</h3>
        <hr />
        {data.result.filters.map((item, index) => {
              return (
                <><div className="filter-holder">
                  <label className="filters" key={index}>
                    {item.filter_lable}
                  </label>
                  <select className="fliter-select" key={Date.now()}>
                    {data.result.filters.options ? data.result.filters.options.map((item , index)=>{
                     <option key={index+Date.now()} value={item.value}>{item.value}</option>
                    }) : null}
                  </select>
                  <hr />
                  </div>
                </>
              );
            })
          }
      </div>
    </div>
  );
};
export default SideBar;
