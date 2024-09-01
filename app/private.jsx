import { Text } from "../components/textFont";
import { View, Image, StyleSheet } from "react-native";

const images = {
  receipts: require("../assets/private/receipt-guy.png"),
  passwords: require("../assets/private/password-keeper.png"),
  documents: require("../assets/private/documents.png"),
};

export default function Private() {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <Image source={images.receipts} style={styles.image} />
        <Text style={styles.text}>Storico scontrini</Text>
      </View>
      <View style={styles.container}>
        <Image source={images.passwords} style={styles.image} />
        <Text style={styles.text}>Password keeper</Text>
      </View>
      <View style={styles.container}>
        <Image source={images.documents} style={styles.image} />
        <Text style={styles.text}>Documenti</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    marginTop: 20,
  },
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 30,
    margin: 20,
    alignItems: "center",
    padding: 10,
    height: 180,
  },
  image: {
    width: 150,
    height: 150,
    marginRight: 10,
    marginBottom: -50,
  },
  text: {
    fontSize: 20,
    color: "black",
  },
});
