import React, { Component } from "react";
import Favs from "./Favs";

class FavsContainer extends Component {
  static navigationOptions = {
    title: "Favs"
  };
  render() {
    return <Favs />;
  }
}

export default FavsContainer;
