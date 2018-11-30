import React, { Component } from "react";
import { Text, TouchableOpacity, View, Animated, Easing } from "react-native";
import styles from "./styles";

export default class Favs extends Component {
  constructor() {
    super();
    this.state = {
      activeConduct: "",
      height: new Animated.Value(0),
      isOpen: false
    };
  }

  startAnimation(height) {
    console.log(height, this.state.isOpen);
    Animated.sequence([
      Animated.parallel([
        Animated.timing(this.state.height, {
          toValue: height,
          duration: 100,
          easing: Easing.elastic(0.4)
        })
      ])
    ]).start(() => {
      this.setState({
        height: new Animated.Value(0),
        isOpen: !this.state.isOpen
      });
    });
  }

  render() {
    return this.props.data.map(i => {
      return (
        <View>
          <TouchableOpacity
            onPress={() => {
              if (i === this.state.activeConduct && this.state.isOpen) {
                this.startAnimation(0);
              } else {
                this.startAnimation(100);
              }
              this.setState({ activeConduct: i });
            }}
          >
            <Text style={styles.accordionTitle}>{i.title}</Text>
          </TouchableOpacity>
          {this.state.activeConduct === i && (
            <Animated.View style={{ height: this.state.height }}>
              <Text>{i.description}</Text>
            </Animated.View>
          )}
        </View>
      );
    });
  }
}
