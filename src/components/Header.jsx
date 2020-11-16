import React from "react";
import Menu from "./Menu";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
import About from "../pages/About";

function Header() {
  return (
    <div>
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default Header;
