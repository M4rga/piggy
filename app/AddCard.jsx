import { View, TouchableOpacity, Text, TextInput, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";
import { StyleSheet, ScrollView } from "react-native";
import Icon2 from "react-native-vector-icons/FontAwesome";
import Card from "../components/card";
import SelectIcon from "../components/selectIcon";
import ColorPoint from "../components/colorPoint";

export default function AddCard() {
  return (
    <ScrollView style={styles.container}>
      <View style={{marginTop: 40}}>
        <Card
          name="Nome"
          num1="€ 430.00"
          num2=",78"
          color="#ECE9EA"
          iconName="credit-card"
        />
      </View>
      <Text style={styles.iconW}>Icon</Text>
      <View style={styles.iconV}>
        <View style={styles.OuterView}>
          <SelectIcon
            icon= "credit-card"
          />
          <SelectIcon
            icon= "money"
          />
          <SelectIcon
            icon= "paypal"
          />
          <SelectIcon
            icon= "smile-o"
          />
        </View>
        <TouchableOpacity>
          <View style={styles.plusIcon}>
              <Icon2
                  style={{color: "#D3D3D3" }}
                  name= "plus"
                  size={25}
              />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.colorV}>
        <Text style={{color: "#A0A0A0" }}>Colore</Text>
        <View style={styles.pointV}>
          <ColorPoint
            backgroundColor= "#A0A0A0"
          />
          <ColorPoint
            backgroundColor= "#D9D9D9"
          />
          <ColorPoint
            backgroundColor= "#2F212F"
          />
          <ColorPoint
            backgroundColor= "#F773ED"
          />
          <ColorPoint
            backgroundColor= "#5272F2"
          />
          <ColorPoint
            backgroundColor= "#AC52F2"
          />
          <ColorPoint
            backgroundColor= "#73F798"
          />
          <ColorPoint
            backgroundColor= "#F77373"
          />
          <ColorPoint
            backgroundColor= "#F7C273"
          />
          <ColorPoint
            backgroundColor= "#F4F773"
          />
          <ColorPoint
            backgroundColor= "#52F2F2"
          />
        </View>
      </View>

      <View style={styles.colorV}>
        <Text style={{color: "#A0A0A0" }}>Nome</Text>
        <TextInput
          style={styles.input}
          placeholder="placeholder"
          keyboardType="alphabetic"
        />
      </View>

      <View style={styles.colorV}>
        <Text style={{color: "#A0A0A0" }}>Note</Text>
        <TextInput
          style={styles.input}
          placeholder="placeholder"
          keyboardType="alphabetic"
        />
      </View>

      <View style={styles.VButton}>
        <TouchableOpacity style={styles.saveButton} onPress={() => alert('Button pressed')}>
          <Text style={styles.buttonText}>Salva</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCF6FB",
  },

  iconV: {
    marginLeft: 10,
    flexDirection: "row",
  },

  iconW: {
    marginTop: 30,
    marginLeft: 10,
    color: "#A0A0A0",
  },

  OuterView: {
    marginTop: 15,
    flexDirection: "row",
  },

  plusIcon: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 50,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#D3D3D3",
    marginRight: 10,
    marginTop: 15,
    borderStyle: "dotted",
  },

  colorV: {
    backgroundColor: "white",
    width: "auto",
    height: "auto",
    marginLeft: 10,
    marginTop: 30,
    marginRight: 10,
    padding: 15,
    borderRadius: 20,
  },

  pointV: {
    flexDirection: "row",
    marginTop: 10,
  },

  input: {
    height: 40,
    margin: 12,
    marginLeft: 0,
    borderBottomWidth: 1,
    padding: 10,
  },

  VButton: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },

  saveButton: {
    backgroundColor: "#F773ED",
    paddingVertical: 15, 
    paddingHorizontal: 40, 
    borderRadius: 100, 
  },

  buttonText: {
    color: "black",
    fontFamily:"Switzer-Semibold",
    fontSize: 16,
  },
});
