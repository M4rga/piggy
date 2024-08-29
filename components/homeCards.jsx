// ------------FONT---------------
import { Text, TextInput } from "../components/textFont";
import { useState, useEffect } from "react";
import * as Font from "expo-font";
// -------------------------
import { View, StyleSheet, Image, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Feather"; 
import Icon2 from "react-native-vector-icons/FontAwesome"; 
import Icon3 from "react-native-vector-icons/MaterialCommunityIcons"; 
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
    
  const HomeCards = () => {
    return (
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
    );
  };

export default HomeCards;

const styles = StyleSheet.create({
  text: {
    fontSize: 23,
    fontFamily: "Switzer-Semibold",
  },
  allCards: {
    flexDirection: "row",
    justifyContent: "space-between",
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