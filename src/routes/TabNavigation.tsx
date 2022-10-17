import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Entypo";
import EvilIcon from "react-native-vector-icons/Ionicons";

// screens
import RecycleBins from "../screens/RecycleBins";
import Home from "../screens/Home";
import Map from "../screens/Map";
import Background from "../components/Container";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#175BA5",
          borderTopWidth: 0,
        },
        tabBarShowLabel: false,
        tabBarInactiveTintColor: "#fff",
        // tabBarActiveTintColor: "yellow",
        tabBarVisibilityAnimationConfig: {
          hide: {
            animation: "timing",
            config: {
              duration: 500,
            },
          },
          show: {
            animation: "timing",
            config: {
              duration: 500,
            },
          },
        },
      }}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="RecycleBins"
        component={RecycleBins}
        options={{
          tabBarIcon: ({ color, size }) => (
            <EvilIcon name="location-sharp" size={size} color={color} />
          ),
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),
          headerShown: false,
          tabBarShowLabel: false,
          // tabBarBadge: 3,
          // tabBarActiveTintColor: "#000",
        }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            console.log("oi");
            e.preventDefault();

            // reset states from page home

            // navigation.popToTop();

            navigation.navigate("Home");
          },
        })}
      />
      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="map" size={size} color={color} />
          ),
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
