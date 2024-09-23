import React, { useState } from "react";
import {
  Text as RNText,
  TextInput as RNTextInput,
  TextStyle,
  TextInputProps,
  StyleSheet,
  Pressable,
  GestureResponderEvent,
} from "react-native";

// Definisci uno stile di base per il font
const defaultStyle: TextStyle = { fontFamily: "Switzer-Variable" };

// Definisci i tipi per le proprietà del componente Text
interface TextProps {
  style?: TextStyle | TextStyle[];
  children?: React.ReactNode;
}

// Definisci il componente Text con tipi espliciti
const Text: React.FC<TextProps> = (props) => {
  const { style, children, ...rest } = props;
  return (
    <RNText style={[defaultStyle, style]} {...rest}>
      {children}
    </RNText>
  );
};

// Estendi i props di TextInput per includere TextInputProps da React Native
interface CustomTextInputProps extends TextInputProps {
  style?: TextStyle | TextStyle[];
}

// Definisci il componente TextInput con tipi espliciti
const TextInput: React.FC<CustomTextInputProps> = (props) => {
  const { style, ...rest } = props;
  return <RNTextInput style={[defaultStyle, style]} {...rest} />;
};

// Definisci i tipi per le proprietà del componente Button
interface ButtonProps {
  title: string;
  onPress?: (event: GestureResponderEvent) => void; // Rendi onPress opzionale
  style?: TextStyle | TextStyle[];
}

// Definisci il componente Button con tipi espliciti
const Button: React.FC<ButtonProps> = (props) => {
  const { title, onPress, style, ...rest } = props;
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Pressable
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      onPress={onPress}
      style={[styles.button, style, isPressed && styles.buttonPressed]}
      {...rest}
    >
      <RNText style={styles.buttonText}>{title}</RNText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "red", // Colore di sfondo del pulsante
    borderRadius: 5,
    padding: 10,
    alignItems: "center", // Centra il testo all'interno del pulsante
    transform: [{ scale: 1 }],
  },
  buttonPressed: {
    transform: [{ scale: 0.98 }], // Rimpicciolisce leggermente il pulsante
  },
  buttonText: {
    color: "white", // Colore del testo del pulsante
    fontSize: 16,
  },
});

export { Text, TextInput, Button };
