import React from "react";
import classes from "./Toolbar.css";
import Logo from "../../../components/Logo/Logo";
import NavigarionItems from "../NavigationItems/NavigationItems";

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <Logo />

    <div className={classes.Item}>
      <strong>HOME</strong>
    </div>

    <div>
      <strong>ORDERS</strong>
    </div>

    <nav>
      <NavigarionItems />
      {console.log(classes)}
    </nav>
  </header>
);

export default toolbar;
