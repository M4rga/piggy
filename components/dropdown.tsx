import React, { useState, useRef } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { Menu, MenuOptions, MenuOption, MenuTrigger, renderers } from "react-native-popup-menu";
import IconFeather from "react-native-vector-icons/Feather";
import { Text } from "./textFont";

const { Popover } = renderers;

const DropdownButton = () => {
  const [isOpen, setIsOpen] = useState(false); // State used to handle the opening and closing of the menu
  const menuRef = useRef(null);

  const openMenu = () => {
    if (menuRef.current) {
      (menuRef.current as any).open(); // Asserzione di tipo
    }
  };

  return (
    <View style={styles.dropdownContainer}>
      <Menu
        ref={menuRef}
        renderer={Popover}
        rendererProps={{ placement: 'bottom', openAnimationDuration: 200, closeAnimationDuration: 200 }}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
      >
        <MenuTrigger>
          <Pressable style={styles.dropdownButton} onPress={openMenu}>
            <Text style={styles.buttonText}>uscite</Text>
            <IconFeather style={styles.arrow} name={isOpen ? "chevron-up" : "chevron-down"}/>
          </Pressable>
        </MenuTrigger>

        <MenuOptions customStyles={{
          optionsContainer: styles.optionsContainer,
          optionWrapper: styles.optionWrapper,
        }}>
          <MenuOption onSelect={() => console.log("Uscite selezionato")}>
            <Text style={styles.menuItemText}>uscite</Text>
          </MenuOption>
          <MenuOption onSelect={() => console.log("Entrate selezionato")}>
            <Text style={styles.menuItemText}>entrate</Text>
          </MenuOption>
        </MenuOptions>
      </Menu>
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
  menuItemText: {
    fontSize: 16,
    color: "#333",
  },
  optionsContainer: {
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 8,
    elevation: 5,
    width: 125
  },
  optionWrapper: {
    padding: 10,
  },
});

export default DropdownButton;
