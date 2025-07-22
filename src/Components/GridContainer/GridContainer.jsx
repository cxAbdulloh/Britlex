import React from "react";
import "./GridContainer.css";
import { assets } from "../../assets/assets";

const GridContainer = () => {
  return (
    <>
      <h1 className="grid-text">Skills</h1>
      <section id="skills" className="section-container">
        <div className="grid">
          <img src={assets.photo_1} alt="" />
          <h3>Speaking</h3>
          <p>
            Improve your English skills and confidence. Live classes and
            interactive lessons online. 20% extra free for a limited time only
            
          </p>
          <button>Learn more</button>
        </div>

        <div className="grid">
          <img src={assets.photo_2} alt="" />
          <h3>Writing</h3>
          <p>
            One of the most important and extensive areas of natural science,
            the science that studies substances, also their composition
          </p>
          <button>Learn more</button>
        </div>

        <div className="grid">
          <img src={assets.photo_3} alt="" />
          <h3>Reading</h3>
          <p>
            perception and response actions of the user resulting from the use
            and/or upcoming use of the product, system or service
          </p>
          <button>Learn more</button>
        </div>

        <div className="grid">
          <img src={assets.photo_4} alt="" />
          <h3>Listening</h3>
          <p>
            Here you can find activities to practise your listening skills.
            Listening will help you to improve your understanding
          </p>
          <button>Learn more</button>
        </div>
      </section>
    </>
  );
};
export default GridContainer;
