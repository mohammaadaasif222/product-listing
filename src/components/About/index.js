import React from "react";
import "../About/About.css";
import { BsArrowClockwise,BsWallet,BsTruck } from "react-icons/bs";
const About = () => {
  return (
    <>
    <hr/>
      <div className="container-fluid">
        <div className="about-content">
          <b> Accentuate Your Look With Women Kurta</b>
          <p>
            Kurtas are a must-have for every woman. They can be styled in many
            ways with bottom-wear gilets or drapes. Be it a casual-day-look
            kurta or the one for the light occasion, W has it all. Get your
            favourite kurtas and style them the way you want.
          </p>
          <p>
           
            When it comes to fusion fashion for Indian women, W is the first
            name that comes to mind. Choose from the wide range of women kurta,
            from A-line to straight hems, solid to printed patterns. You will
            also find variety in embellishments, necklines, sleeve design and
            more. Style the kurta with W bottom-wear, add accessories and foot
            apparel to create a unique look.
            <p />
            <p>
           
              To meet the fashion needs of modern Indian women, we keep updating
              our range with the latest trends. From an office day to a light
              festive look, you will find multiple options to add to your
              collection. Our kurtas are crafted in a variety of breathable,
              organic fabrics such as cotton, rayon, viscose, crepe, linen, and
              tencel. These fabrics are soft to touch and very comfortable to
              wear.
            </p>
            <p>
              Go ahead, explore the collection, and add some interesting styles
              to your wardrobe.
            </p>
          </p>
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
