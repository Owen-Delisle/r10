import React, { Component } from "react";
import Session from "./Session";

class SessionContainer extends Component {
  static navigationOptions = {
    title: "Session"
  };

  render() {
    const session = this.props.navigation.getParam("session");
    return <Session session={session} />;
  }
}

export default SessionContainer;
