import { View, TouchableOpacity  } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";
import { StyleSheet, ScrollView } from "react-native";
import Icon2 from "react-native-vector-icons/FontAwesome";

const selectIcon = (props) => {
    const navigation = useNavigation();
  return (

    <TouchableOpacity>
        <View style={styles.InnerView}>
            <Icon2
                style={{color: "black" }}
                name= {props.icon}
                size={25}
            />
        </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    InnerView: {
        justifyContent:"center",
        alignItems:"center",
        height: 50,
        width: 50,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: "#D3D3D3",
        marginRight: 10,
    },
});

export default selectIcon;

