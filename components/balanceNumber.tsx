import { View } from "react-native";
import { Text } from "./customComponents";
import React from "react";

interface BalanceProps {
  number: number;
  size?: number;
  deciColor?: string;
}

const Balance: React.FC<BalanceProps> = ({
  number,
  size = 16,
  deciColor = "#A0A0A0",
}) => {
  const formatNumber = (num: number) => {
    const parts = num.toFixed(2).split(".");
    const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return [integerPart, parts[1]];
  };

  const [integerPart, decimalPart] = formatNumber(number);

  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Text style={{ fontSize: size }}>€ </Text>
      <Text style={{ fontSize: size }}>
        {integerPart}
        <Text style={{ fontSize: size }}>,</Text>
        <Text style={{ color: deciColor, fontSize: Math.max(size - 8) }}>
          {decimalPart}
        </Text>
      </Text>
    </View>
  );
};

export default Balance;
