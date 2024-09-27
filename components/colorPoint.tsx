import { View, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";

interface ColorPointProps {
  backgroundColor: string;
  isSelected: boolean;
  onSelect: () => void;
}

const ColorPoint: React.FC<ColorPointProps> = (props) => {
  const borderColor = props.isSelected ? "#F773ED" : "white";

  return (
    <TouchableOpacity onPress={props.onSelect}>
      <View
        style={[
          styles.point,
          { backgroundColor: props.backgroundColor, borderColor: borderColor },
        ]}
      />
    </TouchableOpacity>
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
  },
});

export default ColorPoint;
