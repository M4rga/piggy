import { View } from "react-native";
import { Text, TextInput } from "./customComponents";
import Balance from "./balanceNumber";
import React, { useState, useEffect } from "react";

interface BalanceTextInputProps {
  initialNumber: number;
  size?: number;
  deciColor?: string;
}

const BalanceTextInput: React.FC<BalanceTextInputProps> = ({
  initialNumber = 0,
  size = 16,
  deciColor = "#A0A0A0",
}) => {
  const [text, setText] = useState(initialNumber.toString());
  const [number, setNumber] = useState<number | undefined>(initialNumber);
  const [isFocused, setIsFocused] = useState(false);
  const [textFont, setTextFont] = useState("Switzer-Variable");
  const [inputWidth, setInputWidth] = useState(0);

  // State used to handle selection
  const [selection, setSelection] = useState<
    { start: number; end: number } | undefined
  >(undefined);

  const handleTextChange = (input: string) => {
    const sanitizedInput = input.replace(/,/g, ".").replace(/(\..*)\./g, "$1");

    setText(sanitizedInput);

    const parsedNumber = parseFloat(sanitizedInput);
    if (!isNaN(parsedNumber)) {
      setNumber(parsedNumber);
    } else {
      setNumber(undefined);
    }
  };

  const measureBalanceWidth = (number: number) => {
    const formattedNumber = number.toLocaleString("it-IT", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    return formattedNumber.length * (size * 0.6);
  };

  useEffect(() => {
    setInputWidth(measureBalanceWidth(number ?? 0));
  }, [number, size]);

  const handleFocus = () => {
    setIsFocused(true);
    setSelection({ start: 0, end: text.length }); // Updates selection state for selecting all the text
    setTextFont("Switzer-Variable1");
  };

  const handleBlur = () => {
    setIsFocused(false);
    setSelection(undefined); // Reset the selection when field is not focused
  };

  return (
    <View
      style={{ flexDirection: "row", alignItems: "center", width: inputWidth }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          opacity: isFocused ? 1 : 0,
          zIndex: 100,
        }}
      >
        <Text style={{ fontSize: size }}>€ </Text>
        <TextInput
          style={{
            fontSize: size,
            color: "black",
            fontFamily: textFont,
            width: inputWidth,
          }}
          keyboardType="numeric"
          onChangeText={handleTextChange}
          value={text}
          onFocus={handleFocus}
          onBlur={handleBlur}
          selection={selection}
          onSelectionChange={
            ({ nativeEvent: { selection } }) => setSelection(selection) // Update the selection based on user input
          }
        />
      </View>
      <View
        style={{
          position: "absolute",
          opacity: isFocused ? 0 : 1,
          width: inputWidth,
        }}
      >
        <Balance number={number ?? 0} size={size} deciColor={deciColor} />
      </View>
    </View>
  );
};

export default BalanceTextInput;
