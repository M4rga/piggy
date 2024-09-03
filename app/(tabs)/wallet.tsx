import { Text } from "../../components/textFont";
import { View, ScrollView, StyleSheet } from "react-native";
import React from "react";
import Card from "../../components/card";
import PlusCard from "../../components/plusCard";

const Wallet = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#FCF6FB" }}>
      <View style={styles.balance}>
        <Text style={styles.balanceText}>Bilancio Totale</Text>
        <Text style={{ fontSize: 34 }}>
          € 20.275
          <Text style={{ color: "#A0A0A0", fontSize: 20 }}>,78</Text>
        </Text>
      </View>

      <Card
        name="Conto Corrente"
        num1="€ 6.579"
        num2=",78"
        color="#ECE9EA"
        iconName="credit-card"
        color2=""
      />

      <Card
        name="Risparmi"
        num1="€ 834"
        num2=",00"
        color="#2F212F"
        color2="white"
        iconName="money"
      />

      <Card
        name="Pay Pal"
        num1="€ 62"
        num2=",00"
        color="#5272F2"
        color2="white"
        iconName="paypal"
      />

      <Card
        name="Fondo di risparmio"
        num1="€ 12.800"
        num2=",00"
        color="#F773ED"
        color2="white"
        iconName="smile-o"
      />

      <PlusCard />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  balance: {
    paddingTop: "10%",
    paddingLeft: "5%",
    marginBottom: 40,
  },
  balanceText: {
    color: "#A0A0A0",
    fontSize: 20,
  },
  card: {
    borderRadius: 20,
    height: "23%",
    width: "95%",
    marginLeft: "2.5%",
    padding: 15,
    flexDirection: "row",
    marginBottom: "8%",
    // Proprietà ombra per iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.7,
    shadowRadius: 5,
    // Proprietà ombra per Android
    elevation: 10,
  },
  cardView1: {
    flex: 1,
    width: "88%",
    height: "100%",
  },
});

export default Wallet;
