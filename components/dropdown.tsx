import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native"; // TouchableOpacity create a button which can be pressed
import { Text } from "./textFont";

const DropdownButton = () => {
  const [isOpen, setIsOpen] = useState(false); // State used to define if the dropdown is active or not

  // Function that changes the state
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <View style={styles.dropdownContainer}>
      <TouchableOpacity style={styles.dropdownButton} onPress={toggleDropdown}>
        <Text style={styles.buttonText}>uscite</Text>
        <Text style={styles.arrow}>{isOpen ? "▲" : "▼"}</Text>
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.dropdownMenu}>
          <TouchableOpacity style={styles.dropdownItem}>
            <Text>uscite</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dropdownItem}>
            <Text>entrate</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownContainer: {
    position: "relative",
    width: "auto",
  },
  dropdownButton: {
    backgroundColor: "#FCF6FB",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttonText: {
    fontSize: 16,
    color: "#A0A0A0",
  },
  arrow: {
    marginLeft: 8,
    fontSize: 16,
    color: "#A0A0A0",
  },
  dropdownMenu: {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 8,
    zIndex: 1000,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  dropdownItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

export default DropdownButton;
