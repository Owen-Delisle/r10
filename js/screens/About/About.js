import React, { Component } from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";

export default class About extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Image
          style={styles.img}
          source={require("../../assets/images/r10_logo.png")}
        />
        {/* <View style={styles.separator} /> */}
        <View>
          <FlatList
            data={this.props.data.allConducts}
            renderItem={({ item }) => (
              <View>
                <Text style={styles.title}>{item.title}</Text>
                <Text>{item.description}</Text>
              </View>
            )}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1
  },
  separator: {
    paddingTop: 30,
    borderBottomColor: "black",
    borderBottomWidth: 0.8
  },
  img: {
    alignSelf: "center",
    width: 200,
    height: 50
  },
  title: {
    fontWeight: "bold"
  }
});
