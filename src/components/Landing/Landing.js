import React from "react";
// import { Link } from "react-router-dom";
import "./styles.css";
// import { Navbar, Nav, Container } from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import portfolioPic from "../../assets/CoffeePortfolioPic.png";
import tanLineLol from "../../assets/tan-line-lol.png"
// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Landing() {
  return (
    <div className="landing-page">
    <Image className="tanLineLol1" src={ tanLineLol } fluid />  
    <Image className="tanLineLol2" src={ tanLineLol } fluid />
      <div className="main">
    <h2 className="nameh2">Tiffany Weaver</h2>
    <h1 className="nameh1">Web Developer</h1>
    <Image className="bio-pic" src={ portfolioPic } fluid />
      </div>
    
    </div>
  )}

  export default Landing;
