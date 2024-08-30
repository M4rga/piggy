// ------------FONT---------------
import {Text, TextInput} from "../components/textFont";
import {useState, useEffect} from "react";
import * as Font from "expo-font";
// -------------------------
import {View, StyleSheet, Image, ScrollView} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import Icon2 from "react-native-vector-icons/FontAwesome";
import Icon3 from "react-native-vector-icons/MaterialCommunityIcons";
// -------------------------

const cardData = [
  {type: "credit-card", amount: "6.579", decimal: ",78"},
  {type: "paypal", amount: "62", decimal: ",02"},
  {type: "cash", amount: "834", decimal: ",12"},
  {type: "cash", amount: "200", decimal: ",56"},
  {type: "credit-card", amount: "12.800", decimal: ",98"},
];

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
        backgroundColor: "#129421", // Green
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
        {cardData.map((card, index) => (
          <View
            key={index}
            style={[
              styles.card,
              {backgroundColor: getCardStyle(card.type).backgroundColor},
            ]}
          >
            {/* Conditionally render the icon based on card type */}
            {card.type === "credit-card" && (
              <Icon
                name="credit-card"
                size={12}
                color={getCardStyle(card.type).textColor}
                style={styles.cardIcon}
              />
            )}
            {card.type === "paypal" && (
              <Icon2
                name="paypal"
                size={12}
                color={getCardStyle(card.type).textColor}
                style={styles.cardIcon}
              />
            )}
            {card.type === "cash" && (
              <Icon3
                name="cash"
                size={12}
                color={getCardStyle(card.type).textColor}
                style={styles.cardIcon}
              />
            )}

            <View style={styles.cardAmountRow}>
              <Text
                style={[
                  styles.cardAmount,
                  {color: getCardStyle(card.type).textColor},
                ]}
              >
                € {card.amount}
              </Text>
              <Text
                style={[
                  styles.cardAmountDecimal,
                  {color: getCardStyle(card.type).textColor},
                ]}
              >
                {card.decimal}
              </Text>
            </View>
          </View>
        ))}
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
