import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import "./nav.css";

const Nav = () => {
  const [toggle, setToggle] = React.useState(false);
  return (
    <nav className="nav__bar section__width">
      <h1 className="nav__bar-logo">brand logo</h1>
      <ul className="nav__bar-link">
        <p className="p__opensans">product</p>
        <p className="p__opensans">Resourses</p>
        <p className="p__opensans">Enterprise</p>
        <p className="p__opensans">Pricing</p>
      </ul>
      <button className="nav__bar-btn">Contact Sales</button>
      <div className="nav__bar-smallscreen">
        <GiHamburgerMenu
          color="#000"
          fontSize={27}
          onClick={() => setToggle(true)}
        />

        {toggle && (
          <div className="nav__bar-smallscreen-overlay flex__center slide-bottom">
            <MdClose
              color="#fff"
              fontSize={30}
              className="overlay__close"
              onClick={() => setToggle(false)}
            />

            <ul className="nav__bar-link__smallscreen">
              <p className="p__opensans">product</p>
              <p className="p__opensans">Resourses</p>
              <p className="p__opensans">Enterprise</p>
              <p className="p__opensans">Pricing</p>
            </ul>
            <button className="nav__bar-smallscreen__btn">Contact Sales</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
