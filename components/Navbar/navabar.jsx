import { View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function Navbar() {
  return (
    <View style={styles.container}>
      <Icon name="home" size={22} />
      <Icon name="inbox" size={24} />
      <Icon name="plus" size={28} style={{marginTop: -1.5}} />
      <Icon name="bar-chart" size={24} />
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
