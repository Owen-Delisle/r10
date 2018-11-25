import React from "react";
import LinearGradient from "react-native-linear-gradient";
import { View, Button, StyleSheet, Text } from "react-native";

export const GradientButton = props => (
  <View>
    <LinearGradient
      colors={["#cf392a", "#9963ea"]}
      start={{ x: 0.0, y: 1.0 }}
      end={{ x: 1.0, y: 0.0 }}
      style={[StyleSheet.absoluteFill, { height: 64, width: "100%" }]}
    />
  </View>
);
