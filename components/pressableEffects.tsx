import React, { useRef, useEffect } from "react";
import { Animated, ViewStyle, StyleSheet } from "react-native";

export const usePressableEffect = (scaleValue: number = 0.98) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const [isPressed, setIsPressed] = React.useState(false);

  useEffect(() => {
    Animated.spring(scaleAnim, {
      toValue: isPressed ? scaleValue : 1,
      useNativeDriver: true,
      speed: 300,
    }).start();
  }, [isPressed, scaleValue]);

  const pressableProps = {
    onPressIn: () => setIsPressed(true),
    onPressOut: () => setIsPressed(false),
  };

  const animatedStyle = {
    transform: [{ scale: scaleAnim }],
  };

  return { isPressed, pressableProps, animatedStyle };
};

export const pressableStyles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
});

export const applyPressableStyle = (baseStyle: ViewStyle): ViewStyle => ({
  ...baseStyle,
  overflow: "hidden",
});

// import {
//   usePressableEffect,
//   pressableStyles,
//   applyPressableStyle,
// } from "../../../components/pressableEffects";

// const { isPressed, pressableProps, animatedStyle } = usePressableEffect();

{/* <Pressable {...pressableProps}>
  <Animated.View
    style={[applyPressableStyle(styles.textContainer), animatedStyle]}
  >
    QUELLO CHE VOGLIOOOOOOO
    {isPressed && <Animated.View style={pressableStyles.overlay} />}
  </Animated.View>
</Pressable>; */}
