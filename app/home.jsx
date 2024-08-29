// ------------FONT---------------
import { Text, TextInput } from "../components/textFont";
import { useState, useEffect } from "react";
import * as Font from "expo-font";
// -------------------------
import { View, StyleSheet, Image, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Feather"; 
import Icon2 from "react-native-vector-icons/FontAwesome"; 
import Icon3 from "react-native-vector-icons/MaterialCommunityIcons"; 

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
  // Function to return dynamic card styles
  const getCardStyle = (iconType) => {
    switch (iconType) {
      case "credit-card":
        return { 
          backgroundColor: "#ECE9EA", // Gray
          textColor: "#000000", //Black Text
        }; 
      case "paypal":
        return { 
          backgroundColor: "#5272F2", // Blue
          textColor: "#FFFFFF", // White text
        }; 
      case "cash":
        return { 
          backgroundColor: "#2F212F", // Dark
          textColor: "#FFFFFF", // White text
        }; 
      default:
        return { 
          backgroundColor: "#F773ED", // Default Pink
          textColor: "#FFFFFF", // White text
        }; 
    }
  };

  const getPigImage = (balance) => {
    if(balance < 500) {
      return pig_empty;
    } else if(balance >= 500 && balance < 10000) {
      return pig_mid;
    } else {
      return pig_full;
    }
  }

  const totalBalance = "20.275,78";

  const formatBalance = (balance) => {
    // Convert balance to a number
    const numericBalance = parseFloat(balance.replace(/\./g, '').replace(',', '.'));

    // Use Intl.NumberFormat to format with thousands separators and decimals
    const formatter = new Intl.NumberFormat('de-DE', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });

    // Format the number
    const formattedBalance = formatter.format(numericBalance);
    const [euros, cents] = formattedBalance.split(',');

    return { euros, cents };
  };

  const { euros, cents } = formatBalance(totalBalance);

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

            <View style={{ flex: 1 }}></View>

            <Image source={menu} style={styles.menuHome} />
          </View>

          <View style={styles.balanceContainer}>
            <Text style={styles.totalBalanceText}>Bilancio Totale</Text>
            <Text style={styles.totalBalanceAmount}>
              € {euros}<Text style={styles.totalBalanceDecimal}>.{cents}</Text>
            </Text>

            <View style={styles.allCards}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={[styles.card, { backgroundColor: getCardStyle("credit-card").backgroundColor }]}>
                  <Icon name="credit-card" size={12} color={getCardStyle("credit-card").textColor} style={styles.cardIcon} />
                  <View style={styles.cardAmountRow}>
                    <Text style={[styles.cardAmount, { color: getCardStyle("credit-card").textColor }]}>€ 6.579</Text>
                    <Text style={[styles.cardAmountDecimal, { color: getCardStyle("credit-card").textColor }]}>,78</Text>
                  </View>
                </View>

                <View style={[styles.card, { backgroundColor: getCardStyle("paypal").backgroundColor }]}>
                  <Icon2 name="paypal" size={12} color={getCardStyle("paypal").textColor} style={styles.cardIcon} />
                  <View style={styles.cardAmountRow}>
                    <Text style={[styles.cardAmount, { color: getCardStyle("paypal").textColor }]}>€ 62</Text>
                    <Text style={[styles.cardAmountDecimal, { color: getCardStyle("paypal").textColor }]}></Text>
                  </View>
                </View>

                <View style={[styles.card, { backgroundColor: getCardStyle("cash").backgroundColor }]}>
                  <Icon3 name="cash" size={12} color={getCardStyle("cash").textColor} style={styles.cardIcon} />
                  <View style={styles.cardAmountRow}>
                    <Text style={[styles.cardAmount, { color: getCardStyle("cash").textColor }]}>€ 834</Text>
                    <Text style={[styles.cardAmountDecimal, { color: getCardStyle("cash").textColor }]}></Text>
                  </View>
                </View>

                <View style={[styles.card, { backgroundColor: getCardStyle("cash").backgroundColor }]}>
                  <Icon3 name="cash" size={12} color={getCardStyle("cash").textColor} style={styles.cardIcon} />
                  <View style={styles.cardAmountRow}>
                    <Text style={[styles.cardAmount, { color: getCardStyle("cash").textColor }]}>€ 12.800</Text>
                    <Text style={[styles.cardAmountDecimal, { color: getCardStyle("cash").textColor }]}>,78</Text>
                  </View>
                </View>
              </ScrollView>
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
    flex: 1,
    width: 230,
    height: 189,
    marginBottom: -16,
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
});