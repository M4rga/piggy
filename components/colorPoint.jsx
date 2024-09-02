import { View, TouchableOpacity  } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";
import { StyleSheet, ScrollView } from "react-native";
import Icon2 from "react-native-vector-icons/FontAwesome";

const selectIcon = (props) => {
    const navigation = useNavigation();
  return (

    <TouchableOpacity>
        <View style={[styles.point, {backgroundColor: props.backgroundColor}]}/>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    point: {
        height: 20,
        width: 20,
        marginRight: 9,
        borderRadius: 100,
        borderColor:"white",
        borderWid0th: 2,
        // Proprietà ombra per iOS
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.9,
        shadowRadius: 5,
        // Proprietà ombra per Android
        elevation: 3,
    },
});

export default selectIcon;