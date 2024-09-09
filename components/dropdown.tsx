import React, { useState, useRef } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  renderers,
} from "react-native-popup-menu";
import IconFeather from "react-native-vector-icons/Feather";
import { Text } from "./textFont";

const { Popover } = renderers;

interface DropdownButtonProps {
  selectedValue: string;
  onSelect: (value: string) => void;
  type: string;
}

const DropdownButton: React.FC<DropdownButtonProps> = ({
  selectedValue,
  onSelect,
  type,
}) => {
  const [isOpen, setIsOpen] = useState(false); // State used to handle opening and closing of the dropdown menu
  const menuRef = useRef(null);

  // Using useRender because it allow you to not re-render the whole page
  const openMenu = () => {
    if (menuRef.current) {
      (menuRef.current as any).open();
    }
  };

  const handleOptionSelect = (option: string) => {
    onSelect(option);
    setIsOpen(false);
  };

  // Used for filtering the remaning option
  const statsOption = selectedValue === "uscite" ? "entrate" : "uscite";
  const loanOption = ["Ogni giorno", "Ogni mese", "Ogni anno"];
  const remainingOption = type === "stats" ? statsOption : loanOption;

  return (
    <View style={styles.dropdownContainer}>
      <Menu
        ref={menuRef}
        renderer={Popover}
        rendererProps={{
          placement: "bottom",
          openAnimationDuration: 200,
          closeAnimationDuration: 200,
        }}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
      >
        <MenuTrigger>
          <Pressable style={styles.dropdownButton} onPress={openMenu}>
            <Text style={styles.buttonText}>{selectedValue}</Text>
            <IconFeather
              style={styles.arrow}
              name={isOpen ? "chevron-up" : "chevron-down"}
            />
          </Pressable>
        </MenuTrigger>

        <MenuOptions
          customStyles={{
            optionsContainer: styles.optionsContainer,
            optionWrapper: styles.optionWrapper,
          }}
        >
          {/* Se il tipo è 'stats', mostra un'opzione singola */}
          {type === "stats" ? (
            <MenuOption onSelect={() => handleOptionSelect(statsOption)}>
              <Text style={styles.menuItemText}>{statsOption}</Text>
            </MenuOption>
          ) : (
            /* Se il tipo è diverso, mostra l'elenco di opzioni */
            loanOption.map((option) => (
              <MenuOption
                key={option}
                onSelect={() => handleOptionSelect(option)}
              >
                <Text style={styles.menuItemText}>{option}</Text>
              </MenuOption>
            ))
          )}
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
    width: 125,
  },
  optionWrapper: {
    padding: 10,
  },
});

export default DropdownButton;
