import React from "react";
import { Text } from "./textFont";
import { View, StyleSheet, ScrollView } from "react-native";
import IconFeather from "react-native-vector-icons/Feather";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// Definisci i tipi per i dati della card
interface CardData {
  type: "credit-card" | "paypal" | "cash";
  amount: string;
  decimal: string;
}

// Definisci il tipo di ritorno della funzione getCardStyle
interface CardStyle {
  backgroundColor: string;
  textColor: string;
}

// Dati delle card
const cardData: CardData[] = [
  { type: "credit-card", amount: "6.579", decimal: ",78" },
  { type: "paypal", amount: "62", decimal: ",02" },
  { type: "cash", amount: "834", decimal: ",12" },
  { type: "cash", amount: "200", decimal: ",56" },
  { type: "credit-card", amount: "12.800", decimal: ",98" },
];

// Funzione per restituire stili dinamici per le card
const getCardStyle = (iconType: CardData["type"]): CardStyle => {
  switch (iconType) {
    case "credit-card":
      return {
        backgroundColor: "#ECE9EA", // Grigio
        textColor: "#000000", // Testo nero
      };
    case "paypal":
      return {
        backgroundColor: "#5272F2", // Blu
        textColor: "#FFFFFF", // Testo bianco
      };
    case "cash":
      return {
        backgroundColor: "#129421", // Verde
        textColor: "#FFFFFF", // Testo bianco
      };
    default:
      return {
        backgroundColor: "#F773ED", // Rosa di default
        textColor: "#FFFFFF", // Testo bianco
      };
  }
};

const HomeCards: React.FC = () => {
  return (
    <View style={styles.allCards}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {cardData.map((card, index) => (
          <View
            key={index}
            style={[
              styles.card,
              { backgroundColor: getCardStyle(card.type).backgroundColor },
            ]}
          >
            {/* Rendering condizionale dell'icona in base al tipo di card */}
            {card.type === "credit-card" && (
              <IconFeather
                name="credit-card"
                size={12}
                color={getCardStyle(card.type).textColor}
                style={styles.cardIcon}
              />
            )}
            {card.type === "paypal" && (
              <IconFontAwesome
                name="paypal"
                size={12}
                color={getCardStyle(card.type).textColor}
                style={styles.cardIcon}
              />
            )}
            {card.type === "cash" && (
              <IconMaterialCommunityIcons
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
                  { color: getCardStyle(card.type).textColor },
                ]}
              >
                € {card.amount}
              </Text>
              <Text
                style={[
                  styles.cardAmountDecimal,
                  { color: getCardStyle(card.type).textColor },
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

export default HomeCards;
