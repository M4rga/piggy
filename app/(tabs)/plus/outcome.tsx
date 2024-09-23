import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
  Switch,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { Text, TextInput } from "../../../components/textFont";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import DropdownButton from "../../../components/dropdown";
import TextInputDate from "../../../components/textInputDate";

import data from "../../../data/data.json";

type Category = "Conto Corrente" | "Contanti" | "Pay Pal" | "Fondo Risparmio";

const Outcome = () => {
  const [selectedCategory, setSelectedCategory] = useState("Conto Corrente");
  const [isEnabled, setIsEnabled] = useState(false);
  const [selectedTransactionType, setSelectedTransactionType] =
    useState<string>("uscite"); // State used for "uscite" and "entrate" dropdown

  const handleDropdownSelection = (value: string) => {
    setSelectedTransactionType(value); // Updates the item in the dropdown
  };

  const images = {
    apple: require("../../../assets/stats/apple.png"),
    house: require("../../../assets/stats/house.png"),
    pill: require("../../../assets/stats/pill.png"),
    plane: require("../../../assets/stats/plane.png"),
    shopping: require("../../../assets/stats/shopping.png"),
    train: require("../../../assets/stats/train.png"),
    headphones: require("../../../assets/stats/headphones.png"),
    car: require("../../../assets/stats/car.png"),
    plate: require("../../../assets/stats/plate.png"),
    ticket: require("../../../assets/stats/ticket.png"),
  };

  // Function used for the switch
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const circleSelectionCategories = data.categories;

  const categories: Category[] = [
    "Conto Corrente",
    "Contanti",
    "Pay Pal",
    "Fondo Risparmio",
  ];

  const categoryIcons: Record<Category, string> = {
    "Conto Corrente": "credit-card",
    Contanti: "money",
    "Pay Pal": "paypal",
    "Fondo Risparmio": "smile-o",
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
    >
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Import section */}
        <Text style={styles.text}>Importo</Text>
        <View style={styles.importView}>
          <Text style={styles.currencyText}>- €</Text>
          <TextInput
            style={styles.textInput}
            placeholder="10,00"
            keyboardType="numeric"
          />
        </View>

        {/* Circle ScrollView */}
        <View style={styles.categorySelectionContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollView}
          >
            {circleSelectionCategories.map((category, index) => (
              <TouchableOpacity key={index} style={styles.iconContainer}>
                <View style={styles.circle}>
                  <Image
                    source={images[category.icon as keyof typeof images]}
                    style={styles.categoryImage}
                  />
                </View>
                <Text style={styles.label}>{category.type}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Wallet selection section */}
        <Text style={styles.selectionText}>Portafogli</Text>
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
                <View style={styles.iconTextContainer}>
                  <IconFontAwesome
                    name={categoryIcons[category]}
                    size={20}
                    style={styles.icon}
                    color={selectedCategory === category ? "#F773ED" : "#555"}
                  />
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
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Date section */}
        <TextInputDate type="date" icon="calendar" />

        {/* Note section */}
        <TextInputDate type="note" icon="message-square" />

        {/* Switch and dropdown */}
        <View style={styles.footerContainer}>
          <View style={styles.switchContainer}>
            <Switch
              trackColor={{ false: "black", true: "blue" }}
              thumbColor={isEnabled ? "white" : "white"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
            <Text style={styles.switchText}>Ricorrente</Text>
          </View>
          <View style={styles.pickerContainer}>
            {isEnabled && (
              <DropdownButton
                selectedValue={selectedTransactionType}
                onSelect={handleDropdownSelection}
                type="income/outcome/loan"
                color="white"
              />
            )}
          </View>
        </View>

        {/* Save Button */}
        <View style={styles.VButton}>
          <TouchableOpacity
            style={styles.saveButton}
            onPress={() => alert("Button pressed")}
          >
            <Text style={styles.buttonText}>Salva</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCF6FB",
  },
  scrollContent: {
    paddingBottom: 50,
    marginTop: 30,
  },
  text: {
    marginLeft: 20,
    fontSize: 15,
    fontFamily: "Switzer-Semibold",
  },
  selectionText: {
    marginLeft: 20,
    fontSize: 15,
    color: "gray",
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
    // Shadows (iOS)
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    // Shadows (Android)
    elevation: 5,
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
    fontFamily: "Switzer-Semibold",
  },
  selectionContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    paddingLeft: 20,
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
  nonSelectedText: {
    color: "#A0A0A0",
    fontSize: 11,
  },
  selectedText: {
    color: "#F773ED",
    fontSize: 11,
  },
  scrollContainer: {
    flexDirection: "row",
  },
  iconTextContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 8,
  },
  datePickerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    marginLeft: -10,
  },
  dateText: {
    fontSize: 16,
    color: "#555",
  },
  VButton: {
    alignItems: "center",
    marginTop: 20,
  },
  saveButton: {
    backgroundColor: "#F773ED",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 100,
  },
  buttonText: {
    color: "black",
    fontFamily: "Switzer-Semibold",
    fontSize: 16,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 20,
  },
  switchText: {
    marginLeft: 15,
    fontSize: 14,
    color: "gray",
  },
  pickerContainer: {
    marginRight: 10,
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  scrollView: {
    paddingHorizontal: 10,
  },
  iconContainer: {
    alignItems: "center",
    marginHorizontal: 10,
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "pink",
  },
  categoryImage: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    borderRadius: 20,
  },
  label: {
    marginTop: 5,
    fontSize: 12,
    color: "#333",
  },
  categorySelectionContainer: {
    marginBottom: 20,
  },
});

export default Outcome;
