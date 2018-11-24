import React, { Component } from "react";
import { StyleSheet, Text, View, SectionList } from "react-native";
import moment from "moment";
import Ionicons from "react-native-vector-icons/Ionicons";

export default class Favs extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    const data = this.props.data.allSessions
      .reduce((acc, curr) => {
        const timeExists = acc.find(x => x.title === curr.startTime);
        timeExists
          ? timeExists.data.push(curr)
          : acc.push({ title: curr.startTime, data: [curr] });
        return acc;
      }, [])
      .sort((a, b) => a.title - b.title);
    this.setState({ data: data });
  }

  _renderItem = ({ item }) => {
    // console.log(item);
    return (
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.location}>{item.location}</Text>
        <Ionicons name={"ios-heart"} size={10} color={"red"} />
        <View style={styles.separator} />
      </View>
    );
  };

  render() {
    return (
      <SectionList
        renderItem={this._renderItem}
        renderSectionHeader={({ section }) => (
          <Text style={{ fontWeight: "bold", backgroundColor: "lightgrey" }}>
            {moment(section.title).format("h:mm a")}
          </Text>
        )}
        sections={this.state.data}
        keyExtractor={(item, index) => item + index}
      />
    );
  }
}

const styles = StyleSheet.create({
  view: {
    justifyContent: "center",
    alignItems: "center"
  }
});
