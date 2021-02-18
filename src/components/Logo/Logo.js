import React from "react";
import Logo from "../../Assests/Images/burger-logo.png";
import classes from "./Logo.css";


const logo = () => (
  <div className={classes.Logo}>
    <img src={Logo} />
  </div>
);

export default logo;
