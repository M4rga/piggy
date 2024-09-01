import { Text } from "../components/textFont"; // Importing custom text components
import { useState, useEffect } from "react"; // Importing React hooks
import { FlatList } from "react-native";
import * as Font from "expo-font"; // Importing Font loading module from Expo
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  Platform,
  StatusBar,
} from "react-native"; // Importing React Native components
import HomeCards from "../components/homeCards"; // Importing a custom HomeCards component
import TextTicker from "react-native-text-ticker"; // Importing TextTicker for scrolling text animation
import StatsCategory from "../components/statsCategory";

import data from "../data/data.json";

// Importing image assets
const pig_empty = require("../assets/homepage/Pig_empty.png");
const pig_mid = require("../assets/homepage/Pig_mid.png");
const pig_full = require("../assets/homepage/Pig_full.png");
const pig_logo = require("../assets/homepage/Pig_logo.png");
const menu = require("../assets/homepage/Menu_home.png");

export default function Home() {
  // State to manage font loading
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // Function to load custom fonts
  const loadFonts = () => {
    return Font.loadAsync({
      "Switzer-Variable": require("../assets/font/Switzer-Variable.ttf"),
      "Switzer-Bold": require("../assets/font/Switzer-Bold.otf"),
      "Switzer-Semibold": require("../assets/font/Switzer-Semibold.otf"),
      "Switzer-Thin": require("../assets/font/Switzer-Thin.otf"),
      "Switzer-Italic": require("../assets/font/Switzer-Italic.otf"),
    });
  };

  // Load fonts when the component mounts
  useEffect(() => {
    loadFonts().then(() => setFontsLoaded(true));
  }, []);

  // Return null until fonts are loaded
  if (!fontsLoaded) {
    return null;
  }

  // Function to get the appropriate pig image based on the balance
  const getPigImage = (balance) => {
    if (balance < 500) {
      return pig_empty; // Show empty pig image for balance < 500
    } else if (balance >= 500 && balance < 10000) {
      return pig_mid; // Show mid pig image for balance between 500 and 10000
    } else {
      return pig_full; // Show full pig image for balance >= 10000
    }
  };

  // Example total balance in string format
  const totalBalanceString = "20.275,78";

  // Convert the total balance string to a number
  const convertBalanceToNumber = (balanceString) => {
    return parseFloat(balanceString.replace(/\./g, "").replace(",", "."));
  };

  // Convert string balance to number
  const totalBalance = convertBalanceToNumber(totalBalanceString);

  // Function to format balance with thousands separators and decimals
  const formatBalance = (balance) => {
    // Create a formatter object for formatting numbers according to German locale
    const formatter = new Intl.NumberFormat("de-DE", {
      // Ensure there are always 2 digits after the decimal point
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    // Format the balance using the created formatter object
    const formattedBalance = formatter.format(balance);

    // Split the formatted string into euros and cents
    // In the "de-DE" locale, the decimal separator is a comma (",")
    const [euros, cents] = formattedBalance.split(",");

    // Return an object containing the formatted euros and cents
    return { euros, cents };
  };
  // Extract formatted euros and cents
  const { euros, cents } = formatBalance(totalBalance);

  return (
    <ScrollView style={styles.container}>
      {/* Condizione per iOS e Android */}
      {Platform.OS === "ios" ? (
        <View
          style={{ height: 55, backgroundColor: "rgba(255, 255, 255, 0.95)" }}
        ></View>
      ) : (
        <StatusBar backgroundColor="rgba(255, 255, 255, 0.95)" />
      )}
      <View style={styles.contentContainer}>
        {/* Top view with pig image */}
        <View style={styles.topView}>
          <Image source={getPigImage(totalBalance)} style={styles.pig_top} />
        </View>

        {/* Main content container */}
        <View style={styles.mainContainer}>
          <View style={styles.row}>
            <View style={styles.logoContainer}>
              <Image source={pig_logo} style={styles.pig_logo} />
            </View>
            <Text style={styles.text}>Ciao Marco!</Text>

            <View style={{ flex: 1 }}></View>

            <Image source={menu} style={styles.menuHome} />
          </View>

          {/* Total balance section */}
          <View style={styles.balanceContainer}>
            <Text style={styles.totalBalanceText}>Bilancio Totale</Text>
            <Text style={styles.totalBalanceAmount}>
              € {euros}
              <Text style={styles.totalBalanceDecimal}>.{cents}</Text>
            </Text>
            <HomeCards />
          </View>

          {/* In/Out section for this month */}
          <View style={styles.InOutContainer}>
            <Text style={styles.titleThisMonth}>Questo mese</Text>
            <View style={styles.rowInOut}>
              <View style={styles.InOut}>
                <Text style={styles.amountIn}>+ 1782</Text>
                <View style={styles.textContainer}>
                  <Text style={styles.label}>Entrate</Text>
                  <TextTicker
                    scrollSpeed={50} // Sets the speed of the scrolling text. A lower number means slower scrolling.
                    loop // Ensures that the text scrolls infinitely in a loop.
                    bounce // Makes the text bounce back to the beginning after it scrolls off the screen.
                    numberOfLines={1} // Limits the text to a single line. No line wrapping will occur.
                    marqueeDelay={1000} // Specifies a delay (in milliseconds) before the scrolling effect starts. Here it's 1 second.
                    style={styles.description} // Applies the custom styles defined in the `styles.description` object to the text ticker.
                  >
                    Stipendio, Mansione
                  </TextTicker>
                </View>
              </View>
              <View style={styles.InOut}>
                <Text style={styles.amountOut}>- 914</Text>
                <View style={styles.textContainer}>
                  <Text style={styles.label}>Uscite</Text>
                  <TextTicker
                    scrollSpeed={50} // Sets the speed of the scrolling text. A lower number means slower scrolling.
                    loop // Ensures that the text scrolls infinitely in a loop.
                    bounce // Makes the text bounce back to the beginning after it scrolls off the screen.
                    numberOfLines={1} // Limits the text to a single line.
                    marqueeDelay={1000} // Specifies a delay (in milliseconds) before the scrolling effect starts.
                    style={styles.description}
                  >
                    Cibo, Casa, Benzina
                  </TextTicker>
                </View>
              </View>
            </View>
          </View>

          {/* Latest movements section */}
          <View style={styles.MovesContainer}>
            <Text style={styles.titleLastMoves}>Ultimi movimenti</Text>
            <FlatList
              data={data.movements}
              renderItem={({ item }) => (
                <StatsCategory
                  moves={item.moves}
                  amount={item.amount}
                  date={item.date}
                />
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

// Styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: "flex-start",
  },
  topView: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 2,
  },
  pig_top: {
    zIndex: 10,
    flex: 1,
    width: 230,
    height: 189,
    marginBottom: -25,
  },
  pig_logo: {
    width: 48,
    height: 33,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    paddingTop: 15,
    justifyContent: "space-between",
    paddingRight: 20,
  },
  text: {
    fontSize: 23,
    fontFamily: "Switzer-Semibold",
  },
  logoContainer: {
    width: 58,
    height: 58,
    borderRadius: 29,
    borderWidth: 1,
    borderColor: "#F773ED",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  menuHome: {
    width: 22,
    height: 22,
  },
  balanceContainer: {
    padding: 20,
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
    width: 80,
    height: 50,
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
    justifyContent: "flex-end",
    paddingRight: 20,
    marginRight: 10,
  },
  cardIcon: {
    position: "absolute",
    top: 5,
    right: 5,
  },
  cardAmountRow: {
    flexDirection: "row",
    alignItems: "baseline",
    position: "absolute",
    bottom: 5,
    left: 5,
  },
  cardAmount: {
    fontSize: 12,
    color: "#FFFFFF",
  },
  cardAmountDecimal: {
    fontSize: 8,
    color: "#FFFFFF",
  },
  cash: {
    flex: 1,
    width: 15,
    height: 15,
  },
  paypal: {
    width: 12,
    height: 12,
  },
  InOutContainer: {
    padding: 10,
  },
  titleThisMonth: {
    fontSize: 18,
    fontFamily: "Switzer-Semibold",
    marginBottom: 10,
    marginLeft: 10,
    marginTop: -15,
  },
  titleLastMoves: {
    fontSize: 18,
    fontFamily: "Switzer-Semibold",
    marginBottom: 10,
    marginLeft: 10,
  },
  rowInOut: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  InOut: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderColor: "#ECE9EA",
    borderWidth: 2,
    borderRadius: 17,
    padding: 10,
    margin: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  amountIn: {
    fontSize: 16,
    color: "#F773ED",
    fontFamily: "Switzer-Semibold",
  },
  amountOut: {
    fontSize: 16,
    color: "#5272F2",
    fontFamily: "Switzer-Semibold",
  },
  textContainer: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    textAlign: "left",
    fontFamily: "Switzer-Semibold",
    marginLeft: 12,
  },
  description: {
    fontSize: 12,
    textAlign: "left",
    marginTop: 5,
    marginLeft: 11,
  },
  MovesContainer: {
    padding: 10,
  },
  columnMoves: {
    flexDirection: "column",
    padding: 10,
  },
  moveItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FCF6FB",
    paddingVertical: 8,
    marginBottom: 10,
    borderRadius: 15,
    height: 60,
  },
  moveName: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 14,
    fontFamily: "Switzer-Variable",
    textAlign: "left",
    marginTop: 12,
    left: 20,
  },
  amount: {
    position: "absolute",
    top: 12,
    right: 20,
    fontSize: 16,
    fontFamily: "Switzer-Semibold",
    textAlign: "right",
    color: "#000000",
  },
  date: {
    position: "absolute",
    bottom: 5,
    right: 20,
    fontSize: 10,
    color: "#A0A0A0",
    textAlign: "right",
    flex: 1,
    marginTop: 8,
  },
});
