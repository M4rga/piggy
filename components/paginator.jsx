import {View, Text, StyleSheet} from "react-native";
import React from "react";

export default Paginator = ({data}) => {
  return (
    <View style={{flexDirection: "row", height: 64}}>
      {data.map((_, i) => {
        return <View style={[styles.dot, {width: 10}]} key={i.toString()} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: "#A0A0A0",
    marginHorizontal: 8,
  },
});
