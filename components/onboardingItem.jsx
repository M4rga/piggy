import {View, Text, StyleSheet, Image, useWindowDimensions} from "react-native";
import React from "react";

export default OnboardingItem = ({item}) => {
  const {width} = useWindowDimensions();

  return (
    <View style={[styles.container, {width}]}>
      <Image
        source={item.image}
        style={[styles.image, {width, resizeMode: "contain"}]}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    flex: 0.3,
    position: "absolute",
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: 200,
    bottom: 0,
    borderTopLeftRadius: 10,
  },
  image: {
    flex: 0.7,
    justifyContent: "center",
  },
  title: {
    fontWeight: "800",
    fontSize: 28,
    marginBottom: 10,
    color: "#000000",
    textAlign: "center",
  },
  description: {
    fontWeight: "300",
    color: "#000000",
    textAlign: "center",
    paddingHorizontal: 64,
  },
});
