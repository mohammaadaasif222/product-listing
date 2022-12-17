import React, { useEffect, useState } from "react";
import NavBar from "../NavBar";
import About from "../About";
import ScrollTop from "../ScrollTop";
import Footer from "../Footer";
import CopyRight from "../CopyRight";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../redux/features/dataSlice";
import { useParams } from "react-router-dom";
import "./single.css";

const SingleCard = () => {
  const param = useParams();

  const { data, loading } = useSelector((state) => state.data);
  const [selected, setSelected] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  if (data == undefined) {
    return <h1 className="text-center">Loading...</h1>;
  }
  const selectedProduct = data.result.products.find(
    (item) => item.id_product === param.productID
  );
  console.log(selectedProduct);

  return (
    <div className="container-fluid">
      <div className="row ">
        <NavBar />
      </div>
      <div className="row mt-5">
        <div className="col-md-1 mt-5">
          {selectedProduct.gallery.map((item, index) => {
            return <img src={item.image} className="w-100" key={index} />;
          })}
        </div>

        <div className="col-md-5 mt-5">
          <img
            src={selectedProduct.image}
            className="w-100"
            alt={selectedProduct.name}
          ></img>
        </div>
        <div className="col-md-6 mt-5 pl-5">
          <h1 className="product-title d-flex">{selectedProduct.name}</h1>
          <p className="product-sku d-flex">
            <span className="font-medium">SKU : </span>
            <span>{selectedProduct.sku}</span>
          </p>
          <h2 className="product-pr">Rs.{selectedProduct.price}</h2>
          <p className="mrp-msg text-muted">MRP (inclusive of all taxes)</p>
          <button className="btn btn-outline-dark">-</button>
          <input className="input-width" value={1} disabled />
          <button className="btn btn-outline-dark">+</button>
          <button className="btn btn-danger mr-3 ml-3">Add to Cart</button>
          <button className="btn btn-danger">Buy Now</button>
          <h3 className="desc pt-3">KNOW YOUR MAKEUP</h3>
          <p className="desc-data">{selectedProduct.description}</p>
          <ul className="product-data">
            <li>
              <span className="text-muted lable-text">Color</span>
              <br />
              <span className="data">{selectedProduct.color}</span>
              <hr />
            </li>
            <li>
              <span className="text-muted lable-text">Fabric Content</span>
              <br />
              <span className="data">{selectedProduct.fabric_family}</span>
              <hr />
            </li>
            </ul>
            <ul className="product-data">
            <li>
              <span className="text-muted lable-text">Fabric Detail</span>
              <br />
              <span className="data">{selectedProduct.fabric_family}</span>
              <hr />
            </li>
            <li>
              <span className="text-muted lable-text">Neck Type</span>
              <br />
              <span className="data">{selectedProduct.neck}</span>
              <hr />
            </li>
            </ul>
            <ul className="product-data">
            <li>
              <span className="text-muted lable-text">Sleeve</span>
              <br />
              <span className="data">{selectedProduct.sleeve}</span>
              <hr />
            </li>
            <li>
              <span className="text-muted lable-text">Sleeve Styling</span>
              <br />
              <span className="data">{selectedProduct.sleeve}</span>
              <hr />
            </li>
          </ul>
        </div>
      </div>
      <About />
      <Footer />
      <ScrollTop />
      <CopyRight />
    </div>
  );
};
export default SingleCard;
