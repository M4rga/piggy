// ------------FONT---------------
import { Text, TextInput } from "../components/textFont";
import { useState, useEffect } from "react";
import * as Font from "expo-font";
// -------------------------
import { View, StyleSheet, Image, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Feather"; // Import Feather icons
import Icon2 from "react-native-vector-icons/FontAwesome"; // Import Feather icons
import Icon3 from "react-native-vector-icons/MaterialCommunityIcons"; // Import Feather icons

const pig_empty = require("../assets/Homepage/Pig_empty.png");
const pig_logo = require("../assets/Homepage/Pig_logo.png");
const menu = require("../assets/Homepage/Menu_home.png");

export default function Home() {
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
    return null; // Or show a loading indicator
  }
  // -------------------------
  return (
    <ScrollView style={styles.container}>
      {/* Container for the content within the scroll view */}
      <View style={styles.contentContainer}>
        {/* View for the top section with an image */}
        <View style={styles.topView}>
          <Image source={pig_empty} style={styles.pig_top} />
        </View>

        {/* Main content area */}
        <View style={styles.mainContainer}>
          {/* Row container for logo, text, and menu icon */}
          <View style={styles.row}>
            {/* Wrapper View to create a pink circle around the pig_logo */}
            <View style={styles.logoContainer}>
              <Image source={pig_logo} style={styles.pig_logo} />
            </View>
            {/* Text greeting the user */}
            <Text style={styles.text}>Ciao Marco!</Text>

            {/* Flex View to push the menu icon to the right */}
            <View style={{ flex: 1 }}></View>

            {/* Menu icon aligned to the right */}
            <Image source={menu} style={styles.menuHome} />
          </View>

          {/* Additional content below */}
          <View style={styles.balanceContainer}>
            {/* Wrap all text content inside a <Text> component */}
            <Text style={styles.totalBalanceText}>Bilancio Totale</Text>
            <Text style={styles.totalBalanceAmount}>
              € 20.275<Text style={styles.totalBalanceDecimal}>.78</Text>
            </Text>

            {/* Card section with icon and amount */}
            <View style={styles.allCards}>
              <View style={styles.card}>
                <View style={styles.cardAmountRow}>
                  <Text style={styles.cardAmount}>€ 6.579</Text>
                  <Text style={styles.cardAmountDecimal}>,78</Text>
                  <Icon name="credit-card" size={12} color="#000" />
                </View>
              </View>

              {/* Repeat card structure as needed */}
              <View style={styles.card}>
                <View style={styles.cardAmountRow}>
                  <Text style={styles.cardAmount}>€ 6.579</Text>
                  <Text style={styles.cardAmountDecimal}>,78</Text>
                  <Icon2 name="paypal" size={12} color="#000" />
                </View>
              </View>

              <View style={styles.card}>
                <View style={styles.cardAmountRow}>
                  <Text style={styles.cardAmount}>€ 6.579</Text>
                  <Text style={styles.cardAmountDecimal}>,78</Text>
                  <Icon3 name="cash" size={12} color="#000" />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the ScrollView takes the full height of the screen
  },
  contentContainer: {
    flexGrow: 1, // Allows the content to expand to fill the ScrollView
    justifyContent: "flex-start", // Aligns content to the top of the ScrollView
  },
  topView: {
    alignItems: "center", // Centers the image horizontally
    justifyContent: "center", // Centers the image vertically
    paddingTop: 50, // Adds padding to the top of the view
  },
  mainContainer: {
    flex: 1, // Makes this container take up remaining space
    backgroundColor: "#FFFFFF", // White background color for main container
    borderTopLeftRadius: 40, // Rounded corners on the top left
    borderTopRightRadius: 40, // Rounded corners on the top right
    paddingHorizontal: 2, // Add horizontal padding inside main container
  },
  pig_top: {
    flex: 1,
    width: 230, // Width of the pig image
    height: 189, // Height of the pig image
    marginBottom: -16, // Negative margin to overlap the image
  },
  pig_logo: {
    width: 48, // Width of the logo image
    height: 33, // Height of the logo image
  },
  row: {
    flexDirection: "row", // Aligns children in a horizontal row
    alignItems: "center", // Centers children vertically within the row
    paddingLeft: 20, // Adds left padding to the row
    paddingTop: 15, // Adds top padding to the row
    justifyContent: "space-between", // Distributes space between elements in the row
    paddingRight: 20, // Adds right padding to the row
  },
  text: {
    fontSize: 23, // Font size for the greeting text
    fontFamily: "Switzer-Semibold",
  },
  logoContainer: {
    width: 58, // Width including padding for the logo container
    height: 58, // Height including padding for the logo container
    borderRadius: 29, // Makes the container circular
    borderWidth: 1, // Border thickness around the container
    borderColor: "#F773ED", // Pink border color for the container
    alignItems: "center", // Centers the logo horizontally in the container
    justifyContent: "center", // Centers the logo vertically in the container
    marginRight: 10, // Margin to separate the logo from the text
  },
  menuHome: {
    width: 22, // Width of the menu icon
    height: 22, // Height of the menu icon
  },
  balanceContainer: {
    padding: 20, // Padding around the balance section
  },
  allCards: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  totalBalanceText: {
    paddingBottom: 10,
    fontSize: 18,
    fontFamily: "Switzer-Semibold",
  },
  totalBalanceAmount: {
    fontSize: 25,
    fontFamily: "Switzer-Semibold",
    marginBottom: 20,
  },
  totalBalanceDecimal: {
    fontSize: 12,
    fontFamily: "Switzer-Semibold",
    color: "#A0A0A0",
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 80,
    height: 50,
    padding: 15,
    backgroundColor: "#5272F2",
    borderRadius: 10,
    marginBottom: 15, // Spacing between cards
  },
  cardAmountRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardAmount: {
    fontSize: 10,
  },
  cardAmountDecimal: {
    fontSize: 6,
  },
  cash: {
    width: 12,
    height: 12,
  },
  paypal: {
    width: 12,
    height: 12,
  },
});
