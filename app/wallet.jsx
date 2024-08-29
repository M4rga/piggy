// ------------FONT---------------
import { Text, TextInput } from "../components/textFont";
import { useState, useEffect } from "react";
import  Card  from "../components/card";
import * as Font from "expo-font";
// -------------------------
import { View, StyleSheet, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import Icon2 from "react-native-vector-icons/FontAwesome";

export default function Wallet() {
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
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.balance}>
        <Text style={styles.balanceText}>Bilancio Totale</Text>
        <Text style={{ fontSize: 34 }}>
          € 20.275
          <Text style={{ color: "#A0A0A0", fontSize: 20 }}>,78</Text>
        </Text>
      </View>

      <Card name="Conto Corrente" num1="€ 6.579" num2=",78" color="#ECE9EA" iconName="credit-card"/>

      <Card name="Risparmi" num1="€ 834" num2=",00" color="#2F212F" color2="white" iconName="dollar-sign" />

      <Card name="Pay Pal" num1="€ 62" num2=",00" color="#5272F2" color2="white" iconName="fa-brands fa-paypal"/>

      <Card name="Fondo di risparmio" num1="€ 12.800" num2=",00" color="#F773ED" color2="white" iconName="fa-solid fa-piggy-bank"/>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  balance: {
    paddingTop: "10%",
    paddingLeft: "5%",
    marginBottom: 40,
  },
  balanceText: {
    color: "#A0A0A0",
    fontSize: 20,
    fontWeight: 'bold'
    // fontFamily: "Switzer-Variable",
  },
  card: {
    borderRadius: 20,
    height: "23%",
    width: "95%",
    marginLeft: "2.5%",
    padding: 15,
    flexDirection: 'row',
    marginBottom: "8%",
    // Proprietà ombra per iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.7,
    shadowRadius: 5,
    // Proprietà ombra per Android
    elevation: 10,
  },
  cardView1: {
    felx: 1,
    width: "88%",
    height: "100%",
  }
});
