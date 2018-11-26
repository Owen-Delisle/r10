import React from "react";

import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import AboutScreen from "../screens/About";
import ScheduleScreen from "../screens/Schedule";
import FavsScreen from "../screens/Favs";
import MapScreen from "../screens/Map";
import SessionScreen from "../screens/Session";

import { sharedNavigationOptions } from "./config";

import Ionicons from "react-native-vector-icons/Ionicons";

const AboutStack = createStackNavigator(
  {
    About: AboutScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
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
      ...sharedNavigationOptions(navigation)
    })
  }
);

const FavsStack = createStackNavigator(
  {
    Favs: FavsScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

const MapStack = createStackNavigator(
  {
    Map: MapScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

export default createBottomTabNavigator(
  {
    About: AboutStack,
    Schedule: ScheduleStack,
    Favs: FavsStack,
    Map: MapStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "About") {
          iconName = `ios-information-circle`;
        } else if (routeName === "Schedule") {
          iconName = `ios-calendar`;
        } else if (routeName === "Map") {
          iconName = `ios-map`;
        } else if (routeName === "Favs") {
          iconName = "ios-heart";
        }

        return (
          <Ionicons
            name={iconName}
            size={horizontal ? 20 : 25}
            color={tintColor}
          />
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: "white",
      inactiveTintColor: "grey",
      style: {
        backgroundColor: "black"
      },
      labelStyle: {
        fontSize: 10,
        fontFamily: "Montserrat"
      }
    }
  }
);
