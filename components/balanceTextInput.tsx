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

  const handleTextChange = (input: string) => {
    const sanitizedInput = input.replace(/,/g, "."); // Rimuove tutte le virgole
    // const dotCount = (sanitizedInput.match(/\./g) || []).length;
    // if (dotCount > 1) {
    //   const lastDotIndex = sanitizedInput.lastIndexOf(".");
    //   const newText =
    //     sanitizedInput.substring(0, lastDotIndex) +
    //     "A" +
    //     sanitizedInput.substring(lastDotIndex + 1);
    //   setText(newText); // Sostituisce l'ultimo punto con "A"
    //   setNumber(undefined);
    //   return;
    // }
    setText(sanitizedInput);
    const parsedNumber = parseFloat(sanitizedInput);
    if (!isNaN(parsedNumber)) {
      setNumber(parsedNumber);
    } else {
      setNumber(undefined);
    }
  };

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          opacity: isFocused ? 1 : 0,
          zIndex: 100,
        }}
      >
        <Text style={{ fontSize: size, marginTop: 1.7 }}>€ </Text>
        <TextInput
          style={{ fontSize: size, color: "black" }}
          onChangeText={handleTextChange}
          value={text}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </View>
      <View
        style={{
          position: "absolute",
          marginTop: 1.5,
          opacity: isFocused ? 0 : 1,
        }}
      >
        <Balance number={number ?? 0} size={size} deciColor={deciColor} />
      </View>
    </View>
  );
};

export default BalanceTextInput;
