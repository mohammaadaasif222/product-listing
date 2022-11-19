import React from "react";
import "../About/About.css";
import { BsArrowClockwise,BsWallet,BsTruck } from "react-icons/bs";
const About = (props) => {

  return (
    <>
    <hr/>
      <div className="container-fluid">
        <div className="about-content">
         {props.data.description}
        </div>
      </div>
      <div className="container-fluid p-5">
        <div className="row info ">
          <div className="col-md-3 text-center bor-der-right"> 
          <BsWallet className="icon-info"/><br/>
          CASH ON DELIVERY</div> 
          <div className="col-md-3 text-center bor-der-right"> 
          <BsTruck className="icon-info"/><br/>
          FREE SHIPPING</div> 
          <div className="col-md-3 text-center"> 
          <BsArrowClockwise className="icon-info"/><br/>
          EASY RETURN</div>
        </div>
      </div>
    </>
  );
};
export default About;
