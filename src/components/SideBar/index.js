import React from "react";
import "./sidebar.css";

const SideBar = (props) => {
  console.log(props.data.filters);
  return (
    <div className="col-md-3 pt-5 pl-5">
      <div className="filter-container">
        <h3 className="title pt-3">Filter</h3>
        <hr />
        {props.data.filters
          ? props.data.filters.map((item, index) => {
              return (
                <>
                  <label className="filters" key={index}>
                    {item.filter_lable}
                  </label>
                  <select key={index + 1}>
                    {props.data.filters.options
                      ? props.data.filters.options.map((item, index) => {
                          return (
                            <option value={item.value} key={index + 2}>
                              {item.value}
                            </option>
                          );
                        })
                      : null}
                  </select>
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
