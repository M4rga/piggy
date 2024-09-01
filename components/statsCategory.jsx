import { View, Text, Image, StyleSheet } from "react-native";

// Import your JSON data
import data from "../data/data.json";

const images = {
  apple: require("../assets/stats/apple.png"),
  house: require("../assets/stats/house.png"),
  pill: require("../assets/stats/pill.png"),
  plane: require("../assets/stats/plane.png"),
  shopping: require("../assets/stats/shopping.png"),
  train: require("../assets/stats/train.png"),
  headphones: require("../assets/stats/headphones.png"),
  car: require("../assets/stats/car.png"),
  plate: require("../assets/stats/plate.png"),
  ticket: require("../assets/stats/ticket.png"),
};

// Function to determine the color of the movements amount based on the sign
const getAmountMovesColor = (amount) => {
  // Check if the amount starts with '-' or '+'
  if (amount.startsWith("-")) {
    return "#5272F2"; // Blue for negative
  } else if (amount.startsWith("+")) {
    return "#F773ED"; // Pink for positive
  } else {
    return "#A0A0A0"; // Default gray color
  }
};

export default function StatsCategory({
  icon,
  circleColor = "black",
  name,
  date,
  amount = "€ 0",
  moves,
}) {
  return (
    <View style={[styles.container, icon && styles.extraPaddingMargin]}>
      {icon ? (
        <>
          <View style={[styles.circleContainer, { borderColor: circleColor }]}>
            <Image source={images[icon]} style={styles.image} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{name}</Text>
            <Text
              style={[styles.valueText, { color: getAmountMovesColor(amount) }]}
            >
              {amount}
            </Text>
          </View>
        </>
      ) : (
        <View style={styles.columnMoves}>
          <View style={styles.moveItem}>
            <Text style={styles.moveName}>{moves}</Text>
            <Text
              style={[styles.amount, { color: getAmountMovesColor(amount) }]}
            >
              {amount}
            </Text>
            <Text style={styles.date}>{date}</Text>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 0,
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 8,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  extraPaddingMargin: {
    padding: 10,
    margin: 20,
  },
  circleContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: "hidden",
    marginRight: 10,
    borderWidth: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 35,
    height: 35,
  },
  textContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
    color: "#333",
  },
  valueText: {
    fontSize: 16,
    color: "#333",
    textAlign: "right",
  },
  columnMoves: {
    flex: 1,
  },
  moveItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FCF6FB",
    paddingVertical: 8,
    marginBottom: 10,
    borderRadius: 15,
    height: 60,
    position: "relative",
  },
  moveName: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 14,
    fontFamily: "Switzer-Variable",
    textAlign: "left",
    marginLeft: 20,
    marginTop: 12,
  },
  amount: {
    fontSize: 16,
    fontFamily: "Switzer-Semibold",
    textAlign: "right",
    color: "#000000",
    position: "absolute",
    top: 12,
    right: 20,
  },
  date: {
    fontSize: 10,
    color: "#A0A0A0",
    textAlign: "right",
    position: "absolute",
    bottom: 5,
    right: 20,
  },
});
