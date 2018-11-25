import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  Modal
} from "react-native";
import styles from "../../config/styles";
import FavesContext from "../../context/FavesContext/FavesProvider";
import Ionicons from "react-native-vector-icons/Ionicons";

export default class Session extends Component {
  constructor() {
    // this.date = new Date();
    super();
    this.state = {
      modalVisible: false
    };
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View>
        <Text style={styles.smallGrey}>{this.props.session.location}</Text>
        <Text style={styles.primaryTitle}>{this.props.session.title}</Text>
        <Text style={styles.time}>{this.props.session.startTime}</Text>
        <Text style={styles.body}>{this.props.session.description}</Text>
        <Text style={styles.smallGrey}>Presented by:</Text>
        <TouchableOpacity
          onPress={() => this.setModalVisible(!this.state.modalVisible)}
        >
          <Text style={styles.primaryTitle}>
            {this.props.session.speaker.name}
          </Text>
          <Image
            style={styles.image}
            source={{ uri: this.props.session.speaker.image }}
          />
        </TouchableOpacity>
        <FavesContext.Consumer>
          {({ addFave, removeFave, queryAllFaves, faveIds }) => (
            <Button
              onPress={() => {
                // addFave(this.props.session.id, new Date());
                addFave(this.props.session.id, new Date());
              }}
              title="Add to Faves"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
          )}
        </FavesContext.Consumer>

        <Modal
          animationType="fade"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalTitleContainer}>
              <Ionicons name={"ios-close"} size={40} color={"white"} />
              <Text style={styles.modalTitle}>About the Speaker</Text>
            </View>
            <View style={styles.speakerContainer}>
              <TouchableOpacity
                onPress={() => this.setModalVisible(!this.state.modalVisible)}
              >
                <Text style={styles.primaryTitle}>
                  {this.props.session.speaker.name}
                </Text>
                <Image
                  style={styles.image}
                  source={{ uri: this.props.session.speaker.image }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
