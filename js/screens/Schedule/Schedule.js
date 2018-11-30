import React, { Component } from "react";
import { Text, View, TouchableOpacity, SectionList } from "react-native";
import moment from "moment";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./styles";
import PropTypes from "prop-types";

export default class Schedule extends Component {
  onPress = item => {
    this.props.navigation.navigate("Session", {
      session: item
    });
  };

  _renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => this.onPress(item)}>
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.location}>{item.location}</Text>
          {this.props.faveIds.includes(item.id) && (
            <View style={styles.heartContainer}>
              <Ionicons name={"ios-heart"} size={20} color={"red"} />
            </View>
          )}
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
          <Text style={styles.time}>
            {moment(section.title).format("h:mm a")}
          </Text>
        )}
        sections={this.props.data}
        keyExtractor={(item, index) => item + index}
      />
    );
  }
}

Schedule.propTypes = {
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
