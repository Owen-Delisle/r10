import React, { Component } from "react";
import Map from "./Map";

class MapContainer extends Component {
  static navigationOptions = {
    title: "Map",
    headerTintColor: "white"
  };

  static tabBarOptions = {
    style: {
      backgroundColor: "blue"
    }
  };

  render() {
    return <Map />;
  }
}

export default MapContainer;
