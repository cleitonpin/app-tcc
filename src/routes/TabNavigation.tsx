import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Entypo";
import EvilIcon from "react-native-vector-icons/Ionicons";

// screens
import RecycleBins from "../screens/RecycleBins";
import Home from "../screens/Home";
import Map from "../screens/Map";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
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
        name="Map"
        component={Map}
        options={{
          tabBarIcon: () => <Icon name="map" size={25} />,
          headerShown: false,
          tabBarShowLabel: false,
        }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.setParams({
              name: undefined,
              lat: undefined,
              long: undefined,
            });
            navigation.navigate("Map");
          },
        })}
      />
    </Tab.Navigator>
  );
}
