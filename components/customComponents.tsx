import React, { useState, useRef, useEffect } from "react";
import {
  Text as RNText,
  TextInput as RNTextInput,
  TextStyle,
  TextInputProps,
  StyleSheet,
  Pressable,
  GestureResponderEvent,
  View,
  Animated,
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
  onPress?: (event: GestureResponderEvent) => void;
  style?: TextStyle | TextStyle[];
  textStyle?: TextStyle;
  ombra?: boolean; // Nuovo attributo
}

// Definisci il componente Button con tipi espliciti
const Button: React.FC<ButtonProps> = (props) => {
  const { title, onPress, style, textStyle, ombra = true, ...rest } = props;
  const [isPressed, setIsPressed] = useState(false);
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.spring(scaleAnim, {
      toValue: isPressed ? 0.98 : 1,
      useNativeDriver: true,
      speed: 300, // Aumenta o diminuisci questo valore per cambiare la velocità
    }).start();
  }, [isPressed]);

  return (
    <Pressable
      style={{ borderRadius: 100, width: 135, height: 47 }}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      onPress={onPress}
      {...rest}
    >
      <Animated.View
        style={[styles.button, style, { transform: [{ scale: scaleAnim }] }]}
      >
        {isPressed && ombra && <View style={styles.overlay} />}
        <RNText style={[styles.buttonText, textStyle]}>{title}</RNText>
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#F773ED", // Colore di sfondo del pulsante
    borderRadius: 100,
    width: 135,
    height: 47,
    justifyContent: "center",
    padding: 10,
    alignItems: "center", // Centra il testo all'interno del pulsante
    transform: [{ scale: 1 }],
  },
  buttonPressed: {
    transform: [{ scale: 0.98 }], // Rimpicciolisce leggermente il pulsante
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.1)", // Sovrapposizione nera semi-trasparente
    borderRadius: 100,
    width: 135,
    height: 47,
  },
  buttonText: {
    color: "black", // Colore del testo del pulsante
    fontFamily: "Switzer-Variable",
    fontSize: 15,
  },
});

export { Text, TextInput, Button };
