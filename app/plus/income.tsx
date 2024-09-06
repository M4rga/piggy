import { Text, TextInput } from "../../components/textFont";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import IconFeather from "react-native-vector-icons/Feather";
import React, { useState } from "react";

const Income = () => {
  const [selectedCategory, setSelectedCategory] = useState("Elettrodomestici");

  const categories = [
    "Conto Corrente",
    "Contanti",
    "Pay Pal",
    "Fondo Risparmio",
  ];

  return (
    <View style={styles.container}>
      {/* Import section */}
      <Text style={styles.text}>Importo</Text>
      <View style={styles.importView}>
        <Text style={styles.currencyText}>+ €</Text>
        <TextInput
          style={styles.textInput}
          placeholder="10,00"
          keyboardType="numeric"
        />
      </View>

      <Text style={styles.text}>Portafogli</Text>
      <View style={styles.selectionContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
        >
          {categories.map((category, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.button,
                selectedCategory === category && styles.selectedButton,
              ]}
              onPress={() => setSelectedCategory(category)}
            >
              <Text
                style={[
                  styles.nonSelectedText,
                  ...(selectedCategory === category
                    ? [styles.selectedText]
                    : []),
                ]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.sessions}>
        <View style={{ flexDirection: "row", height: 80 }}>
          <IconFeather
            name="message-square"
            style={{ marginTop: 11.5 }}
            size={30}
          />
          <View style={{ marginLeft: 20 }}>
            <Text style={{ color: "#A0A0A0", margin: 0 }}>Note</Text>
            <TextInput
              style={{ marginTop: 6 }}
              placeholder="Inserisci la tua nota qua"
              keyboardType="default"
            />
          </View>
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
  text: {
    margin: 20,
    fontSize: 15,
  },
  sessions: {
    backgroundColor: "white",
    width: "auto",
    height: 80,
    marginLeft: 10,
    marginTop: 30,
    marginRight: 10,
    padding: 15,
    borderRadius: 20,
  },
  importView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
    backgroundColor: "white",
    borderColor: "white",
    borderRadius: 40,
    width: "60%",
    padding: 10,
    alignSelf: "center",
  },
  currencyText: {
    fontSize: 24,
    color: "#A0A0A0",
    textAlign: "center",
  },
  textInput: {
    flexGrow: 1,
    textAlign: "center",
    padding: 10,
    color: "#FF69B4",
    fontSize: 30,
  },
  selectionContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#ccc",
    margin: 5,
  },
  selectedButton: {
    borderColor: "pink",
  },
  nonSelectedText: {
    color: "#555",
  },
  selectedText: {
    color: "pink",
  },
  scrollContainer: {
    flexDirection: "row",
  },
});

export default Income;
