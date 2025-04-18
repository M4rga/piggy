import React, { useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Stack } from "expo-router";
import IconFeather from "react-native-vector-icons/Feather";
import { useRouter } from "expo-router";
import { MenuProvider } from "react-native-popup-menu";

const Layout = () => {
  const router = useRouter();
  const [loaded, error] = useFonts({
    "Switzer-Variable": require("../assets/font/Switzer-Variable.ttf"),
    "Switzer-Variable1": require("../assets/font/Switzer-Variable.ttf"),
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
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#FCF6FB" },
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "Switzer-Variable",
            fontSize: 18,
          },
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="otherPages/welcome"
          options={{
            headerShown: false,
            headerLeft: () => (
              <IconFeather
                name={"chevron-left"}
                size={26}
                onPress={() => router.back()}
              />
            ),
          }}
        />

        <Stack.Screen
          name="otherPages/addCard"
          options={{
            title: "Nuovo portafogli",
            headerLeft: () => (
              <IconFeather
                name={"chevron-left"}
                size={26}
                onPress={() => router.back()}
              />
            ),
            headerRight: () => (
              <IconFeather
                name={"check"}
                size={26}
                onPress={() => router.back()}
              />
            ),
          }}
        />

        <Stack.Screen
          name="otherPages/statsFilter"
          options={{
            title: "Statistiche",
            headerLeft: () => (
              <IconFeather
                name={"chevron-left"}
                size={26}
                onPress={() => router.back()}
              />
            ),
          }}
        />

        <Stack.Screen
          name="otherPages/receiptPage"
          options={{
            title: "Storico scontrini",
            headerLeft: () => (
              <IconFeather
                name={"chevron-left"}
                size={26}
                onPress={() => router.back()}
              />
            ),
          }}
        />

        <Stack.Screen
          name="otherPages/passwordKeeperPage"
          options={{
            title: "Password keeper",
            headerLeft: () => (
              <IconFeather
                name={"chevron-left"}
                size={26}
                onPress={() => router.back()}
              />
            ),
          }}
        />

        <Stack.Screen
          name="otherPages/documentsPage"
          options={{
            title: "Documenti",
            headerLeft: () => (
              <IconFeather
                name={"chevron-left"}
                size={26}
                onPress={() => router.back()}
              />
            ),
          }}
        />

        <Stack.Screen
          name="otherPages/cardMovements"
          options={{
            title: "Movimenti",
            headerLeft: () => (
              <IconFeather
                name={"chevron-left"}
                size={26}
                onPress={() => router.back()}
              />
            ),
          }}
        />

        <Stack.Screen
          name="otherPages/addReceipt"
          options={{
            title: "Aggiungi scontrino",
            headerLeft: () => (
              <IconFeather
                name={"chevron-left"}
                size={26}
                onPress={() => router.back()}
              />
            ),
            headerRight: () => (
              <IconFeather
                name={"check"}
                size={26}
                onPress={() => router.back()}
              />
            ),
          }}
        />

        <Stack.Screen
          name="otherPages/userProfile"
          options={{
            title: "Profilo",
            headerLeft: () => (
              <IconFeather
                name={"chevron-left"}
                size={26}
                onPress={() => router.back()}
              />
            ),
          }}
        />

        <Stack.Screen
          name="otherPages/modifyCard"
          options={{
            title: "Modifica",
            headerLeft: () => (
              <IconFeather
                name={"chevron-left"}
                size={26}
                onPress={() => router.back()}
              />
            ),
          }}
        />
      </Stack>
    </MenuProvider>
  );
};

export default Layout;
