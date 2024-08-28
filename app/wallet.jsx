import { Text, View, StyleSheet, Button } from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function Wallet() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum" }}>
      <View style={styles.balance}>
        <Text style={styles.balanceText}>Bilancio Totale</Text>
        <Text style={{ fontSize: 34 }}>
          € 20.275
          <Text style={{ color: "#A0A0A0", fontSize: 20 }}>,78</Text>
        </Text>
      </View>
      <View style={styles.card}>
        <Text>Conto Corrente</Text>
        <Text>
          € 6.579 <Text style={{ fontSize: 10 }}>,78</Text>
        </Text>
        <Icon name="credit-card" size={30} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  balance: {
    paddingTop: "10%",
    paddingLeft: "5%",
    marginBottom: 20,
  },
  balanceText: {
    color: "#A0A0A0",
    fontSize: 20,
  },
  card: {
    backgroundColor: "#ECE9EA",
    borderRadius: 20,
    height: "25%",
    width: "95%",
    marginLeft: "2.5%",
  },
});
