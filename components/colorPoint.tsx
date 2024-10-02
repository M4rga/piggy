import React, { useRef, useEffect } from "react";
import { View, Pressable, StyleSheet, Animated } from "react-native";

interface ColorPointProps {
  backgroundColor: string;
  isSelected: boolean;
  onSelect: () => void;
}

const ColorPoint: React.FC<ColorPointProps> = ({
  backgroundColor,
  isSelected,
  onSelect,
}) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const [isPressed, setIsPressed] = React.useState(false);

  const borderColor = isSelected ? "#F773ED" : "white";

  useEffect(() => {
    Animated.spring(scaleAnim, {
      toValue: isPressed ? 0.98 : 1,
      useNativeDriver: true,
      speed: 300,
    }).start();
  }, [isPressed]);

  return (
    <Pressable
      onPress={onSelect}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
    >
      <Animated.View
        style={[
          styles.point,
          {
            backgroundColor: backgroundColor,
            borderColor: borderColor,
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        {isPressed && <View style={styles.overlay} />}
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  point: {
    height: 20,
    width: 20,
    marginRight: 9,
    borderRadius: 100,
    borderWidth: 2,
    elevation: 3,
    overflow: "hidden",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
});

export default ColorPoint;
