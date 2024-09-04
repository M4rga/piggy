import { useRouter } from "expo-router";
import { Text } from "../../components/textFont";
import { View, Image, StyleSheet, Pressable } from "react-native";

const images = {
  receipts: require("../../assets/private/receipt-guy.png"),
  passwords: require("../../assets/private/password-keeper.png"),
  documents: require("../../assets/private/documents.png"),
};

const Private = () => {
  const router = useRouter();

  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={styles.container}
        onPress={() => router.push("otherPages/receiptPage")}
      >
        <Image source={images.receipts} style={styles.image} />
        <Text style={styles.text}>Storico scontrini</Text>
      </Pressable>
      <Pressable
        style={styles.container}
        onPress={() => router.push("otherPages/passwordKeeperPage")}
      >
        <Image source={images.passwords} style={styles.image} />
        <Text style={styles.text}>Password keeper</Text>
      </Pressable>
      <Pressable
        style={styles.container}
        onPress={() => router.push("otherPages/documentsPage")}
      >
        <Image source={images.documents} style={styles.image} />
        <Text style={styles.text}>Documenti</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: "#FCF6FB",
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
    fontSize: 18,
    color: "black",
  },
});

export default Private;
