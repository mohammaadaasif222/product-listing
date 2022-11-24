import React, { useEffect } from "react";
import NavBar from "../NavBar";
import About from "../About";
import ScrollTop from "../ScrollTop";
import Footer from "../Footer";
import CopyRight from "../CopyRight";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../redux/features/dataSlice";

const SingleCard = () => {
  const { data, loading } = useSelector((state) => state.data);
  console.log(data.result);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);
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
