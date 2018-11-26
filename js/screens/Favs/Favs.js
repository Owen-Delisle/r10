import React, { Component } from "react";
import { Text, View, SectionList } from "react-native";
import moment from "moment";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "../../config/faves-schedule-styles";
import PropTypes from "prop-types";

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
    return (
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.location}>{item.location}</Text>
        <View style={styles.heartContainer}>
          <Ionicons name={"ios-heart"} size={20} color={"red"} />
        </View>
        <View style={styles.separator} />
      </View>
    );
  };

  render() {
    return (
      <SectionList
        renderItem={this._renderItem}
        renderSectionHeader={({ section }) => (
          <Text style={styles.time}>
            {moment(section.title).format("h:mm a")}
          </Text>
        )}
        sections={this.state.data}
        keyExtractor={(item, index) => item + index}
      />
    );
  }
}

Favs.propTypes = {
  id: PropTypes.string,
  description: PropTypes.string,
  location: PropTypes.string,
  startTime: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
  bio: PropTypes.string
};
