import { Text, View } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Entypo"
import EvilIcon from "react-native-vector-icons/Ionicons"

// screens
import RecycleBins from "../screens/RecycleBins";
import Home from "../screens/Home";

const Tab = createBottomTabNavigator();

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function SettingsScreen2() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings22222222!</Text>
    </View>
  );
}

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false,  }}
    >
      <Tab.Screen
        name="RecycleBins"
        component={RecycleBins}
        options={{
          tabBarIcon: () => <EvilIcon name="location-sharp" size={25} />,
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => <Icon name="home" size={25} />,
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Setting2s"
        component={SettingsScreen2}
        options={{
          tabBarIcon: () => <Icon name="map" size={25} />,
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
}