import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class Map extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Text>I am the Map</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    justifyContent: "center",
    alignItems: "center"
  }
});
