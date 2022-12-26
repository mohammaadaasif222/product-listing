import React from "react";
import "./sidebar.css";
import { useSelector } from "react-redux";

const SideBar = () => {
  const { data } = useSelector((state) => state.data);
  console.log(data);
  return (
    <div className="col-sm-3 pt-5">
      <div className="filter-container">
        <h3 className="title pt-3">Filter</h3>
        <hr />
        {data.result.filters.map((item, index) => {
          return <div key={index} className="filter-holder">
            <label className="filters" key={index + 2}>
              {item.filter_lable}
            </label>
            <select className="fliter-select" key={index}>
              {/* {data.result.filters.options.map((i, index) => {
                return (
                  <option key={index + 1} value={i.value}>
                    {i.value}
                  </option>
                );
              })} */}
              <option value='name'></option>
            </select>
            <hr />
          </div>;
        })}
      </div>
    </div>
  );
};
export default SideBar;
