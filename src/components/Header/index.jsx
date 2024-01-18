import React from 'react';
import {Container,Navbar,Nav} from 'react-bootstrap';
import {BrowserRouter as Router, Link,NavLink} from "react-router-dom";
import "./style.css"



function Cnavbar() {
    return (
  
      <Router>
        <Navbar className=" navbar-expand-lg">
          <Navbar.Brand>
            <h1 className="navbar-brand">
                <Link to="/" className="brand-link">Glenda Cordova</Link>
            </h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto ">
              <NavLink to="/" className={({ isActive }) => isActive ?'nav-link active' : 'nav-link'}>Home</NavLink>
              <NavLink to="projects" className={({ isActive }) => isActive ?'nav-link active' : 'nav-link'}>Projects</NavLink>
            </Nav>
          </Navbar.Collapse>
          </Navbar>
        </Router>
    );
  }
  export default Cnavbar;