import React, { useState, useEffect } from "react";
import NavBar from "../NavBar";
import About from "../About";
import Main from "../Main";
import SideBar from "../SideBar";
import ScrollTop from "../ScrollTop";
import Footer from "../Footer";
import CopyRight from "../CopyRight";

const HomePage = () => {
  const API =
    "https://pim.wforwoman.com/pim/pimresponse.php/?service=category&store=1&url_key=top-wear-kurtas&page=1&count=20&sort_by=&sort_dir=desc&filter=";

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        setData(data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container-fluid">
      <div className="row ">
        <NavBar />
      </div>
      <div className="row mt-5">
        <SideBar data={data} />
        <Main data={data} />;
      </div>
      <About data={data} />
      <Footer />
      <ScrollTop />
      <CopyRight />
    </div>
  );
};
export default HomePage;
