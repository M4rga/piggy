import React from "react";
import {
  Text as RNText,
  TextInput as RNTextInput,
  TextStyle,
  TextInputProps,
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

export { Text, TextInput };
