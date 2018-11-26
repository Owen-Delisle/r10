import React, { Component } from "react";
import { Text, View, Image, ScrollView } from "react-native";
import Accordion from "react-native-collapsible/Accordion";
import styles from "../../config/styles";
import PropTypes from "prop-types";

export default class About extends Component {
  state = {
    activeSections: []
  };

  _renderHeader = section => {
    return (
      <View>
        <Text style={styles.accordianTitle}>+ {section.title}</Text>
      </View>
    );
  };

  _renderContent = section => {
    return (
      <View>
        <Text>{section.description}</Text>
      </View>
    );
  };

  _updateSections = activeSections => {
    this.setState({ activeSections });
  };

  render() {
    return (
      <ScrollView style={styles.view}>
        <View style={styles.imageContainer}>
          <Image source={require("../../assets/images/r10_logo.png")} />
        </View>
        <View style={styles.separator} />
        <Text style={styles.descriptionText}>
          R10 is a conference that focuses on just about any topic related to
          dev.
        </Text>
        <Text style={styles.primaryTitle}>Date & Venue</Text>
        <Text style={styles.descriptionText}>
          The R10 conference will take place on tuesday, June 27, 2017 in
          Vancouver, BC
        </Text>
        <Text style={styles.primaryTitle}>Code of Conduct</Text>
        <Accordion
          sections={this.props.data.allConducts}
          activeSections={this.state.activeSections}
          renderSectionTitle={this._renderSectionTitle}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
          onChange={this._updateSections}
        />
        <View style={styles.separator} />
        <Text style={styles.descriptionText}>{"\u00A9"} RED Academy 2017</Text>
      </ScrollView>
    );
  }
}

About.propTypes = {
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
