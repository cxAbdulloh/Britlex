import React from "react";
import "./Header.css";
import { assets } from "../../assets/assets";

const Header = () => {
  return (
    <>
      <header id="header">
        <div className="header-text">
          <h1>
            Learn <br />
            Any Foreign <br />
            Language
          </h1>
          <p>
            With our teachers who write a program for each student, you will be
            able to make your first sketch after the first lesson.
          </p>
          <button className="header-btn">Get started</button>
        </div>

        <div className="header-image">
          <img src={assets.header_img} alt="" />
        </div>
      </header>
    </>
  );
};

export default Header;
