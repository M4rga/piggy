import { View, TouchableOpacity } from "react-native";
import IconFeather from "react-native-vector-icons/Feather";
import { router } from "expo-router";
import { StyleSheet } from "react-native";

const PlusCard = () => {
  return (
    <TouchableOpacity onPress={() => router.push("otherPages/addCard")}>
      <View style={styles.card}>
        <View style={styles.InnerView}>
          <IconFeather
            style={{ marginTop: 2, color: "#A0A0A0" }}
            name="plus"
            size={45}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    height: 170,
    width: "95%",
    marginLeft: "2.5%",
    padding: 15,
    flexDirection: "row",
    marginBottom: 20,
    borderWidth: 3,
    borderColor: "#A0A0A0",
    borderStyle: "dotted",
  },
  InnerView: {
    justifyContent: "center",
    alignItems: "center",
    height: "50%",
    width: "19%",
    borderRadius: 100,
    borderWidth: 3,
    borderColor: "#A0A0A0",
  },
});

export default PlusCard;
