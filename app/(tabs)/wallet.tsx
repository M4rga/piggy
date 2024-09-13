import { Text } from "../../components/textFont";
import { View, ScrollView, StyleSheet, Pressable } from "react-native";
import React from "react";
import Card from "../../components/card";
import PlusCard from "../../components/plusCard";
import {
  Swipeable,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { router } from "expo-router";

// Funzione per convertire un colore HEX in RGB
const hexToRgb = (hex: string) => {
  let cleanedHex = hex.replace('#', '');
  if (cleanedHex.length === 3) {
    cleanedHex = cleanedHex.split('').map(hexChar => hexChar + hexChar).join('');
  }
  const bigint = parseInt(cleanedHex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return [r, g, b];
};

// Funzione per calcolare la luminanza relativa di un colore RGB
const getLuminance = (rgb: number[]): number => {
  if (rgb.length !== 3) {
    throw new Error("L'array RGB deve contenere esattamente 3 elementi.");
  }
  const [r, g, b] = rgb as [number, number, number];
  const [RsRGB, GsRGB, BsRGB] = [r / 255, g / 255, b / 255];
  const [R, G, B] = [RsRGB, GsRGB, BsRGB].map(v =>
    v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
  );
  return 0.2126 * R + 0.7152 * G + 0.0722 * B;
};



// Funzione per determinare il colore del testo (bianco o nero) in base alla luminanza
const getTextColor = (bgColor: string) => {
  const rgb = hexToRgb(bgColor);
  const luminance = getLuminance(rgb);
  return luminance > 0.5 ? 'black' : 'white';
};

const Wallet = () => {

  const renderRightActions = (color: string) => {
    const textColor = getTextColor(color);
    return (
      <View style={{ flexDirection: "row" }}>
        <Pressable
          onPress={() => router.push("otherPages/modifyCard")}
          style={[styles.deleteButton, { backgroundColor: color }]}
        >
          <Text style={[styles.deleteButtonText, { color: textColor }]}>Options</Text>
        </Pressable>
        <Pressable
          onPress={() => alert("Elemento eliminato")}
          style={[styles.deleteButton, { backgroundColor: color, marginRight: 10 }]}
        >
          <Text style={[styles.deleteButtonText, { color: textColor }]}>Delete</Text>
        </Pressable>
      </View>
    );
  };

  return (
    <GestureHandlerRootView>
      <ScrollView style={{ flex: 1, backgroundColor: "#FCF6FB" }}>
        <View style={styles.balance}>
          <Text style={styles.balanceText}>Bilancio Totale</Text>
          <Text style={{ fontSize: 34 }}>
            € 20.275
            <Text style={{ color: "#A0A0A0", fontSize: 20 }}>,78</Text>
          </Text>
        </View>

        <Swipeable renderRightActions={() => renderRightActions("#ECE9EA")}>
          <Card
            name="Conto Corrente"
            num1="€ 6.579"
            num2=",78"
            color="#ECE9EA"
            iconName="credit-card"
            color2=""
          />
        </Swipeable>

        <Swipeable renderRightActions={() => renderRightActions("#2F212F")}>
          <Card
            name="Risparmi"
            num1="€ 834"
            num2=",00"
            color="#2F212F"
            color2="white"
            iconName="money"
          />
        </Swipeable>

        <Swipeable renderRightActions={() => renderRightActions("#5272F2")}>
          <Card
            name="Pay Pal"
            num1="€ 62"
            num2=",00"
            color="#5272F2"
            color2="white"
            iconName="paypal"
          />
        </Swipeable>

        <Swipeable renderRightActions={() => renderRightActions("#F773ED")}>
          <Card
            name="Fondo di risparmio"
            num1="€ 12.800"
            num2=",00"
            color="#F773ED"
            color2="white"
            iconName="smile-o"
          />
        </Swipeable>

        <PlusCard />
      </ScrollView>
    </GestureHandlerRootView>
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
  deleteButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: "90%",
    borderRadius: 20,
    marginHorizontal: 5,
  },
  deleteButtonText: {
    fontWeight: "bold",
  },
});

export default Wallet;
