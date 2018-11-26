import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Linking
} from "react-native";
import styles from "../../config/styles";
import FavesContext from "../../context/FavesContext/FavesProvider";
import Ionicons from "react-native-vector-icons/Ionicons";
import LinearGradient from "react-native-linear-gradient";

export default class Session extends Component {
  constructor() {
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
      <FavesContext.Consumer>
        {({ addFave, removeFave, queryAllFaves, faveIds }) => (
          <View style={styles.mainContainer}>
            {faveIds.includes(this.props.session.id) && (
              <View style={styles.heartContainer}>
                <Ionicons name={"ios-heart"} size={20} color={"red"} />
              </View>
            )}
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

            <View style={styles.addFaveButtonContainer}>
              {!faveIds.includes(this.props.session.id) && (
                <TouchableOpacity
                  onPress={() => {
                    addFave(this.props.session.id, new Date());
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
                    <Text style={styles.buttonText}>Add fave</Text>
                  </LinearGradient>
                </TouchableOpacity>
              )}
              {faveIds.includes(this.props.session.id) && (
                <TouchableOpacity
                  onPress={() => {
                    console.log(this.props.session.id);
                    removeFave(this.props.session.id);
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
