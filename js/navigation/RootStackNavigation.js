import { createStackNavigator, createAppContainer } from "react-navigation";
import Stack from "./NavigationLayout";

const AppNavigator = createStackNavigator(
  {
    Stack: {
      screen: Stack
    }
  },
  { headerMode: "none" }
);

export default createAppContainer(AppNavigator);
