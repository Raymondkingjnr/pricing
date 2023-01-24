import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./footer.css";
function Footer() {
  return (
    <div className="app__footer section__width flex__center">
      <p className="p__opensans app__footer-notes">
        All prices are in Usd and charged per product with applicable taxes
        added at checkout
      </p>
      <button className="app__footer-btn">
        <p> view our plan features</p>
        <IoIosArrowDown />
      </button>
    </div>
  );
}

export default Footer;
