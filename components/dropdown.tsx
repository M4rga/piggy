import React, { useState, useRef, useEffect } from "react";
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
  color: string;
}

const DropdownButton: React.FC<DropdownButtonProps> = ({
  selectedValue,
  onSelect,
  type,
  color,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState(selectedValue);
  const menuRef = useRef(null);

  const loanOption = ["Ogni giorno", "Ogni mese", "Ogni anno"];

  // Funzione per selezionare un valore casuale
  const getOption = () => {
    return loanOption[2];
  };

  // Effetto per impostare il valore iniziale
  useEffect(() => {
    if (type === "income/outcome/loan") {
      setCurrentValue(getOption()); // Imposta un valore casuale all'inizio
    } else if (
      type === "stats" &&
      currentValue !== "uscite" &&
      currentValue !== "entrate"
    ) {
      setCurrentValue("uscite");
    }
  }, [type]);

  const openMenu = () => {
    if (menuRef.current) {
      (menuRef.current as any).open();
    }
  };

  const handleOptionSelect = (option: string) => {
    onSelect(option);
    setCurrentValue(option);
    setIsOpen(false);
  };

  const statsOption = currentValue === "uscite" ? "entrate" : "uscite";

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
          <Pressable style={stylestwo(color).dropdownButton} onPress={openMenu}>
            <Text style={styles.buttonText}>{currentValue}</Text>
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
          {type === "stats" ? (
            <MenuOption onSelect={() => handleOptionSelect(statsOption)}>
              <Text style={styles.menuItemText}>{statsOption}</Text>
            </MenuOption>
          ) : (
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

const stylestwo = (color: string) =>
  StyleSheet.create({
    dropdownButton: {
      backgroundColor: color,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 12,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
  });

export default DropdownButton;
