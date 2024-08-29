// ------------FONT---------------
import {Text, TextInput} from "../components/textFont";
import {useState, useEffect} from "react";
import * as Font from "expo-font";
// -------------------------
import {View, StyleSheet, Image, ScrollView} from "react-native";
import HomeCards from "../components/homeCards";
import TextTicker from "react-native-text-ticker";

const pig_empty = require("../assets/homepage/Pig_empty.png");
const pig_mid = require("../assets/homepage/Pig_mid.png");
const pig_full = require("../assets/homepage/Pig_full.png");
const pig_logo = require("../assets/homepage/Pig_logo.png");
const menu = require("../assets/homepage/Menu_home.png");

export default function Home() {
  // ------------FONT---------------
  const [fontsLoaded, setFontsLoaded] = useState(false);
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

  const getPigImage = (balance) => {
    if (balance < 500) {
      return pig_empty;
    } else if (balance >= 500 && balance < 10000) {
      return pig_mid;
    } else {
      return pig_full;
    }
  };

  // Example total balance in string format
  const totalBalanceString = "20.275,78";

  // Convert the totalBalanceString to a number
  const convertBalanceToNumber = (balanceString) => {
    return parseFloat(balanceString.replace(/\./g, "").replace(",", "."));
  };

  // Convert the string balance to a number
  const totalBalance = convertBalanceToNumber(totalBalanceString);

  const formatBalance = (balance) => {
    // Use Intl.NumberFormat to format with thousands separators and decimals
    const formatter = new Intl.NumberFormat("de-DE", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    // Format the number
    const formattedBalance = formatter.format(balance);
    const [euros, cents] = formattedBalance.split(",");

    return {euros, cents};
  };

  const {euros, cents} = formatBalance(totalBalance);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.topView}>
          <Image source={getPigImage(totalBalance)} style={styles.pig_top} />
        </View>

        <View style={styles.mainContainer}>
          <View style={styles.row}>
            <View style={styles.logoContainer}>
              <Image source={pig_logo} style={styles.pig_logo} />
            </View>
            <Text style={styles.text}>Ciao Marco!</Text>

            <View style={{flex: 1}}></View>

            <Image source={menu} style={styles.menuHome} />
          </View>

          <View style={styles.balanceContainer}>
            <Text style={styles.totalBalanceText}>Bilancio Totale</Text>
            <Text style={styles.totalBalanceAmount}>
              € {euros}
              <Text style={styles.totalBalanceDecimal}>.{cents}</Text>
            </Text>
            <HomeCards />
          </View>

          <View style={styles.InOutContainer}>
            <Text style={styles.title}>Questo mese</Text>
            <View style={styles.rowInOut}>
              <View style={styles.InOut}>
                <View style={styles.circleContainer}>
                  <View style={styles.circleIn}>
                    <Text style={styles.amountIn}>1782</Text>
                  </View>
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.label}>Entrate</Text>
                  <TextTicker
                    scrollSpeed={50}
                    loop
                    bounce
                    numberOfLines={1}
                    style={styles.description}
                  >
                    Stipendio, Mansione
                  </TextTicker>
                </View>
              </View>
              <View style={styles.InOut}>
                <View style={styles.circleContainer}>
                  <View style={styles.circleOut}>
                    <Text style={styles.amountOut}>914</Text>
                  </View>
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.label}>Uscite</Text>
                  <TextTicker
                    scrollSpeed={50}
                    loop
                    bounce
                    numberOfLines={1}
                    style={styles.description}
                  >
                    Cibo, Casa, Benzina
                  </TextTicker>
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
  title: {
    fontSize: 18,
    fontFamily: "Switzer-Semibold",
    marginBottom: 10,
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
    margin: 5, // Space between items
    flexDirection: "row", // Align circle and text horizontally
    alignItems: "center", // Center items vertically
  },
  circleContainer: {
    marginRight: 10, // Space between circle and text
  },
  circleIn: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: "#F773ED",
    borderRadius: 25, // Half of width and height for circular shape
    //backgroundColor: "#F0F0F0",
    alignItems: "center",
    justifyContent: "center",
  },
  circleOut: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: "#5272F2",
    borderRadius: 25, // Half of width and height for circular shape
    //backgroundColor: "#F0F0F0",
    alignItems: "center",
    justifyContent: "center",
  },
  amountIn: {
    fontSize: 16, // Smaller font size for the number
    color: "#F773ED",
    fontFamily: "Switzer-Semibold",
  },
  amountOut: {
    fontSize: 16, // Smaller font size for the number
    color: "#5272F2",
    fontFamily: "Switzer-Semibold",
  },
  textContainer: {
    flex: 1, // Take remaining space
  },
  label: {
    fontSize: 16,
    textAlign: "left",
    fontFamily: "Switzer-Semibold",
    marginLeft: 10,
  },
  description: {
    fontSize: 12,
    textAlign: "left",
    marginTop: 5,
    marginLeft: 10,
  },
});
