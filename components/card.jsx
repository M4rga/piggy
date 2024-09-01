import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";
import { StyleSheet, ScrollView } from "react-native";
import Icon2 from "react-native-vector-icons/FontAwesome";

const Card = (props) => {
  return (
    
    <View style={[styles.card, { backgroundColor: props.color }]}>
      <View style={styles.cardView1}>
        <Text style={{ fontSize: 25, color: props.color2 }}>{props.name}</Text>
        <Text
          style={{
            fontSize: 30,
            marginTop: 75,
            marginLeft: 5,
            fontWeight: "bold",
            color: props.color2,
          }}
        >
          {props.num1}
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>{props.num2}</Text>
        </Text>
      </View>
      <Icon2
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
    height: 200,
    width: "95%",
    marginLeft: "2.5%",
    padding: 15,
    flexDirection: "row",
    marginBottom: 20,
    // Proprietà ombra per iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.7,
    shadowRadius: 5,
    // Proprietà ombra per Android
    elevation: 10,
  },
  cardView1: {
    felx: 1,
    width: "88%",
    height: "100%",
    //   backgroundColor: "red"
  },
});

export default Card;
