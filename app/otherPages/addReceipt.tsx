import { Text } from "../../components/textFont";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

const images = {
  one: require("../../assets/private/receipt-guy.png"),
};

const AddReceipt = () => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}></View>
      <View style={styles.imageViewStyle}>
        <Image source={images.one} style={styles.imageStyle} />
      </View>
      <View style={styles.viewStyle}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Scatta foto</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Importa</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCF6FB",
    paddingTop: "10%",
  },
  imageViewStyle: {
    alignItems: "center",
    marginBottom: -21,
    zIndex: 1,
  },
  imageStyle: {
    height: 400,
    width: 300,
  },
  viewStyle: {
    flexDirection: "row",
    backgroundColor: "white",
    height: 130,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#F773ED",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 10,
    alignItems: "center",
    width: 140,
  },
  buttonText: {
    color: "black",
    fontSize: 14,
  },
});

export default AddReceipt;
