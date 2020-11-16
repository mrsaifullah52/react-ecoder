import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";

function Menu() {
  return (
    <nav className="p-0 bg-white">
      <Container>
        <Navbar expand="lg">
          <NavLink to="/" className="navbar-brand">
            <Image
              style={{ height: "80px", width: "100px" }}
              src={
                "https://ecodercommunications.com/wp-content/uploads/2020/03/Untitled-1-copy.jpg"
              }
              alt={"Logo"}
            />
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <NavLink
              exact
              to="/"
              className="nav-link"
              activeClassName="active-link"
            >
              Home
            </NavLink>
            <NavLink
              exact
              to="services"
              className="nav-link"
              activeClassName="active-link"
            >
              Services
            </NavLink>
            <NavLink
              exact
              to="contact"
              className="nav-link"
              activeClassName="active-link"
            >
              Contact
            </NavLink>
            <NavLink
              exact
              to="about"
              className="nav-link"
              activeClassName="active-link"
            >
              About
            </NavLink>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </nav>
  );
}

export default Menu;
