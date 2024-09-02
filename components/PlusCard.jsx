import { View, TouchableOpacity  } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";
import { StyleSheet, ScrollView } from "react-native";
import Icon2 from "react-native-vector-icons/FontAwesome";

const PlusCard = () => {
    const navigation = useNavigation();
  return (

    <TouchableOpacity onPress={() => navigation.navigate("AddCard")}>
        <View style={styles.card}>
          <View style={styles.InnerView}>
              <Icon
                  style={{ marginTop: 5, color: "#A0A0A0" }}
                  name= "plus"
                  size={60}
              />
          </View>
        </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"white",
    borderRadius: 20,
    height: 200,
    width: "95%",
    marginLeft: "2.5%",
    padding: 15,
    flexDirection: "row",
    marginBottom: 20,
    borderWidth: 3,
    borderColor: "#A0A0A0",
    borderStyle: "dotted"
  },
  InnerView: {
    justifyContent:"center",
    alignItems:"center",
    height:"45%",
    width:"23%",
    borderRadius: 100,
    borderWidth: 3,
    borderColor: "#A0A0A0",
  },
});

export default PlusCard;