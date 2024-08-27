import { Text, View, Image, StyleSheet } from "react-native";
import home from "../assets/navbar/home.png";
import wallet from "../assets/navbar/wallet.png";
import piu from "../assets/navbar/piu.png";
import stat from "../assets/navbar/stat.png";
import lock from "../assets/navbar/lock.png";

export default function Navbar() {
  return (
    <View style={styles.container}>
      <Image style={styles.images} source={home} />
      <Image style={styles.images} source={wallet} />
      <Image style={styles.images} source={piu} />
      <Image style={styles.images} source={stat} />
      <Image style={styles.images} source={lock} />
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
  images: {
    width: 24,
    height: 24,
  },
});
