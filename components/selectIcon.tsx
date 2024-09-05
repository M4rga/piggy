import { View, TouchableOpacity, StyleSheet } from "react-native";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";

interface SelectIconProps {
  icon: string;
  isSelected: boolean;
  onSelect: () => void;
}

const SelectIcon: React.FC<SelectIconProps> = (props) => {

  const borderColor = props.isSelected ? '#F773ED' : '#D3D3D3';
  const iconColor = props.isSelected ? '#F773ED' : 'black';

  return (
    <TouchableOpacity onPress={props.onSelect}>
      <View style={[styles.InnerView, {borderColor: borderColor}]}>
        <IconFontAwesome
          style={{ color: iconColor }}
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
    marginRight: 10,
  },
});

export default SelectIcon;
