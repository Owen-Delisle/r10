import React from "react";

// import Platform from "react-native";

import { createStackNavigator, createDrawerNavigator } from "react-navigation";

import AboutScreen from "../screens/About";
import ScheduleScreen from "../screens/Schedule";
import FavsScreen from "../screens/Favs";
import MapScreen from "../screens/Map";
import SessionScreen from "../screens/Session";

import { sharedNavigationOptions } from "./config";

import Ionicons from "react-native-vector-icons/Ionicons";
import { Platform, TouchableOpacity } from "react-native";

const AboutStack = createStackNavigator(
  {
    About: AboutScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation),
      drawerLabel: "About",
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.toggleDrawer("About")}>
          <Ionicons
            name={"md-menu"}
            size={25}
            color={"white"}
            style={{ marginLeft: 20 }}
          />
        </TouchableOpacity>
      )
    })
  }
);

const ScheduleStack = createStackNavigator(
  {
    Schedule: ScheduleScreen,
    Session: SessionScreen
  },

  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation),
      drawerLabel: "Schedule",
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.toggleDrawer("Schedule")}>
          <Ionicons
            name={"md-menu"}
            size={25}
            color={"white"}
            style={{ marginLeft: 20 }}
          />
        </TouchableOpacity>
      )
    })
  }
);

// const SessionStack = createStackNavigator({
//   Session: SessionScreen
// });

const FavsStack = createStackNavigator(
  {
    Favs: FavsScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation),
      drawerLabel: "Fave",
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.toggleDrawer("Fave")}>
          <Ionicons
            name={"md-menu"}
            size={25}
            color={"white"}
            style={{ marginLeft: 20 }}
          />
        </TouchableOpacity>
      )
    })
  }
);

const MapStack = createStackNavigator(
  {
    Map: MapScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation),
      drawerLabel: "Map",
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.toggleDrawer("Map")}>
          <Ionicons
            name={"md-menu"}
            size={25}
            color={"white"}
            style={{ marginLeft: 20 }}
          />
        </TouchableOpacity>
      )
    })
  }
);

// Dedicated stacks for Schedule and Faves will go here too!
export default createDrawerNavigator({
  About: AboutStack,
  Schedule: ScheduleStack,
  Favs: FavsStack,
  Map: MapStack
});
