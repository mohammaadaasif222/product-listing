import React, { useState, useEffect } from "react";
import NavBar from "../NavBar";
import About from "../About";
import Main from "../Main";
import SideBar from "../SideBar";
import ScrollTop from "../ScrollTop";
import Footer from "../Footer";
import CopyRight from "../CopyRight";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../redux/features/dataSlice";

const HomePage = () => {
  const { data, loading } = useSelector((state) => state.data);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);

  if (data === undefined || loading) {
    return <h1 className="text-center">Loading...</h1>;
  }

  return (
    <div className="container-fluid">
      <div className="row ">
        <NavBar />
      </div>
      <div className="container-fluid pl-5 pr-5">
        <div className="row mt-5">
          <SideBar data={data.result} />
          <Main data={data.result} />;
        </div>
      </div>
      <About />
      <Footer />
      <ScrollTop />
      <CopyRight />
    </div>
  );
};
export default HomePage;
