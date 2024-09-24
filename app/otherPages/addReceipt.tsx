import { Text, Button } from "../../components/customComponents";
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import TextInputDate from "../../components/textInputDate";

const images = {
  one: require("../../assets/private/receipt-guy.png"),
};

const AddReceipt = () => {
  const [selectedCategory, setSelectedCategory] = useState("Conto Corrente");

  type Category = any;
  const categories: Category[] = [
    "Elettrodomestisci",
    "Abbigliamento",
    "Tecnologia",
    "Supermercato",
  ];

  return (
    <View style={styles.container}>
      <View style={styles.imageViewStyle}>
        <Image source={images.one} style={styles.imageStyle} />
      </View>
      <View style={styles.viewStyle}>
        <View>
          <Text style={styles.categoriaText}>Categoria</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories.map((category, index) => (
              <Pressable
                key={index}
                style={[
                  styles.button,
                  selectedCategory === category && styles.selectedButton,
                ]}
                onPress={() => setSelectedCategory(category)}
              >
                <View>
                  <Text
                    style={[
                      styles.buttonText,
                      ...(selectedCategory === category
                        ? [styles.selectedButtonText]
                        : []),
                    ]}
                  >
                    {category}
                  </Text>
                </View>
              </Pressable>
            ))}
          </ScrollView>
        </View>

        {/* Date section */}
        <TextInputDate type="date" icon="calendar" />

        {/* Note section */}
        <TextInputDate type="note" icon="message-square" />

        {/* Save button */}
        <View style={styles.saveView}>
          <Button title="Salva" />
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
    marginLeft: 20,
    marginBottom: 20,
    color: "#A0A0A0",
    fontSize: 11,
  },
  button: {
    borderColor: "#A0A0A0",
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
    color: "#A0A0A0",
    fontSize: 11,
  },
  selectedButton: {
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
  selectedButtonText: {
    color: "#F773ED",
    fontSize: 11,
  },
  saveView: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
});

export default AddReceipt;
