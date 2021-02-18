import React from "react";
import classes from "./NavigationItems.css";
import NavItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => (
  <ul className={classes.NavItems}>
    <NavItem link="/" active={false}>
      Burger
    </NavItem>

    {console.log(classes)}
    <NavItem link="/" active>
      Checkout{" "}
    </NavItem>
  </ul>
);

export default navigationItems;
