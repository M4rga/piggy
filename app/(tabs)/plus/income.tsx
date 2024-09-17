import { Text, TextInput } from "../../../components/textFont";
import {
  View,
  StyleSheet,
  ScrollView,
  Pressable,
  Platform,
  Switch,
  KeyboardAvoidingView,
} from "react-native";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import React, { useState } from "react";
import DropdownButton from "../../../components/dropdown";
import TextInputDate from "../../../components/textInputDate";

type Category = "Conto Corrente" | "Contanti" | "Pay Pal" | "Fondo Risparmio";

const Income = () => {
  const [selectedCategory, setSelectedCategory] = useState("Conto Corrente");
  const [isEnabled, setIsEnabled] = useState(false);
  const [selectedTransactionType, setSelectedTransactionType] =
    useState<string>("uscite");

  const handleDropdownSelection = (value: string) => {
    setSelectedTransactionType(value);
  };

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

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
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
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

        {/* Wallet selection section */}
        <Text style={styles.text}>Portafogli</Text>
        <View style={styles.selectionContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollContainer}
          >
            {categories.map((category, index) => (
              <Pressable
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
              </Pressable>
            ))}
          </ScrollView>
        </View>

        {/* Note section */}
        <TextInputDate type="note" icon="message-square" />

        {/* Date section */}
        <TextInputDate type="date" icon="calendar" />

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
          <Pressable
            style={styles.saveButton}
            onPress={() => alert("Button pressed")}
          >
            <Text style={styles.buttonText}>Salva</Text>
          </Pressable>
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
    paddingBottom: 30,
  },
  text: {
    marginLeft: 20,
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
    fontFamily: "Switzer-Semibold",
  },
  selectionContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
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
    marginBottom: 20,
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
    marginLeft: 10,
    fontSize: 16,
    color: "#000",
  },
  pickerContainer: {
    marginRight: 10,
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Income;
