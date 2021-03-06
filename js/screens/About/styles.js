import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  view: {
    padding: 10
  },
  smallGrey: {
    color: "grey",
    fontSize: 15,
    paddingTop: 20
  },
  primaryTitle: {
    fontWeight: "bold",
    fontSize: 20,
    paddingTop: 20
  },
  secondaryTitle: {
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 20
  },
  body: {
    fontSize: 15,
    paddingTop: 20
  },
  time: {
    color: "red",
    paddingTop: 20
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  faveButton: {
    backgroundColor: "purple",
    color: "white",
    paddingTop: 20
  },
  buttonText: {
    color: "white",
    fontSize: 25
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
    fontSize: 15,
    paddingTop: 30
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

  modalClose: {
    flex: 1
  },
  speakerContainer: {
    backgroundColor: "white",
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width - 50,
    borderRadius: 10,
    alignItems: "center",
    padding: 10
  },
  addFaveButtonContainer: {
    height: 64,
    width: "55%",
    height: "30%",
    paddingTop: 20,
    justifyContent: "flex-end",
    alignSelf: "center",
    paddingBottom: 140
  },
  mainContainer: {
    alignItems: "flex-start",
    padding: 20
  },
  heartContainer: {
    alignSelf: "flex-end"
  },
  wikiButton: {
    alignSelf: "flex-start"
  }
});
