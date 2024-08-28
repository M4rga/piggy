import { View, StyleSheet, Button } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

export default function Navbar() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Icon name="home" size={22} onPress={() => navigation.navigate("Home")} />
      <Icon name="inbox" size={24} />
      <Icon name="plus" size={28} style={{ marginTop: -1.5 }} />
      <Icon
        name="bar-chart"
        size={24}
        onPress={() => navigation.navigate("Stats")}
      />
      <Icon name="lock" size={24} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 13,
    paddingBottom: 40,
  },
});
