import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ParallaxJSXWrapper from './components/Parallax/ParallaxJSXWrapper';
import Navigation from "./components/Navbar/Navbar";
// ***** Images *****
// import Image from 'react-bootstrap/Image'
import PortfolioPic from "./assets/CoffeePortfolioPic.png";
import PortfolioPic2 from "./assets/CoffeePortfolioPic2.png";
import TropicalLeaf from "./assets/tropicalLeafOutline.png";
import LongLeaf from "./assets/wavyLongLeafOutline.png";
import ShadowTropicalLeaf from "./assets/shadowTropicalLeaf.png";

const TropicalLeafOutline = ParallaxJSXWrapper(<img src={ TropicalLeaf } alt="" className="tropicalLeaf" />, 0.03);

const TropicalLeafShadow = ParallaxJSXWrapper(<img src={ ShadowTropicalLeaf } alt="b" className="shadowTropicalLeaf" />, 0.03);	

const LongLeafOutline = ParallaxJSXWrapper(<img src={ LongLeaf } alt="" className="longLeaf" />, 0.02);

const Headings = ParallaxJSXWrapper(
  <div className="section1">
    <h2 className="myName">Tiffany Weaver</h2>
    <h1 className="jobTitle">Web Developer</h1>
  </div>, 0.04);

const CoffeePortfolioPic = ParallaxJSXWrapper(
  <img src={ PortfolioPic } alt="" className="bio-pic" />, 0.06);

  const CoffeePortfolioPic2 = ParallaxJSXWrapper(
    <img src={ PortfolioPic2 } alt="" className="bio-pic2" />, 0.06);

    

function App() {
  
  const Section2 = ParallaxJSXWrapper(
    <div className="section2" >
      <svg className="svg_curve_top" xmlns="http://www.w3.org/2000/svg" fill="rgb(68, 48, 15)" viewBox="0 0 100 100" preserveAspectRatio="none" >
        <path d="M0,100 C65,93 76,10 100,100" />
      </svg>
      <div className="section2_container">
        <Row>
        <Col md={6} className="col1">
          <p className="aboutMep">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </Col>
          <Col md={6} className="col2">
            {/* !!!!! ADD ELEMENT ON SCROLL W JQUERY ????? */}
          <CoffeePortfolioPic2 />
          </Col>
        </ Row>
      </div>
      <svg className="svg_curve_bottom" xmlns="http://www.w3.org/2000/svg" fill="rgb(68, 48, 15)" viewBox="0 0 100 100" preserveAspectRatio="none" >
        <path d="M0,100 C65,93 76,10 100,100" />
      </svg>
    </div>, 0.06);

  const Section3 = ParallaxJSXWrapper(
    <div className="section3">
      <p>loremipsum ipsum loremipsum loremipsum</p>
    </div>
    , 0.05);

  const Section4 = ParallaxJSXWrapper(
    <div className="section4">
      <h1>Contacts</h1>
      <p>phone</p>
      <p>email</p>
      <p>twitter</p>
      <p>linkedIn</p>
      <p><a href='https://www.freepik.com/vectors/flower'>Flower vector created by macrovector - www.freepik.com</a></p>
      <p><a href='https://www.freepik.com/vectors/abstract'>Abstract vector created by freepik - www.freepik.com</a></p>
    </div>);

  return (
    <div className="App">
      <Navigation />
      
    <div className="section1">
      <TropicalLeafOutline />
      <TropicalLeafShadow />
      <LongLeafOutline />
      <Headings />
      <CoffeePortfolioPic />
    </div>

      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
}

export default App;
