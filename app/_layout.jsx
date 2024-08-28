import { Text, View, StyleSheet } from "react-native";
import Navbar from "../components/Navbar/navabar";
import Stats from "../components/Stats/stats";

export default function App() {
  return (
    <View style={styles.container}>
      <Stats />
      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    justifyContent: "flex-end",
  },
});
