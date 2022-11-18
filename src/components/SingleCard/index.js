import React from "react";
import NavBar from "../NavBar";
import About from "../About";
import ScrollTop from "../ScrollTop";
import Footer from "../Footer";
import CopyRight from "../CopyRight";

const SingleCard = () => {
  return (
    <div className="container-fluid">
      <div className="row ">
        <NavBar />
      </div>
      <div className="row mt-5">
        <div className="col-md-6 border text-center mt-5">Image</div>
        <div className="col-md-6 border text-center mt-5">Details</div>
      </div>
      <About />
      <Footer />
      <ScrollTop />
      <CopyRight />
    </div>
  );
};
export default SingleCard;
