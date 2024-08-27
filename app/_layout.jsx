import { Text, View, StyleSheet } from "react-native";
import Navbar from "../components/navabar";

export default function App() {
  return (
    <View style={styles.container}>
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
