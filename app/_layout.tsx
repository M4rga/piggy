import React, { useRef, useEffect, useState } from "react";
import { View, Pressable } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Tabs, useRouter } from "expo-router";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  MenuProvider,
  renderers,
} from "react-native-popup-menu";
import IconFeather from "react-native-vector-icons/Feather";

const { Popover } = renderers;

const Layout = () => {
  const [activeColor, setActiveColor] = useState("#F773ED");
  const [plusColor, setPlusColor] = useState("black");
  const router = useRouter();
  const menuRef = useRef(null);

  const openMenu = () => {
    if (menuRef.current) {
      (menuRef.current as any).open(); // Asserzione di tipo
    }
  };

  const [loaded, error] = useFonts({
    "Switzer-Variable": require("../assets/font/Switzer-Variable.ttf"),
    "Switzer-Bold": require("../assets/font/Switzer-Bold.otf"),
    "Switzer-Semibold": require("../assets/font/Switzer-Semibold.otf"),
    "Switzer-Thin": require("../assets/font/Switzer-Thin.otf"),
    "Switzer-Italic": require("../assets/font/Switzer-Italic.otf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <MenuProvider>
      <Tabs
        initialRouteName="home"
        screenOptions={{
          headerStyle: { backgroundColor: "#FCF6FB" },
          headerShadowVisible: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: activeColor,
          tabBarInactiveTintColor: "black",
          tabBarStyle: {
            paddingBottom: 20,
            height: 70,
          },
        }}
      >
        <Tabs.Screen
          name="(tabs)/index"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <IconFeather name="home" size={22} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="(tabs)/wallet"
          options={{
            title: "Wallet",
            tabBarIcon: ({ color }) => (
              <IconFeather name="inbox" size={24} color={color} />
            ),
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontFamily: "Switzer-Variable",
            },
            headerLeft: () => (
              <IconFeather
                name={"chevron-left"}
                size={26}
                style={{ marginHorizontal: 15 }}
                onPress={() => router.push("/")}
              />
            ),
            headerRight: () => (
              <IconFeather
                name={"plus"}
                size={29}
                style={{ marginHorizontal: 15 }}
                onPress={() => router.push("otherPages/addCard")}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="(tabs)/plus"
          options={{
            tabBarLabel: () => null,
            tabBarIcon: () => (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Menu
                  ref={menuRef}
                  renderer={Popover}
                  rendererProps={{
                    openAnimationDuration: 200,
                    closeAnimationDuration: 200,
                    placement: "top",
                    anchorStyle: {
                      backgroundColor: "#FCF6FB",
                      marginTop: -13,
                    },
                  }}
                  onOpen={() => {
                    setTimeout(() => {
                      setActiveColor(
                        activeColor === "#F773ED" ? "black" : "black"
                      );
                      setPlusColor(
                        plusColor === "black" ? "#F773ED" : "#F773ED"
                      );
                    }, 200);
                  }}
                  onClose={() => {
                    setActiveColor(
                      activeColor === "black" ? "#F773ED" : "#F773ED"
                    );
                    setPlusColor(plusColor === "#F773ED" ? "black" : "black");
                  }}
                >
                  <MenuTrigger>
                    <Pressable onPress={openMenu}>
                      <IconFeather name="plus" size={29} color={plusColor} />
                    </Pressable>
                  </MenuTrigger>
                  <MenuOptions
                    customStyles={{
                      optionsWrapper: {
                        paddingHorizontal: 25,
                        width: 240,
                        height: 47,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                      },
                      optionsContainer: {
                        borderColor: "#FCF6FB",
                        borderWidth: 0.8,
                        borderRadius: 100,
                        transform: [{ translateY: -12 }],
                      },
                    }}
                  >
                    <MenuOption
                      onSelect={() => router.push("plus/income")}
                      customStyles={{ OptionTouchableComponent: Pressable }}
                    >
                      <IconFeather name="arrow-down-right" size={22} />
                    </MenuOption>
                    <MenuOption
                      onSelect={() => router.push("plus/outcome")}
                      customStyles={{ OptionTouchableComponent: Pressable }}
                    >
                      <IconFeather name="arrow-up-right" size={22} />
                    </MenuOption>
                    <MenuOption
                      onSelect={() => router.push("plus/loan")}
                      customStyles={{ OptionTouchableComponent: Pressable }}
                    >
                      <IconFeather name="repeat" size={22} />
                    </MenuOption>
                    <MenuOption
                      onSelect={() => router.push("plus/receipt")}
                      customStyles={{ OptionTouchableComponent: Pressable }}
                    >
                      <IconFeather name="file-minus" size={22} />
                    </MenuOption>
                  </MenuOptions>
                </Menu>
              </View>
            ),
          }}
          listeners={() => ({
            tabPress: (e) => {
              e.preventDefault();
            },
          })}
        />

        <Tabs.Screen
          name="plus/income"
          options={{
            title: "Income",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontFamily: "Switzer-Variable",
            },
            href: null,
            headerLeft: () => (
              <IconFeather
                name={"chevron-left"}
                size={26}
                style={{ marginHorizontal: 15 }}
                onPress={() => router.push("/")}
              />
            ),
            // headerRight: () => (
            //   <IconFeather
            //     name={"chevron-left"}
            //     size={26}
            //     style={{ marginHorizontal: 15 }}
            //     onPress={() => router.push("otherPages/addCard")}
            //   />
            // ),
          }}
        />

        <Tabs.Screen
          name="plus/outcome"
          options={{
            title: "Outcome",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontFamily: "Switzer-Variable",
            },
            href: null,
            headerLeft: () => (
              <IconFeather
                name={"chevron-left"}
                size={26}
                style={{ marginHorizontal: 15 }}
                onPress={() => router.push("/")}
              />
            ),
            // headerRight: () => (
            //   <IconFeather
            //     name={"chevron-left"}
            //     size={26}
            //     style={{ marginHorizontal: 15 }}
            //     onPress={() => router.push("otherPages/addCard")}
            //   />
            // ),
          }}
        />

        <Tabs.Screen
          name="plus/loan"
          options={{
            title: "Loan",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontFamily: "Switzer-Variable",
            },
            href: null,
            headerLeft: () => (
              <IconFeather
                name={"chevron-left"}
                size={26}
                style={{ marginHorizontal: 15 }}
                onPress={() => router.push("/")}
              />
            ),
            // headerRight: () => (
            //   <IconFeather
            //     name={"chevron-left"}
            //     size={26}
            //     style={{ marginHorizontal: 15 }}
            //     onPress={() => router.push("otherPages/addCard")}
            //   />
            // ),
          }}
        />

        <Tabs.Screen
          name="plus/receipt"
          options={{
            title: "Receipt",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontFamily: "Switzer-Variable",
            },
            href: null,
            headerLeft: () => (
              <IconFeather
                name={"chevron-left"}
                size={26}
                style={{ marginHorizontal: 15 }}
                onPress={() => router.push("/")}
              />
            ),
            // headerRight: () => (
            //   <IconFeather
            //     name={"chevron-left"}
            //     size={26}
            //     style={{ marginHorizontal: 15 }}
            //     onPress={() => router.push("otherPages/addCard")}
            //   />
            // ),
          }}
        />

        <Tabs.Screen
          name="(tabs)/stats"
          options={{
            title: "Stats",
            tabBarIcon: ({ color }) => (
              <IconFeather name="bar-chart" size={24} color={color} />
            ),
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontFamily: "Switzer-Variable",
            },
            headerLeft: () => (
              <IconFeather
                name={"chevron-left"}
                size={26}
                style={{ marginHorizontal: 15 }}
                onPress={() => router.push("/")}
              />
            ),
            headerRight: () => (
              <IconFeather
                name={"filter"}
                size={26}
                style={{ marginHorizontal: 15 }}
                onPress={() => router.push("otherPages/statsFilter")}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="(tabs)/private"
          options={{
            title: "Private",
            tabBarIcon: ({ color }) => (
              <IconFeather name="lock" size={24} color={color} />
            ),
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontFamily: "Switzer-Variable",
            },
            headerLeft: () => (
              <IconFeather
                name={"chevron-left"}
                size={26}
                style={{ marginHorizontal: 15 }}
                onPress={() => router.push("/")}
              />
            ),
            // headerRight: () => (
            //   <IconFeather
            //     name={"chevron-left"}
            //     size={26}
            //     style={{ marginHorizontal: 15 }}
            //     onPress={() => router.push("otherPages/addCard")}
            //   />
            // ),
          }}
        />

        <Tabs.Screen
          name="otherPages/welcome"
          options={{
            title: "Private",
            // href: null,
            tabBarIcon: ({ color }) => (
              <IconFeather name="align-justify" size={24} color={color} />
            ),
            headerShown: false,
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontFamily: "Switzer-Variable",
            },
            headerLeft: () => (
              <IconFeather
                name={"chevron-left"}
                size={26}
                style={{ marginHorizontal: 15 }}
                onPress={() => router.push("/")}
              />
            ),
            // headerRight: () => (
            //   <IconFeather
            //     name={"chevron-left"}
            //     size={26}
            //     style={{ marginHorizontal: 15 }}
            //     onPress={() => router.push("otherPages/addCard")}
            //   />
            // ),
          }}
        />

        <Tabs.Screen
          name="otherPages/addCard"
          options={{
            title: "Add Card",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontFamily: "Switzer-Variable",
            },
            href: null,
            headerLeft: () => (
              <IconFeather
                name={"chevron-left"}
                size={26}
                style={{ marginHorizontal: 15 }}
                onPress={() => router.push("/wallet")}
              />
            ),
            // headerRight: () => (
            //   <IconFeather
            //     name={"chevron-left"}
            //     size={26}
            //     style={{ marginHorizontal: 15 }}
            //     onPress={() => router.push("otherPages/addCard")}
            //   />
            // ),
          }}
        />

        <Tabs.Screen
          name="otherPages/statsFilter"
          options={{
            title: "Filter Stats",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontFamily: "Switzer-Variable",
            },
            href: null,
            headerLeft: () => (
              <IconFeather
                name={"chevron-left"}
                size={26}
                style={{ marginHorizontal: 15 }}
                onPress={() => router.push("/stats")}
              />
            ),
            // headerRight: () => (
            //   <IconFeather
            //     name={"chevron-left"}
            //     size={26}
            //     style={{ marginHorizontal: 15 }}
            //     onPress={() => router.push("otherPages/addCard")}
            //   />
            // ),
          }}
        />
      </Tabs>
    </MenuProvider>
  );
};

export default Layout;
