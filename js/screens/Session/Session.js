import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Linking
} from "react-native";
import styles from "./styles";
import FavesContext from "../../context/FavesContext/FavesProvider";
import Ionicons from "react-native-vector-icons/Ionicons";
import LinearGradient from "react-native-linear-gradient";
import moment from "moment";
import PropTypes from "prop-types";

export default class Session extends Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false,
      isFavorite: false
    };
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  setIsFavorite() {
    this.setState({ isFavorite: !this.state.isFavorite });
  }

  render() {
    return (
      <FavesContext.Consumer>
        {({ addFave, removeFave, faveIds, queryAllFaves }) => (
          <View style={styles.mainContainer}>
            {faveIds.includes(this.props.session.id) && (
              <View style={styles.heartContainer}>
                <Ionicons name={"ios-heart"} size={20} color={"red"} />
              </View>
            )}
            <Text style={styles.smallGrey}>{this.props.session.location}</Text>
            <Text style={styles.primaryTitle}>{this.props.session.title}</Text>
            <Text style={styles.time}>
              {moment(this.props.session.startTime).format("h:mm a")}
            </Text>
            <Text style={styles.body}>{this.props.session.description}</Text>
            <Text style={styles.smallGrey}>Presented by:</Text>
            <View style={styles.rowContainer}>
              <TouchableOpacity
                onPress={() => this.setModalVisible(!this.state.modalVisible)}
              >
                <Image
                  style={styles.image}
                  source={{ uri: this.props.session.speaker.image }}
                />
                <Text style={styles.primaryTitle}>
                  {this.props.session.speaker.name}
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.addFaveButtonContainer}>
              {!faveIds.includes(this.props.session.id) && (
                <TouchableOpacity
                  onPress={() => {
                    addFave(this.props.session.id, new Date());
                    queryAllFaves();
                  }}
                >
                  <LinearGradient
                    colors={["#B01EFF", "#3672F8"]}
                    start={{ x: 0.0, y: 1.0 }}
                    end={{ x: 1.0, y: 0.0 }}
                    style={[
                      StyleSheet.absoluteFill,
                      {
                        height: 50,
                        width: 200,
                        borderRadius: 30,
                        justifyContent: "center",
                        alignItems: "center",
                        alignSelf: "center"
                      }
                    ]}
                  >
                    <Text style={styles.buttonText}>Add to faves</Text>
                  </LinearGradient>
                </TouchableOpacity>
              )}
              {faveIds.includes(this.props.session.id) && (
                <TouchableOpacity
                  onPress={() => {
                    removeFave(this.props.session.id);
                    queryAllFaves();
                  }}
                >
                  <LinearGradient
                    colors={["#B01EFF", "#3672F8"]}
                    start={{ x: 0.0, y: 1.0 }}
                    end={{ x: 1.0, y: 0.0 }}
                    style={[
                      StyleSheet.absoluteFill,
                      {
                        height: 50,
                        width: 200,
                        borderRadius: 30,
                        justifyContent: "center",
                        alignItems: "center"
                      }
                    ]}
                  >
                    <Text style={styles.buttonText}>Remove fave</Text>
                  </LinearGradient>
                </TouchableOpacity>
              )}
            </View>

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
                  <TouchableOpacity
                    onPress={() =>
                      this.setModalVisible(!this.state.modalVisible)
                    }
                  >
                    <Ionicons name={"ios-close"} size={40} color={"white"} />
                  </TouchableOpacity>
                  <Text style={styles.modalTitle}>About the Speaker</Text>
                </View>
                <View style={styles.speakerContainer}>
                  <Image
                    style={styles.image}
                    source={{ uri: this.props.session.speaker.image }}
                  />
                  <Text style={styles.primaryTitle}>
                    {this.props.session.speaker.name}
                  </Text>
                  <Text style={styles.descriptionText}>
                    {this.props.session.speaker.bio}
                  </Text>
                  <View style={styles.wikiButton}>
                    <TouchableOpacity
                      onPress={() => {
                        Linking.openURL(this.props.session.speaker.url);
                      }}
                    >
                      <LinearGradient
                        colors={["#B01EFF", "#3672F8"]}
                        start={{ x: 0.0, y: 1.0 }}
                        end={{ x: 1.0, y: 0.0 }}
                        style={[
                          StyleSheet.absoluteFill,
                          {
                            height: 50,
                            width: 300,
                            borderRadius: 30,
                            justifyContent: "center",
                            alignItems: "center"
                          }
                        ]}
                      >
                        <Text style={styles.buttonText}>
                          Read more on Wikipedia
                        </Text>
                      </LinearGradient>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
          </View>
        )}
      </FavesContext.Consumer>
    );
  }
}

Session.propTypes = {
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
