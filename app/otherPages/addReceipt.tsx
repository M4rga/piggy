import { Text } from "../../components/textFont";
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";

const images = {
  one: require("../../assets/private/receipt-guy.png"),
};

const AddReceipt = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageViewStyle}>
        <Image source={images.one} style={styles.imageStyle} />
      </View>
      <View style={styles.viewStyle}>
        <View>
          <Text style={styles.categoriaText}>Categoria</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Elettrodomestisci</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Abbigliamento</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Texnologia</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
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
    marginBottom: -19,
  },
  imageStyle: {
    height: 270,
    width: 270,
  },
  viewStyle: {
    backgroundColor: "white",
    flex: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: "6%",
  },
  categoriaText: {
    color: "#A0A0A0",
    fontSize: 11,
  },
  button: {
    borderColor: "#F773ED",
    borderWidth: 2,
    padding: 12,
    paddingTop: 9,
    borderRadius: 15,
    marginBottom: 10,
    alignItems: "center",
    width: "auto",
    marginRight: 10,
  },
  buttonText: {
    color: "#F773ED",
    fontSize: 11,
  },
});

export default AddReceipt;
