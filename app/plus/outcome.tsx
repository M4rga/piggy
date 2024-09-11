import { Text, TextInput } from "../../components/textFont";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
  Switch,
} from "react-native";
import IconFeather from "react-native-vector-icons/Feather";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import DropdownButton from "../../components/dropdown";

type Category = "Conto Corrente" | "Contanti" | "Pay Pal" | "Fondo Risparmio";

const Outcome = () => {
  const [selectedCategory, setSelectedCategory] = useState("Conto Corrente");
  const [date, setDate] = useState<Date>(new Date());
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const [selectedTransactionType, setSelectedTransactionType] =
    useState<string>("uscite"); // State used for "uscite" and "entrate" dropdown

  const handleDropdownSelection = (value: string) => {
    setSelectedTransactionType(value); // Updates the item in the dropdown
  };

  // Function used for the switch
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  // Function used for the date picker
  const onChange = (
    event: DateTimePickerEvent,
    selectedDate?: Date | undefined
  ) => {
    if (selectedDate) {
      setDate(selectedDate);
    }
    setShowDatePicker(false);
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
    <ScrollView style={styles.container}>
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

      {/* Date Picker section */}
      <View style={styles.sessions}>
        <View style={{ flexDirection: "row", height: 80 }}>
          <IconFeather name="calendar" style={{ marginTop: 11.5 }} size={30} />
          <View style={{ marginLeft: 20 }}>
            <Text style={{ color: "#A0A0A0", margin: 0 }}>Data</Text>

            {/* Initial date */}
            {Platform.OS === "android" ? (
              <TouchableOpacity
                style={styles.datePickerContainer}
                onPress={() => setShowDatePicker(true)}
              >
                <Text style={styles.dateText}>{date.toDateString()}</Text>
              </TouchableOpacity>
            ) : (
              <View style={styles.datePickerContainer}>
                <DateTimePicker
                  value={date}
                  mode="date"
                  is24Hour={true}
                  display="default"
                  onChange={onChange}
                />
              </View>
            )}

            {/* Date picker modal for Android */}
            {showDatePicker && Platform.OS === "android" && (
              <DateTimePicker
                value={date}
                mode="date"
                is24Hour={true}
                display="default"
                onChange={onChange}
              />
            )}
          </View>
        </View>
      </View>

      {/* Note section */}
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCF6FB",
    paddingTop: "10%",
    paddingBottom: 80,
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
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#ccc",
    margin: 5,
  },
  selectedButton: {
    borderColor: "#F773ED",
  },
  nonSelectedText: {
    color: "#555",
  },
  selectedText: {
    color: "#F773ED",
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

export default Outcome;
