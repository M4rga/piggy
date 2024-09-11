import { Text, TextInput } from "../../components/textFont";
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
  Platform,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import IconFeather from "react-native-vector-icons/Feather";

const images = {
  one: require("../../assets/private/receipt-guy.png"),
};

const AddReceipt = () => {
  const [selectedCategory, setSelectedCategory] = useState("Conto Corrente");
  const [date, setDate] = useState<Date>(new Date());
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);

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

  type Category = any;
  const categories: Category[] = [
    "Elettrodomestisci",
    "Abbigliamento",
    "Tecnologia",
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
        <View style={styles.sessions}>
          <View style={{ flexDirection: "row", height: 80 }}>
            <IconFeather name="calendar" style={{ marginTop: 9.5 }} size={30} />
            <View style={{ marginLeft: 20 }}>
              <Text style={{ color: "#A0A0A0", margin: 0 }}>Data</Text>

              {/* Initial date */}
              {Platform.OS === "android" ? (
                <Pressable
                  style={styles.datePickerContainer}
                  onPress={() => setShowDatePicker(true)}
                >
                  <Text style={styles.dateText}>
                    {date.toLocaleDateString("it-IT")}
                  </Text>
                </Pressable>
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
        <View style={styles.saveView}>
          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Salva</Text>
          </TouchableOpacity>
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
  sessions: {
    backgroundColor: "#FCF6FB",
    width: "auto",
    height: 80,
    marginTop: 20,
    padding: 15,
    borderRadius: 20,
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
    marginLeft: 8,
  },
  saveButton: {
    backgroundColor: "#F773ED",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 10,
    alignItems: "center",
    width: 140,
  },
  saveButtonText: {
    color: "black",
    fontSize: 14,
  },
  saveView: {
    marginTop: 20,
    alignItems: "center",
  },
});

export default AddReceipt;
