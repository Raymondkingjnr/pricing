import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import "./header.css";

function Header() {
  return (
    <div className="app__header section__width">
      <p>pricing</p>
      <h2>Find your perfect plan</h2>
      <div className="app__header-note">
        <p>
          As a matter of fact concentration of any operations can turn out to be
          a result of the Deception of scientific interferance
        </p>
      </div>
      <button type="button" className="app__header-button">
        Freelance and Agency Plans
        <AiOutlineArrowDown
          color="blue"
          padding="20px"
          className="app__header-icon"
        />{" "}
      </button>
    </div>
  );
}

export default Header;
