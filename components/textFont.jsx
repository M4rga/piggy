import React from "react";
import { Text as RNText, TextInput as RNTextInput } from "react-native";

const defaultStyle = { fontFamily: "Switzer-Variable" };

const Text = (props) => {
  const { style, ...rest } = props;
  return <RNText style={[defaultStyle, style]} {...rest} />;
};

const TextInput = (props) => {
  const { style, ...rest } = props;
  return <RNTextInput style={[defaultStyle, style]} {...rest} />;
};

export { Text, TextInput };
