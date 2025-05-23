import { Text, TextInput, Button } from "../../../components/customComponents";
import {
  View,
  StyleSheet,
  ScrollView,
  Pressable,
  Switch,
  Animated,
} from "react-native";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import React, { useState } from "react";
import DropdownButton from "../../../components/dropdown";
import TextInputDate from "../../../components/textInputDate";
import {
  usePressableEffect,
  pressableStyles,
  applyPressableStyle,
} from "../../../components/pressableEffects";

type Category = "Conto Corrente" | "Contanti" | "Pay Pal" | "Fondo Risparmio";

const Income = () => {
  const [selectedCategory, setSelectedCategory] = useState("Conto Corrente");
  const [isEnabled, setIsEnabled] = useState(false);
  const [selectedTransactionType, setSelectedTransactionType] =
    useState<string>("uscite");
  const [inputValue, setInputValue] = useState("");

  const handleDropdownSelection = (value: string) => {
    setSelectedTransactionType(value);
  };

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const handleTextChange = (text: string) => {
    setInputValue(text);
  };

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
    <ScrollView
      contentContainerStyle={styles.scrollContent}
      keyboardShouldPersistTaps="handled"
      style={styles.container}
    >
      {/* Import section */}
      <Text style={styles.text}>Importo</Text>
      <View style={styles.importView}>
        <Text style={styles.currencyText}>+ €</Text>
        <TextInput
          style={styles.textInput}
          placeholder="0"
          keyboardType="numeric"
          value={inputValue}
          onChangeText={handleTextChange}
        />
      </View>

      {/* Wallet selection section */}
      <Text style={styles.selectionText}>Portafogli</Text>
      <View style={styles.selectionContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
        >
          {categories.map((category, index) => {
            const { pressableProps, animatedStyle } = usePressableEffect();
            return (
              <Pressable
                key={index}
                {...pressableProps}
                onPress={() => setSelectedCategory(category)}
              >
                <Animated.View
                  style={[
                    applyPressableStyle(styles.button),
                    selectedCategory === category && styles.selectedButton,
                    animatedStyle,
                  ]}
                >
                  <View style={styles.iconTextContainer}>
                    <IconFontAwesome
                      name={categoryIcons[category]}
                      size={20}
                      style={styles.icon}
                      color={selectedCategory === category ? "#F773ED" : "#555"}
                    />
                    <Text
                      style={StyleSheet.flatten([
                        styles.nonSelectedText,
                        selectedCategory === category && styles.selectedText,
                      ])}
                    >
                      {category}
                    </Text>
                  </View>
                </Animated.View>
              </Pressable>
            );
          })}
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
        <Button title="Salva" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCF6FB",
  },
  scrollContent: {
    paddingBottom: 30,
    marginTop: 30,
  },
  text: {
    marginLeft: 20,
    fontSize: 15,
    marginTop: 20,
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
    flexShrink: 1,
    textAlign: "center",
    padding: 10,
    color: "#FF69B4",
    fontSize: 30,
    fontFamily: "Switzer-Variable",
  },
  selectionContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
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
    padding: 10,
    paddingLeft: 20,
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
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 25,
  },
  switchText: {
    marginLeft: 15,
    fontSize: 14,
    color: "gray",
  },
  pickerContainer: {
    marginRight: 20,
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
});

export default Income;
