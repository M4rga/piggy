import React from "react";
import { Text } from "./textFont";
import { View, Image, StyleSheet, ImageSourcePropType } from "react-native";
import IconFeather from "react-native-vector-icons/Feather";

// Define type for image object
interface Images {
  [key: string]: ImageSourcePropType;
}

const images: Images = {
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
const getAmountMovesColor = (amount: string): string => {
  if (amount.startsWith("-")) {
    return "#5272F2"; // Blue for negative
  } else if (amount.startsWith("+")) {
    return "#F773ED"; // Pink for positive
  } else {
    return "#A0A0A0"; // Default gray color
  }
};

// Define props type of StatsCategory category
interface StatsCategoryProps {
  icon?: string;
  circleColor?: string;
  name?: string;
  date?: string;
  amount?: string;
  moves?: string;
}

const StatsCategory: React.FC<StatsCategoryProps> = ({
  icon = "",
  circleColor = "black",
  name = "",
  date = "",
  amount = "",
  moves = "",
}) => {
  return (
    <View
      style={[
        styles.container,
        icon && amount ? [styles.extraMargin, styles.extraPadding] : null,
        ,
      ]}
    >
      {icon && amount ? (
        // First condition: Icon and Import
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
      ) : icon && !amount ? (
        // Second condition: Only Icon, Name and Date
        <View style={styles.columnMoves}>
          <View style={styles.privateItem}>
            <View style={[styles.circleContainerPrivate]}>
              <IconFeather name={icon} size={25}></IconFeather>
            </View>
            <View style={styles.containerCentered}>
              <Text style={styles.textCentered}>{name}</Text>
              <Text style={styles.dateStyleRight}>{date}</Text>
            </View>
          </View>
        </View>
      ) : !icon && amount ? (
        // Third condition: Only Name, Import and Date
        <View style={styles.columnMoves}>
          <View style={styles.moveItem}>
            <Text style={styles.moveName}>{moves}</Text>
            <Text
              style={[styles.amount, { color: getAmountMovesColor(amount) }]}
            >
              {amount}
            </Text>
            <Text style={styles.dateStyle}>{date}</Text>
          </View>
        </View>
      ) : (
        // Fourth condition: Name and date
        <View style={styles.textContainer}>
          <Text style={styles.text}>{name}</Text>
          <Text style={styles.dateStyle}>{date}</Text>
        </View>
      )}
    </View>
  );
};

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
  extraPadding: {
    padding: 10,
  },
  extraMargin: {
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
  circleContainerPrivate: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: "lightblue",
    backgroundColor: "lightblue",
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
  privateItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FCF6FB",
    padding: 15,
    marginBottom: 10,
    borderRadius: 15,
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
  dateStyle: {
    fontSize: 10,
    color: "#A0A0A0",
    textAlign: "right",
    position: "absolute",
    bottom: 5,
    right: 20,
  },
  containerCentered: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textCentered: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  dateStyleRight: {
    fontSize: 10,
    color: "#A0A0A0",
    textAlign: "right",
    marginRight: 20,
  },
});

export default StatsCategory;
