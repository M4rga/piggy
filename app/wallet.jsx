// ------------FONT---------------
import { Text, TextInput } from "../components/textFont";
import { useState, useEffect } from "react";
import * as Font from "expo-font";
// -------------------------
import { View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function Wallet() {
  // ------------FONT---------------
  const [fontsLoaded, setFontsLoaded] = useState(false); // Correct useState import
  const loadFonts = () => {
    return Font.loadAsync({
      "Switzer-Variable": require("../assets/font/Switzer-Variable.ttf"),
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
    <View style={{ flex: 1, backgroundColor: "plum" }}>
      <View style={styles.balance}>
        <Text style={styles.balanceText}>Bilancio Totale</Text>
        <Text style={{ fontSize: 34 }}>
          € 20.275
          <Text style={{ color: "#A0A0A0", fontSize: 20 }}>,78</Text>
        </Text>
      </View>
      <View style={styles.card}>
        <Text>Conto Corrente</Text>
        <Text>
          € 6.579 <Text style={{ fontSize: 10 }}>,78</Text>
        </Text>
        <Icon name="credit-card" size={30} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  balance: {
    paddingTop: "10%",
    paddingLeft: "5%",
    marginBottom: 20,
  },
  balanceText: {
    color: "#A0A0A0",
    fontSize: 20,
    // fontFamily: "Switzer-Variable",
  },
  card: {
    backgroundColor: "#ECE9EA",
    borderRadius: 20,
    height: "25%",
    width: "95%",
    marginLeft: "2.5%",
  },
});
