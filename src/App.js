import './App.css';
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Landing from './components/Landing/Landing';
// import tanLineLol from "./assets/tan-line-lol.png"
import ParallaxJSXWrapper from './components/Parallax/ParallaxJSXWrapper';
import Navigation from "./components/Navbar/Navbar";
import Image from 'react-bootstrap/Image'
import portfolioPic from "./assets/CoffeePortfolioPic.png";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const Section1 = ParallaxJSXWrapper(
    <div className="section1">
    <h2 className="nameh2">Tiffany Weaver</h2>
    <h1 className="nameh1">Web Developer</h1>
    <Image className="bio-pic" src={ portfolioPic } fluid />
    </div> , 0.04);

  const Section2 = ParallaxJSXWrapper(
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
  <path d="M0,100 C65,93 76,10 100,100" />
  </svg>
</div> , 0.05);
const Section3 = ParallaxJSXWrapper(
  <div className="section3">
        <p>loremipsum ipsum loremipsum loremipsum</p>
      </div>
 , 0.02);
 const Section4 = ParallaxJSXWrapper(
<div className="section4">
        <h1>Contacts</h1>
        <p>phone</p>
        <p>email</p>
        <p>twitter</p>
        <p>linkedIn</p>
      </div>);

  return (
    <div className="App">
      <Navigation />
      {/* <Landing /> */}
<Section1 />
      {/* <div className="section1">
    <h2 className="nameh2">Tiffany Weaver</h2>
    <h1 className="nameh1">Web Developer</h1>
    <Image className="bio-pic" src={ portfolioPic } fluid />
    </div> */}
<Section2 />
      {/* <div className="section2" >
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
  <path d="M0,100 C65,93 76,10 100,100" />
  </svg>
</div> */}
      {/* <div className="section3">
        <p>loremipsum ipsum loremipsum loremipsum</p>
      </div> */}
   <Section3 />   
      {/* <div className="section4">
        <h1>Contacts</h1>
        <p>phone</p>
        <p>email</p>
        <p>twitter</p>
        <p>linkedIn</p>
      </div> */}
<Section4 />
    </div>
  );
}

export default App;
