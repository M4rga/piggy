import { View, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";

interface ColorPointProps {
  backgroundColor: string;
}

const ColorPoint: React.FC<ColorPointProps> = (props) => {
  return (
    <TouchableOpacity>
      <View
        style={[styles.point, { backgroundColor: props.backgroundColor }]}
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
    borderColor: "white",
    borderWidth: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 5,
    elevation: 3,
  },
});

export default ColorPoint;
