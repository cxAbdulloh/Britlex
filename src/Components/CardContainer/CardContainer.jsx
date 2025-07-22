import React from 'react'
import "./CardContainer.css"
import { assets } from '../../assets/assets'

const CardContainer = () => {
  return (
    <>
    <h1 className='card-text'>Pricing</h1>
    <section id='pricing' className='card-section'>
    <div className="card-container">
        
        <div className="course-card">
          <img src={assets.photo_5} alt="" />
          <h3>Self-study online course</h3>
          <p>
            Start learning English online in live classes with qualified EC 
          </p>
          <div className="price">£5.99 <span>per month</span></div>
        </div>

        <div className="course-card">
          <img src={assets.photo_6} alt="" className='card-image'/>
          <h3>Live online classes</h3>
          <p>
            Interactive group classes with expert teachers. Free 7-day trial
          </p>
          <div className="price">£12.99 <span>per month</span></div>
        </div>

        <div className="course-card">
          <img src={assets.photo_7} alt="" />
          <h3>Personal Tuition</h3>
          <p>
            Online one-to-one English tutoring – enjoy our first session for only $1
          </p>
          <div className="price">£20.99 <span>per month</span></div>
        </div>
      </div>
    </section>
    </>
  )
}

export default CardContainer
