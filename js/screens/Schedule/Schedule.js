import React, { Component } from "react";
// import FavesContext from "../../context/FavesContext/FavesProvider";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SectionList
} from "react-native";
import moment from "moment";

export default class Schedule extends Component {
  constructor() {
    super();
    this.data = [];
    this.testDate = "2018-12-08T17:00:00.000Z";
    this.state = {
      loading: false,
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

  onPress = item => {
    this.props.navigation.navigate("Session", { session: item });
  };

  _renderItem = ({ item }) => {
    // console.log(item);
    return (
      <TouchableOpacity onPress={() => this.onPress(item)}>
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.location}>{item.location}</Text>
          <View style={styles.separator} />
        </View>
      </TouchableOpacity>
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
  },
  title: {
    alignItems: "center",
    fontWeight: "bold"
  },
  time: {
    backgroundColor: "lightgrey"
  },
  location: {
    color: "grey"
  },
  separator: {
    paddingTop: 30,
    borderBottomColor: "lightgrey",
    borderBottomWidth: 0.8
  }
});
