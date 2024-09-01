// ------------FONT---------------
import { Text, TextInput } from "../components/textFont";
import { useState, useEffect } from "react";
import * as Font from "expo-font";
// -------------------------
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import HeaderButton from "../components/headerButton";
import Icon from "react-native-vector-icons/Feather";
import CustomTabBar from "../components/customTabBar";
import Home from "./home";
import Stats from "./stats";
import Wallet from "./wallet";
import Income from "./income";
import Loan from "./loan";
import Outcome from "./outcome";
import Private from "./private";
import Recipt from "./recipt";
import AddCard from "./AddCard";
import StatsFilter from "./statsFilter";

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
        tabBar={(props) => <CustomTabBar {...props} />}
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
            headerRight: () => (
              <HeaderButton icon={"filter"} size={20} goto="StatsFilter" />
            ),
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
          }}
        />
        <Tab.Screen
          name="Income"
          component={Income}
          options={{
            tabBarVisible: false,
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontFamily: "Switzer-Variable",
            },
            headerLeft: () => <HeaderButton />,
            headerRight: () => <HeaderButton icon={"plus"} />,
          }}
        />
        <Tab.Screen
          name="Outcome"
          component={Outcome}
          options={{
            tabBarVisible: false,
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontFamily: "Switzer-Variable",
            },
            headerLeft: () => <HeaderButton />,
            headerRight: () => <HeaderButton icon={"plus"} />,
          }}
        />
        <Tab.Screen
          name="Loan"
          component={Loan}
          options={{
            tabBarVisible: false,
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontFamily: "Switzer-Variable",
            },
            headerLeft: () => <HeaderButton />,
            headerRight: () => <HeaderButton icon={"plus"} />,
          }}
        />
        <Tab.Screen
          name="Recipt"
          component={Recipt}
          options={{
            tabBarVisible: false,
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontFamily: "Switzer-Variable",
            },
            headerLeft: () => <HeaderButton />,
            headerRight: () => <HeaderButton icon={"plus"} />,
          }}
        />
        <Tab.Screen
          name="StatsFilter"
          component={StatsFilter}
          options={{
            tabBarVisible: false,
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontFamily: "Switzer-Variable",
            },
            headerLeft: () => <HeaderButton />,
            headerRight: () => <HeaderButton icon={"check"} goto="Stats" />,
          }}
        />
        <Tab.Screen
          name="AddCard"
          component={AddCard}
          options={{
            tabBarVisible: false,
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontFamily: "Switzer-Variable",
            },
            headerLeft: () => <HeaderButton />,
            headerRight: () => <HeaderButton icon={"check"} goto="Stats" />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
