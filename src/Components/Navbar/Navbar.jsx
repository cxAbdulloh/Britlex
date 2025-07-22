import React from 'react'
import "./Navbar.css"

const Navbar = () => {

    function toggleMenu() {
        const menu = document.querySelector(".menu-links");
        const icon = document.querySelector(".hamburger-icon");
        menu.classList.toggle("open");
        icon.classList.toggle("open");
      }
      
  return (
    <>
    <nav id="desktop-nav">
        <div className="logo">Brit<span style={{color: "#8F95A5"}}>lex</span></div>
        <div>
            <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#contact">Contact</a></li>   
            </ul>
            <button className="nav-btn-first">Let's Talk</button>
        </div>
        <button className="nav-btn">Let's Talk</button>
    </nav>

    <nav id='hamburger-nav'>
        <div className="logo">Brit<span style={{color: "#8F95A5"}}>lex</span></div>
        <div className="hamburger-menu">
            <div className="nothing">
                <button className="nav-btn">Let's Talk</button>
                 <div className="hamburger-icon" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            
            </div>
           
            <div className="menu-links">
                <li><a href="#home" onClick={toggleMenu}>Home</a></li>
                <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
                <li><a href="#about" onClick={toggleMenu}>About</a></li>
                <li><a href="#pricing" onClick={toggleMenu}>Pricing</a></li>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar
