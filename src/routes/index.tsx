import { NavigationContainer } from "@react-navigation/native";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import * as React from "react";
import { Text, View } from "react-native";
import Welcome from "../screens/Welcome";
import TabNavigation from "./TabNavigation";

interface MainNavigationProps {}

export type StackParams = {
  tabNavigation: undefined;
  welcome: undefined;
};

const Stack = createStackNavigator<StackParams>();

const MainNavigation: React.FC<MainNavigationProps> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animationEnabled: true,
        }}
      >
        <Stack.Screen name="welcome" component={Welcome} />
        <Stack.Screen
          name="tabNavigation"
          component={TabNavigation}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        {/* <Stack.Screen name="loginSave" component={HomeScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
