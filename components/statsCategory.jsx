import { View, Text, Image, StyleSheet } from "react-native";

const appleLogo = require("../assets/apple.png");

export default function StatsCategory() {
  const value = 50; // Supponiamo di avere un valore da mostrare

  return (
    <View style={styles.container}>
      <View style={styles.circleContainer}>
        <Image source={appleLogo} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Cibo</Text>
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
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 8,
    backgroundColor: "#fff",
    justifyContent: "space-between", // Distribuire spazio tra gli elementi
  },
  circleContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: "hidden",
    marginRight: 10,
    borderWidth: 3,
    borderColor: "pink",
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
