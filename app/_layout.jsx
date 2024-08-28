// ------------FONT---------------
import { Text, TextInput } from "../components/textFont";
import { useState, useEffect } from "react";
import * as Font from "expo-font";
// -------------------------
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Feather";
import Home from "./home";
import Stats from "./stats";
import Wallet from "./wallet";

const Tab = createBottomTabNavigator();

export default function App() {
  // ------------FONT---------------
  const [fontsLoaded, setFontsLoaded] = useState(false); // Correct useState import
  const loadFonts = () => {
    return Font.loadAsync({
      "Switzer-Variable": require("../assets/font/Switzer-Variable.ttf"),
      "Switzer-Bold": require("../assets/font/Switzer-Bold.otf"),
      "Switzer-Semibold": require("../assets/font/Switzer-Semibold.otf"),
      "Switzer-Thin": require("../assets/font/Switzer-Thin.otf"),
      "Switzer-Italic": require("../assets/font/Switzer-Italic.otf"),
    });
  };

  useEffect(() => {
    loadFonts().then(() => setFontsLoaded(true));
  }, []);

  if (!fontsLoaded) {
    return null;
  }
  // -------------------------

  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName="home"
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#F773ED",
          tabBarInactiveTintColor: "black",
          tabBarStyle: {
            paddingBottom: 20,
            height: 70,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Icon name="home" size={22} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Wallet"
          component={Wallet}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="inbox" size={24} color={color} />
            ),
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontFamily: "Switzer-Variable",
            },
            headerLeft: () => (
              <View style={{ marginLeft: 15 }}>
                <Icon
                  name="chevron-left"
                  size={26}
                  onPress={() => alert("This is a button!")}
                />
              </View>
            ),
            headerRight: () => (
              <View style={{ marginRight: 15 }}>
                <Icon
                  name="plus"
                  size={26}
                  onPress={() => alert("This is a button!")}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Stats"
          component={Stats}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="bar-chart" size={24} color={color} />
            ),
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontFamily: "Switzer-Variable",
            },
            headerLeft: () => (
              <View style={{ marginLeft: 15 }}>
                <Icon
                  name="chevron-left"
                  size={26}
                  onPress={() => alert("This is a button!")}
                />
              </View>
            ),
            headerRight: () => (
              <View style={{ marginRight: 15 }}>
                <Icon
                  name="plus"
                  size={26}
                  onPress={() => alert("This is a button!")}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
