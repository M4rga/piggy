import { View, Text, Image, StyleSheet } from "react-native";

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

export default function StatsCategory({ icon, circleColor = "black", name }) {
  const value = 50; // value to be seen

  return (
    <View style={styles.container}>
      <View style={[styles.circleContainer, { borderColor: circleColor }]}>
        <Image source={images[icon]} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.valueText}>€ {value}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    margin: 20,
    marginBottom: 0,
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 8,
    backgroundColor: "#fff",
    justifyContent: "space-between",
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
});
