import { Text } from "../../components/textFont";
import { View, StyleSheet } from "react-native";
import React from "react";

const Income = () => {
  return (
    <View style={styles.container}>
      <Text>Income</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCF6FB",
  },
});

export default Income;
