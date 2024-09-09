import { Text, TextInput} from "../../components/textFont";
import { View, StyleSheet, TouchableOpacity, ScrollView, Platform, Switch} from "react-native";
import React, { useState } from "react";
import IconFeather from "react-native-vector-icons/Feather";
import DropdownButton from "../../components/dropdown";


const Loan = () => {

  const [isEnabled, setIsEnabled] = useState(false);
  const [selectedTransactionType, setSelectedTransactionType] =
  useState<string>("uscite"); // State used for "uscite" and "entrate" dropdown

  const handleDropdownSelection = (value: string) => {
    setSelectedTransactionType(value); // Updates the item in the dropdwon
  };

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>Importo</Text>
      <View style={styles.quantity}>
        <View style={styles.importView}>
          <Text style={styles.currencyText}>   €</Text>
          <TextInput
            style={styles.textInput}
            placeholder="10,00"
            keyboardType="numeric"
          />
        </View>

        <View>
          <View style={styles.VButton}>
            <TouchableOpacity
              style={styles.saveButton}
              onPress={() => alert("Button pressed")}
            >
              <Text style={styles.buttonText}>Io devo</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.VButton}>
            <TouchableOpacity
              style={styles.saveButton}
              onPress={() => alert("Button pressed")}
            >
              <Text style={styles.buttonText}>Mi deve</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.sessions}>
        <View style={{ flexDirection: "row", height: 80 }}>
          <IconFeather
            name="user"
            style={{ marginTop: 11.5 }}
            size={30}
          />
          <View style={{ marginLeft: 20 }}>
            <Text style={{ color: "#A0A0A0", margin: 0 }}>Who</Text>
            <TextInput
              style={{ marginTop: 6 }}
              placeholder="Inserisci la tua nota qua"
              keyboardType="default"
            />
          </View>
        </View>
      </View>

      <View style={styles.sessions}>
        <View style={{ flexDirection: "row", height: 80 }}>
          <IconFeather
            name="calendar"
            style={{ marginTop: 11.5 }}
            size={30}
          />
          <View style={{ marginLeft: 20 }}>
            <Text style={{ color: "#A0A0A0", margin: 0 }}>By when</Text>
            <TextInput
              style={{ marginTop: 6 }}
              placeholder="Inserisci la tua nota qua"
              keyboardType="default"
            />
          </View>
        </View>
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

      <View>
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
          <DropdownButton
            selectedValue={selectedTransactionType}
            onSelect={handleDropdownSelection}
            type="income"
          />
        </View>
      </View>

      <View style={styles.VButton}>
        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => alert("Button pressed")}
        >
          <Text style={styles.buttonText}>Salva</Text>
        </TouchableOpacity>
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
    margin: 20,
    fontSize: 15,
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
    shadowOpacity: 0.7,
    shadowRadius: 5,
    elevation: 10,
  },

  textInput: {
    flexGrow: 1,
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
    fontFamily: "Switzer-Semibold",
    fontSize: 16,
  },

  saveButton: {
    backgroundColor: "#F773ED",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 100,
  },

  VButton: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
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
    position: "absolute",
    top: 15,
    left: 200,
    width: 128,
    height: 100,
    zIndex: 10,
  },
});

export default Loan;
