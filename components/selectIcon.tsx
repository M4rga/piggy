import React, { useRef, useEffect } from "react";
import { Pressable, StyleSheet, Animated, ViewStyle } from "react-native";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";

interface SelectIconProps {
  icon?: string;
  isSelected?: boolean;
  onSelect: () => void;
  addButton?: boolean;
}

const SelectIcon: React.FC<SelectIconProps> = ({
  icon,
  isSelected = false,
  onSelect,
  addButton = false,
}) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const borderColor = isSelected ? "#F773ED" : "#D3D3D3";
  const iconColor = addButton ? "#D3D3D3" : isSelected ? "#F773ED" : "black";

  const [isPressed, setIsPressed] = React.useState(false);

  useEffect(() => {
    Animated.spring(scaleAnim, {
      toValue: isPressed ? 0.98 : 1,
      useNativeDriver: true,
      speed: 300,
    }).start();
  }, [isPressed]);

  const buttonStyle: ViewStyle = {
    ...styles.InnerView,
    borderColor: borderColor,
    borderStyle: addButton ? "dashed" : "solid",
  };

  return (
    <Pressable
      onPress={onSelect}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
    >
      <Animated.View
        style={[
          buttonStyle,
          {
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        {isPressed && <Animated.View style={styles.overlay} />}
        <IconFontAwesome
          style={{ color: iconColor }}
          name={addButton ? "plus" : icon || "question"}
          size={25}
        />
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  InnerView: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 50,
    borderRadius: 100,
    borderWidth: 2,
    marginRight: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: 100,
  },
});

export default SelectIcon;
