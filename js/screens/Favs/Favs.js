import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class Favs extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Text>I am the favs</Text>
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
