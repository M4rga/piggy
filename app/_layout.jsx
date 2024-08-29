// ------------FONT---------------
import { Text, TextInput } from "../components/textFont";
import { useState, useEffect } from "react";
import * as Font from "expo-font";
// -------------------------
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import HeaderButton from "../components/headerButton";
import Icon from "react-native-vector-icons/Feather";
import Home from "./home";
import Stats from "./stats";
import Wallet from "./wallet";
import Income from "./income";
import Outcome from "./loan";
import Loan from "./outcome";
import Private from "./private";
import Recipt from "./recipt";

const Tab = createBottomTabNavigator();

export default function App() {
  const navigation = useNavigation();
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
            headerLeft: () => <HeaderButton />,
            headerRight: () => <HeaderButton icon={"plus"} />,
          }}
        />
        {/* <Icon name="plus" size={28} /> */}
        <Tab.Screen
          name="Income"
          component={Income}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="plus" size={28} color={color} />
            ),
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontFamily: "Switzer-Variable",
            },
            headerLeft: () => <HeaderButton />,
            headerRight: () => <HeaderButton icon={"plus"} />,
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
            headerLeft: () => <HeaderButton />,
            headerRight: () => <HeaderButton icon={"filter"} size={20} />,
          }}
        />
        <Tab.Screen
          name="Private Area"
          component={Private}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="lock" size={24} color={color} />
            ),
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontFamily: "Switzer-Variable",
            },
            headerLeft: () => <HeaderButton />,
            headerRight: () => <HeaderButton icon={"plus"} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
