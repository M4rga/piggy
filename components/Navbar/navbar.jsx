import { useState } from "react";
import { View, StyleSheet, Button } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

export default function Navbar() {
  const navigation = useNavigation();
  const [home, setHomeColor] = useState("#F773ED");
  const [stats, setStatsColor] = useState("black");
  return (
    <View style={styles.container}>
      <Icon
        name="home"
        size={22}
        onPress={() => {
          navigation.navigate("Home");
          setHomeColor("#F773ED");
          setStatsColor("black");
        }}
        color={home}
      />
      <Icon name="inbox" size={24} />
      <Icon name="plus" size={28} style={{ marginTop: -1.5 }} />
      <Icon
        name="bar-chart"
        size={24}
        onPress={() => {
          navigation.navigate("Stats");
          setHomeColor("black");
          setStatsColor("#F773ED");
        }}
        color={stats}
      />
      <Icon name="lock" size={24} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    shadowOffset: { width: 0, height: -6 },
    shadowOpacity: 0.05,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 13,
    paddingBottom: 40,
  },
});
