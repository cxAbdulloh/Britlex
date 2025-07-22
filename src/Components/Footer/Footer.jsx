import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <>
    <footer id='contact' className="footer">
    <h1 className='footer-text-top'>Contact Us</h1>
      <div className="footer-container">
      <div className="footer-image">
          <img src={assets.footer_img} alt="" />
        </div>

        <div className="footer-text">
          <h2 className='footer-text-bottom'>Contact Us</h2>
          <p>
            Discover your current English level by taking our free online English test.
            Sign up to our newsletter for learning tips and free resources
          </p>
          <form className="subscribe-form">
            <input type="email" placeholder="Enter your E-mail" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <hr className='footer-hr'/>
      <div className="footer-end">
        <div className="footer-logo">Brit<span>lex</span></div>
        <ul>
            <li className='footer-text-li'>Terms and Conditions • Privacy Policy • Cookie Policy</li>
        </ul>
      </div>
    </footer>
    </>
  )
}

export default Footer
