import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  view: {
    padding: 10
  },
  smallGrey: {
    color: "grey",
    fontSize: 15
  },
  primaryTitle: {
    fontWeight: "bold",
    fontSize: 20,
    padding: 10
  },
  secondaryTitle: {
    fontWeight: "bold",
    fontSize: 15
  },
  body: {
    fontSize: 15
  },
  time: {
    color: "red"
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  faveButton: {
    backgroundColor: "purple",
    color: "white"
  },
  buttonText: {
    color: "white",
    fontSize: 30
  },
  accordianTitle: {
    color: "purple",
    fontSize: 20,
    padding: 10
  },
  separator: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 10
  },
  descriptionText: {
    padding: 10,
    fontSize: 15
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  modalContainer: {
    backgroundColor: "black",
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    alignItems: "center",
    paddingTop: 30
  },
  modalTitleContainer: {
    width: Dimensions.get("window").width - 50,
    height: 100
  },
  modalTitle: {
    fontSize: 20,
    color: "white",
    marginBottom: 20,
    fontWeight: "bold",
    alignSelf: "center",
    flex: 10
  },

  modaClose: {
    flex: 1
  },
  speakerContainer: {
    backgroundColor: "white",
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width - 50,
    borderRadius: 10,
    // justifyContent: "center",
    alignItems: "center",
    padding: 10
  },
  addFaveButtonContainer: {
    height: 64,
    width: 400
  },
  mainContainer: {
    padding: 30
  }
});
