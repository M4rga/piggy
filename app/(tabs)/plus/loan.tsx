import { Text, TextInput, Button } from "../../../components/customComponents";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Switch,
} from "react-native";
import React, { useState } from "react";
import DropdownButton from "../../../components/dropdown";
import TextInputDate from "../../../components/textInputDate";

const Loan = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [selectedButton, setSelectedButton] = useState<string | null>(null);
  const [selectedTransactionType, setSelectedTransactionType] =
    useState<string>("uscite");

  const handleDropdownSelection = (value: string) => {
    setSelectedTransactionType(value);
  };

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const handleButtonPress = (buttonType: string) => {
    setSelectedButton(buttonType);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>Importo</Text>
      <View style={styles.quantity}>
        <View style={styles.importView}>
          <Text style={styles.currencyText}> €</Text>
          <TextInput
            style={styles.textInput}
            placeholder="10,00"
            keyboardType="numeric"
          />
        </View>

        <View style={styles.buttons}>
          <View style={styles.TopButtons}>
            <TouchableOpacity
              style={[
                styles.TopButtonsStyle,
                selectedButton === "ioDevo" ? styles.selectedButton : {},
              ]}
              onPress={() => handleButtonPress("ioDevo")}
            >
              <Text
                style={[
                  styles.buttonText,
                  selectedButton === "ioDevo" ? styles.selectedButtonText : {},
                ]}
              >
                Io devo
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.TopButtons}>
            <TouchableOpacity
              style={[
                styles.TopButtonsStyle,
                selectedButton === "miDeve" ? styles.selectedButton : {},
              ]}
              onPress={() => handleButtonPress("miDeve")}
            >
              <Text
                style={[
                  styles.buttonText,
                  selectedButton === "miDeve" ? styles.selectedButtonText : {},
                ]}
              >
                Mi deve
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* "who" section */}
      <TextInputDate type="note" icon="user" title="Chi" />

      {/* "By when" section */}
      <TextInputDate type="date" icon="calendar" title="Entro quando" />

      {/* Note section */}
      <TextInputDate type="note" icon="message-square" />

      <View style={styles.footerContainer}>
        <View style={styles.switchContainer}>
          <Switch
            trackColor={{ false: "black", true: "blue" }}
            thumbColor={isEnabled ? "white" : "white"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          <Text style={styles.switchText}>Ricordamelo</Text>
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

  text: {
    marginLeft: 20,
    fontSize: 15,
    marginTop: 50,
  },

  quantity: {
    flexDirection: "row",
  },

  importView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
    backgroundColor: "white",
    borderColor: "white",
    borderRadius: 30,
    height: 100,
    width: "50%",
    padding: 10,
    shadowColor: "#F773ED45",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 10,
  },

  textInput: {
    flexShrink: 1,
    textAlign: "center",
    padding: 10,
    color: "#FF69B4",
    fontSize: 30,
    fontFamily: "Switzer-Semibold",
  },

  currencyText: {
    fontSize: 24,
    color: "#A0A0A0",
    textAlign: "center",
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

  buttonText: {
    color: "black",
    fontSize: 16,
  },

  selectedButtonText: {
    color: "#FF69B4",
  },

  TopButtonsStyle: {
    backgroundColor: "#FCF6FB",
    borderColor: "#D3D3D3",
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 100,
  },

  selectedButton: {
    borderColor: "#FF69B4",
  },

  VButton: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },

  TopButtons: {
    alignItems: "center",
    marginTop: 18,
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
    position: "absolute",
    top: 15,
    left: 250,
    width: 128,
    height: 100,
    zIndex: 10,
  },

  buttons: {
    flex: 1,
  },

  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
});

export default Loan;
