import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./home";
import Stats from "./stats";
import Wallet from "./wallet";
import Icon from "react-native-vector-icons/Feather";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon
                name="home"
                size={22}
                color={focused ? "#F773ED" : "black"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Wallet"
          component={Wallet}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon
                name="inbox"
                size={24}
                color={focused ? "#F773ED" : "black"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Stats"
          component={Stats}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon
                name="bar-chart"
                size={24}
                color={focused ? "#F773ED" : "black"}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
