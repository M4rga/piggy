import { View } from "react-native";
import React from "react";
import { Text, TextInput } from "./customComponents";
import Balance from "./balanceNumber";

const BalanceTextInput = () => {
  return (
    <View>
      <TextInput></TextInput>
      <Balance number={20275.78} size={25} />
    </View>
  );
};

export default BalanceTextInput;
