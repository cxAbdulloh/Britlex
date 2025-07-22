import React from 'react'
import "./AboutContainer.css"
import { assets } from '../../assets/assets'

const AboutContainer = () => {
  return (
    <>
    <section id='about' className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            The model offers a framework for discussing problems related to the user’s experience, 
            as well as possible ways and means of solving them. Application development begins at the top level 
            (strategy), where the future software product is described quite abstractly from the point of view 
            of the expectations of both users and the customer.
          </p>

          <div className="stats">
            <div className="stat-box">
              <h3>800</h3>
              <p>Pupils</p>
            </div>
            <div className="stat-box">
              <h3>18</h3>
              <p>Teachers</p>
            </div>
            <div className="stat-box">
              <h3>6</h3>
              <p>F. languages</p>
            </div>
          </div>
        </div>

        <div className="about-image">
          <img src={assets.about_img} alt="" />
        </div>
      </div>
    </section>
    </>
  )
}

export default AboutContainer
