import React, { useState } from "react";
import { View, StyleSheet, Platform, Pressable, Modal } from "react-native";
import { Text, TextInput } from "./customComponents";
import IconFeather from "react-native-vector-icons/Feather";
import DateTimePicker from "@react-native-community/datetimepicker";

interface TextInputDateProps {
  type: string;
  icon?: string;
  title?: string;
}

const TextInputDate: React.FC<TextInputDateProps> = ({ type, icon, title }) => {
  const [date, setDate] = useState<Date>(new Date());
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);

  const onChange = (event: any, selectedDate?: Date | undefined) => {
    if (selectedDate) {
      setDate(selectedDate);
    }
    setShowDatePicker(false);
  };

  const showPicker = () => {
    setShowDatePicker(true);
  };

  // Default icons and titles
  const defaultIcon = type === "note" ? "message-square" : "calendar";
  const selectedIcon = icon || defaultIcon;
  const defaultTitle = type === "note" ? "Note" : "Data";
  const selectedTitle = title || defaultTitle;

  return (
    <View>
      {type === "note" ? (
        // Note section
        <View style={styles.sessions}>
          <View style={{ flexDirection: "row", height: 80 }}>
            <IconFeather
              name={selectedIcon}
              style={{ marginTop: 11.5 }}
              size={30}
            />
            <View style={{ marginLeft: 20 }}>
              <Text style={{ color: "#A0A0A0", margin: 0 }}>
                {selectedTitle}
              </Text>
              <TextInput style={{ marginTop: 6 }} keyboardType="default">
                Inserisci la tua nota qua
              </TextInput>
            </View>
          </View>
        </View>
      ) : (
        // Date section
        <View style={styles.sessions}>
          <View style={{ flexDirection: "row", height: 80 }}>
            <IconFeather
              name={selectedIcon}
              style={{ marginTop: 11.5 }}
              size={30}
            />
            <View style={{ marginLeft: 20 }}>
              <Text style={{ color: "#A0A0A0", margin: 0 }}>
                {selectedTitle}
              </Text>

              {/* Pressable to show the DatePicker */}
              <Pressable
                style={styles.datePickerContainer}
                onPress={showPicker}
              >
                <Text style={styles.dateText}>{date.toLocaleDateString()}</Text>
              </Pressable>

              {/* Modal for iOS DateTimePicker */}
              {showDatePicker && Platform.OS === "ios" && (
                <Modal // Modal allows to display a "popup" above the page
                  transparent={true}
                  animationType="slide"
                  visible={showDatePicker}
                >
                  <View style={styles.modalBackground}>
                    <View style={styles.modalContainer}>
                      <DateTimePicker
                        value={date}
                        mode="date"
                        onChange={onChange}
                      />
                      <Pressable onPress={() => setShowDatePicker(false)}>
                        <Text style={styles.closeButton}>Done</Text>
                      </Pressable>
                    </View>
                  </View>
                </Modal>
              )}

              {/* Date picker for Android */}
              {showDatePicker && Platform.OS === "android" && (
                <DateTimePicker value={date} mode="date" onChange={onChange} />
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
  },
  dateText: {
    fontSize: 16,
    color: "#555",
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  closeButton: {
    marginTop: 10,
    fontSize: 18,
    color: "#007AFF",
  },
});

export default TextInputDate;
