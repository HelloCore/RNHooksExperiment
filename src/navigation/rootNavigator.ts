import { createStackNavigator } from "react-navigation";
import HomeContainer from "src/features/home/HomeContainer";

export const RootNavigator = createStackNavigator(
  {
    home: { screen: HomeContainer },
  },
  {
    initialRouteKey: "home",
    initialRouteName: "home",
    headerMode: "none",
  }
);

export default RootNavigator;
