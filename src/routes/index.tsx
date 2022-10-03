import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Text, View } from 'react-native';
import TabNavigation from './TabNavigation';

// screens
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

interface MainNavigationProps {
}

export type StackParams = {
  tabNavigation: undefined;
}

const Stack = createStackNavigator<StackParams>();

const MainNavigation: React.FC<MainNavigationProps> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
        animationEnabled: true,
      }} >
        <Stack.Screen name="tabNavigation" component={TabNavigation} options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} />
        {/* <Stack.Screen name="loginSave" component={HomeScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default MainNavigation;