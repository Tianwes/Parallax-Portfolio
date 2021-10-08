import React from "react";
// import { Link } from "react-router-dom";
// import "./style.css";
import { Navbar, Nav, Container } from "react-bootstrap";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navigation() {
  return (
    <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="m-auto">
      <Nav.Link href="#home">My Portfolio</Nav.Link>
      <Nav.Link href="#features">About</Nav.Link>
      <Nav.Link href="#ResumeSkills">Resume/Skills</Nav.Link>
      <Nav.Link href="#pricing">Contact</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>
    // <nav className="navbar navbar-expand-md navbar-light bg-light">
    //   <Link className="navbar-brand mx-5 px-5" to="/">
    //     Tiffany Weaver
    //   </Link>
    //   <div className="justify-content-end">
    //     <ul className="navbar-nav" >
    //       <li className="nav-item">
    //         <Link
    //           to="/"
    //           className={
    //             window.location.pathname === "/" || window.location.pathname === "/about"
    //               ? "nav-link active"
    //               : "nav-link"
    //           }
    //         >
    //           About Me
    //         </Link>
    //       </li>
    //       <li className="nav-item ">
    //         <Link
    //           to="/portfolio"
    //           className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
    //         >
    //           My Portfolio
    //         </Link>
    //       </li>
    //       <li className="nav-item ">
    //         <Link
    //           to="/contact"
    //           className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
    //         >
    //           Contact Me
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>

  );
}

export default Navigation;
