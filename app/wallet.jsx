// ------------FONT---------------
import { Text, TextInput } from "../components/textFont";
import { useState, useEffect } from "react";
import * as Font from "expo-font";
// -------------------------
import { View, StyleSheet, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Feather";

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

      <View style={[styles.card, {backgroundColor:"#ECE9EA"}]}>
        <View style={styles.cardView1}>
          <Text style={{ fontSize: 25 }}>Conto Corrente</Text>
          <Text style={{ fontSize: 30, marginTop: 75, marginLeft: 5, fontWeight: 'bold' }}>
            € 6.579 <Text style={{ fontSize: 17, fontWeight: 'bold' }}>,78</Text>
          </Text>
        </View>
        <Icon style={{ marginTop: 5 }} name="credit-card" size={30} />
      </View>

      <View style={[styles.card, {backgroundColor:"#2F212F"}]}>
        <View style={styles.cardView1}>
          <Text style={{ fontSize: 25, color: "white" }}>Contanti</Text>
          <Text style={{ fontSize: 30, marginTop: 75, marginLeft: 5, fontWeight: 'bold', color: "white" }}>
            € 834 <Text style={{ fontSize: 17, fontWeight: 'bold' }}>,00</Text>
          </Text>
        </View>
        <Icon style={{ marginTop: 5, color: "white" }} name="dollar-sign" size={30} />
      </View>

      <View style={[styles.card, {backgroundColor:"#5272F2"}]}>
        <View style={styles.cardView1}>
          <Text style={{ fontSize: 25, color: "white" }}>Pay Pal</Text>
          <Text style={{ fontSize: 30, marginTop: 75, marginLeft: 5, fontWeight: 'bold', color: "white" }}>
            € 62 <Text style={{ fontSize: 17, fontWeight: 'bold' }}>,00</Text>
          </Text>
        </View>
        <Icon style={{ marginTop: 5, color: "white" }} name="credit-card" size={30} />
      </View>
      
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
