import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity
} from "react-native";
import Accordion from "react-native-collapsible/Accordion";
import styles from "../../config/styles";

const SECTIONS = [
  {
    title: "First",
    content: "Lorem ipsum..."
  },
  {
    title: "Second",
    content: "Lorem ipsum..."
  }
];

export default class About extends Component {
  state = {
    activeSections: []
  };

  _renderHeader = section => {
    return (
      <View>
        <Text style={styles.accordianTitle}>+{section.title}</Text>
      </View>
    );
  };

  _renderContent = section => {
    return (
      <View style={styles.descriptionText}>
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
        <Image
          style={styles.aboutImage}
          source={require("../../assets/images/r10_logo.png")}
        />
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
      </ScrollView>
    );
  }
}

// <View style={styles.view}>
//   <Image
//     style={styles.img}
//     source={require("../../assets/images/r10_logo.png")}
//   />
//   {/* <View style={styles.separator} /> */}
//   <View>
//     {/* <FlatList
//       data={this.props.data.allConducts}
//       renderItem={({ item, index }) => (
//         <View>
//           <TouchableOpacity
//             onPress={this.setState({ visibleIndex: index })}
//           >
//             <Text style={styles.title}>
//               {item.title}
//               {console.log(item.index)}
//             </Text>
//           </TouchableOpacity>
//           <Text>{item.description}</Text>
//         </View>
//       )}
//     /> */}

//   </View>
// </View>
