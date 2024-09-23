import { Text } from "./customComponents";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";

interface CardProps {
  color: string;
  color2: string;
  name: string;
  num1: number | string;
  num2: number | string;
  iconName: string;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <View style={[styles.card, { backgroundColor: props.color }]}>
      <View style={styles.cardView1}>
        <Text style={{ fontSize: 25, color: props.color2 }}>{props.name}</Text>
        <Text
          style={{
            fontSize: 30,
            marginTop: 60,
            marginLeft: 5,
            color: props.color2,
          }}
        >
          {props.num1}
          <Text style={{ fontSize: 17 }}>{props.num2}</Text>
        </Text>
      </View>
      <IconFontAwesome
        style={{ marginTop: 5, color: props.color2 }}
        name={props.iconName}
        size={30}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    height: 170,
    width: "95%",
    marginLeft: "2.5%",
    padding: 15,
    flexDirection: "row",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.7,
    shadowRadius: 5,
    elevation: 10,
  },
  cardView1: {
    flex: 1,
  },
});

export default Card;
