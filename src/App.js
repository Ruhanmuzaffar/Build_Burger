import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Toolbar from "../../Burger Project/src/components/Navigation/Toolbar/Toolbar";
import BackgroundImage from "./components/UI/BackgroundImage/BackgroundImage";

class App extends Component {
  render() {
    return (
      <Layout>
        <BackgroundImage />

        <BurgerBuilder />
      </Layout>
    );
  }
}

export default App;
