import { StyleSheet } from "react-native";

export default StyleSheet.create({
  view: {
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    paddingTop: 10,
    fontWeight: "bold"
  },
  time: {
    backgroundColor: "lightgrey",
    fontWeight: "bold"
  },
  location: {
    paddingTop: 10,
    color: "grey"
  },
  separator: {
    paddingTop: 30,
    borderBottomColor: "lightgrey",
    borderBottomWidth: 0.8
  },
  heartContainer: {
    alignSelf: "flex-end",
    paddingRight: 20
  }
});
