import { Text, View, StyleSheet, Image } from "react-native";
const pig_empty = require("../assets/Pig_empty.png");
const pig_mid = require("../assets/Pig_mid.png");
const pig_full = require("../assets/Pig_full.png");
const pig_logo = require("../assets/Pig_logo.png");

export default function Home() {
  return (
    <View style={styles.container}>
      {/* View above the main content */}
      <View style={styles.topView}>
        <Image source={pig_empty} style={styles.pig_top} />
      </View>

      {/* Main content */}
      <View style={styles.mainContainer}>
        {/* Container for logo and text */}
        <View style={styles.row}>
          {/* Wrapper View to create a pink circle around the pig_logo */}
          <View style={styles.logoContainer}>
            <Image source={pig_logo} style={styles.pig_logo} />
          </View>
          <Text style={styles.text}>Ciao Marco!</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCF6FB",
    justifyContent: "flex-start",
  },
  topView: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  pig_top: {
    width: 196,
    height: 189,
    marginBottom: -16,
  },
  pig_logo: {
    width: 48,
    height: 33,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    paddingTop: 15,
  },
  text: {
    fontSize: 23,
    fontWeight: "bold",
  },
  logoContainer: {
    width: 58, // 48 (image width) + 10 (5px border on each side)
    height: 58, // 48 (image height) + 10 (5px border on each side)
    borderRadius: 29, // Half of width and height to make it a circle
    borderWidth: 1, // Thin border
    borderColor: "#F773ED", // Pink color for the border
    alignItems: "center", // Center the image horizontally
    justifyContent: "center", // Center the image vertically
    marginRight: 10, // Space between the logo and the text
  },
});