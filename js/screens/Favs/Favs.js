import React from "react";
import { Text, View, SectionList } from "react-native";
import moment from "moment";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./styles";
import PropTypes from "prop-types";

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

const Favs = props => {
  return (
    <SectionList
      renderItem={this._renderItem}
      renderSectionHeader={({ section }) => (
        <Text style={styles.time}>
          {moment(section.title).format("h:mm a")}
        </Text>
      )}
      sections={props.data}
      keyExtractor={(item, index) => item + index}
    />
  );
};

export default Favs;

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
