import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";

interface SelectIconProps {
  icon: string;
}

const SelectIcon: React.FC<SelectIconProps> = (props) => {
  return (
    <TouchableOpacity>
      <View style={styles.InnerView}>
        <IconFontAwesome
          style={{ color: "black" }}
          name={props.icon}
          size={25}
        />
      </View>
    </TouchableOpacity>
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
    borderColor: "#D3D3D3",
    marginRight: 10,
  },
});

export default SelectIcon;
