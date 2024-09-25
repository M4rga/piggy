import { View } from "react-native";
import { Text, TextInput } from "./customComponents";
import Balance from "./balanceNumber";
import React, { useState } from "react";

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

  const handleTextChange = (input: string) => {
    // Rimuove tutte le virgole e mantiene solo il primo punto
    const sanitizedInput = input.replace(/,/g, "").replace(/\.(?=.*\.)/g, "");

    setText(sanitizedInput);

    const parsedNumber = parseFloat(sanitizedInput);
    if (!isNaN(parsedNumber)) {
      setNumber(parsedNumber);
    } else {
      setNumber(undefined);
    }
    setTextFont("Switzer-Variable1");
  };

  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
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
          }}
          onChangeText={handleTextChange}
          value={text}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </View>
      <View
        style={{
          position: "absolute",
          opacity: isFocused ? 0 : 1,
        }}
      >
        <Balance number={number ?? 0} size={size} deciColor={deciColor} />
      </View>
    </View>
  );
};

export default BalanceTextInput;
