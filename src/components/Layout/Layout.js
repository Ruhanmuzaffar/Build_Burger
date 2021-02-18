import React from "react";
import Aux from "../../Hoc/Aux";
import classes from "./Layout.module.css";
import Backdrop from "../UI/Backdrop/Backdrop";
import backdrop from "../UI/Backdrop/Backdrop";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
const layout = (props) => {
  return (
    <Aux>
      <Toolbar />
      {/* <Backdrop /> */}
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
};

export default layout;
