import './App.css';

import ParallaxJSXWrapper from './components/Parallax/ParallaxJSXWrapper';
import Navigation from "./components/Navbar/Navbar";
// ***** Images *****
import Image from 'react-bootstrap/Image'
import portfolioPic from "./assets/CoffeePortfolioPic.png";
import TropicalLeaf from "./assets/tropicalLeafOutline.png";
import LongLeaf from "./assets/wavyLongLeafOutline.png";
import ShadowTropicalLeaf from "./assets/shadowTropicalLeaf.png";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const Section1 = ParallaxJSXWrapper(
    <div className="section1">
      
      <Image className="tropicalLeaf" src={ TropicalLeaf } fluid />
      <Image className="shadowTropicalLeaf" src={ ShadowTropicalLeaf } fluid /> 

      <Image className="longLeaf" src={ LongLeaf } fluid />
      <h2 className="myName">Tiffany Weaver</h2>
      <h1 className="jobTitle">Web Developer</h1>
      <Image className="bio-pic" src={portfolioPic} fluid />
    </div>, 0.08);

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
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
}

export default App;
