import { View, StyleSheet, Platform, Pressable } from "react-native";
import { Text, TextInput } from "../components/textFont";
import IconFeather from "react-native-vector-icons/Feather";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import React, { useState } from "react";

interface TextInputDateProps {
  type: string;
  icon?: string; // "?" Make it optional
  title?: string;
}

const TextInputDate: React.FC<TextInputDateProps> = ({ type, icon, title }) => {
  const [date, setDate] = useState<Date>(new Date());
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);

  const onChange = (
    event: DateTimePickerEvent,
    selectedDate?: Date | undefined
  ) => {
    if (selectedDate) {
      setDate(selectedDate);
    }
    setShowDatePicker(false);
  };

  // Default icons for note and date if icon prop is not provided
  const defaultIcon = type === "note" ? "message-square" : "calendar";
  const selectedIcon = icon || defaultIcon; // Use user-provided icon or default

  // Default titles for note and date if title prop is not provided
  const defaultTitle = type === "note" ? "Note" : "Data";
  const selectedTitle = title || defaultTitle; // Use user-provided title or default

  return (
    <View>
      {type === "note" ? (
        // Note section
        <View style={styles.sessions}>
          <View style={{ flexDirection: "row", height: 80 }}>
            <IconFeather
              name={selectedIcon} // Use the selected icon
              style={{ marginTop: 11.5 }}
              size={30}
            />
            <View style={{ marginLeft: 20 }}>
              <Text style={{ color: "#A0A0A0", margin: 0 }}>
                {selectedTitle}
              </Text>
              <TextInput
                style={{ marginTop: 6 }}
                placeholder="Inserisci la tua nota qua"
                keyboardType="default"
              />
            </View>
          </View>
        </View>
      ) : (
        // Date section
        <View style={styles.sessions}>
          <View style={{ flexDirection: "row", height: 80 }}>
            <IconFeather
              name={selectedIcon} // Use the selected icon
              style={{ marginTop: 11.5 }}
              size={30}
            />
            <View style={{ marginLeft: 20 }}>
              <Text style={{ color: "#A0A0A0", margin: 0 }}>
                {selectedTitle}
              </Text>
              {/* Initial date */}
              {Platform.OS === "android" ? (
                <Pressable
                  style={styles.datePickerContainer}
                  onPress={() => setShowDatePicker(true)}
                >
                  <Text style={styles.dateText}>{date.toDateString()}</Text>
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
      )}
    </View>
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
    marginTop: 20,
    marginRight: 10,
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
  },
});

export default TextInputDate;
