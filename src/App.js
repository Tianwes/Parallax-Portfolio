import './App.css';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/Navbar/Navbar";
// import Landing from './components/Landing/Landing';
import Image from 'react-bootstrap/Image'
import portfolioPic from "./assets/CoffeePortfolioPic.png";
import tanLineLol from "./assets/tan-line-lol.png"

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      {/* <Landing /> */}

      <div className="section1">
    <h2 className="nameh2">Tiffany Weaver</h2>
    <h1 className="nameh1">Web Developer</h1>
    <Image className="bio-pic" src={ portfolioPic } fluid />
    </div>

      <div className="section2" >
  <svg className="svg_curve_top" xmlns="http://www.w3.org/2000/svg" fill="rgb(68, 48, 15)" viewBox="0 0 100 100" preserveAspectRatio="none" >
    <path d="M0,100 C65,93 76,10 100,100" />
  </svg>
  <div className="section2_container">
    <div className="left_side">
      loremipsumdkf sdfijfks nascuhef sdvjsdiufhwn efkjdsncdosenf loremipsumdkf sdfijfks nascuhef sdvjsdiufhwn efkjdsncdosenf
    </div>
    <div className="right_side">
      <p>vnosidnvsdkvjewn</p>
    </div>
  </div>
  <svg className="svg_curve_bottom" xmlns="http://www.w3.org/2000/svg" fill="rgb(68, 48, 15)" viewBox="0 0 100 100" preserveAspectRatio="none" >
  <path d="M0,0 C65,20 90,5 100,0" />
  </svg>
</div>
      <div className="section3">
        <p>loremipsum ipsum loremipsum loremipsum</p>
      </div>
      <div className="section4">
        <h1>Contacts</h1>
        <p>phone</p>
        <p>email</p>
        <p>twitter</p>
        <p>linkedIn</p>
      </div>

    </div>
  );
}

export default App;
