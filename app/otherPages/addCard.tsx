import { Text, TextInput } from "../../components/textFont";
import { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { StyleSheet, ScrollView } from "react-native";
import IconFeather from "react-native-vector-icons/Feather";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import SelectIcon from "../../components/selectIcon";
import ColorPoint from "../../components/colorPoint";

const AddCard = () => {

  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  return (
    <ScrollView style={styles.container}>
      <View style={{ marginTop: 40 }}>
        <View style={styles.card}>
          <View style={styles.cardView1}>
            <TextInput style={{ fontSize: 25 }}>Name</TextInput>
            <View
              style={{
                marginTop: 85,
                marginLeft: 5,
                flexDirection: "row",
              }}
            >
              <View>
                <TextInput style={{ fontSize: 30 }}>0</TextInput>
              </View>
              <View style={{ flexDirection: "row", paddingBottom: 4.6 }}>
                <Text style={{ fontSize: 17, textAlignVertical: "bottom" }}>
                  ,
                </Text>
                <TextInput
                  style={{ fontSize: 17, textAlignVertical: "bottom" }}
                >
                  0
                </TextInput>
              </View>
            </View>
          </View>
          <IconFontAwesome
            style={{ marginTop: 5 }}
            name="credit-card"
            size={30}
          />
        </View>
      </View>
      <Text style={styles.iconW}>Icon</Text>
      <View style={styles.iconV}>
        <View style={styles.OuterView}>
        <SelectIcon
            icon="credit-card"
            isSelected={selectedIcon === "credit-card"}
            onSelect={() => setSelectedIcon("credit-card")}
          />
          <SelectIcon
            icon="money"
            isSelected={selectedIcon === "money"}
            onSelect={() => setSelectedIcon("money")}
          />
          <SelectIcon
            icon="paypal"
            isSelected={selectedIcon === "paypal"}
            onSelect={() => setSelectedIcon("paypal")}
          />
          <SelectIcon
            icon="smile-o"
            isSelected={selectedIcon === "smile-o"}
            onSelect={() => setSelectedIcon("smile-o")}
          />
        </View>
        <TouchableOpacity>
          <View style={styles.plusIcon}>
            <IconFontAwesome
              style={{ color: "#D3D3D3" }}
              name="plus"
              size={25}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.colorV}>
        <Text style={{ color: "#A0A0A0" }}>Colore</Text>
        <View style={styles.pointV}>
          <ColorPoint 
            backgroundColor="#A0A0A0"
            isSelected={selectedIcon === "#A0A0A0"}
            onSelect={() => setSelectedIcon("#A0A0A0")}
          />
          <ColorPoint
            backgroundColor="#D9D9D9"
            isSelected={selectedIcon === "#D9D9D9"}
            onSelect={() => setSelectedIcon("#D9D9D9")}
          />
          <ColorPoint
            backgroundColor="#2F212F"
            isSelected={selectedIcon === "#2F212F"}
            onSelect={() => setSelectedIcon("#2F212F")}
          />
          <ColorPoint
            backgroundColor="#F773ED"
            isSelected={selectedIcon === "#F773ED"}
            onSelect={() => setSelectedIcon("#F773ED")}
          />
          <ColorPoint
            backgroundColor="#5272F2"
            isSelected={selectedIcon === "#5272F2"}
            onSelect={() => setSelectedIcon("#5272F2")}
          />
          <ColorPoint
            backgroundColor="#AC52F2"
            isSelected={selectedIcon === "#AC52F2"}
            onSelect={() => setSelectedIcon("#AC52F2")}
          />
          <ColorPoint
            backgroundColor="#73F798"
            isSelected={selectedIcon === "#73F798"}
            onSelect={() => setSelectedIcon("#73F798")}
          />
          <ColorPoint
            backgroundColor="#F77373"
            isSelected={selectedIcon === "#F77373"}
            onSelect={() => setSelectedIcon("#F77373")}
          />
          <ColorPoint
            backgroundColor="#F7C273"
            isSelected={selectedIcon === "#F7C273"}
            onSelect={() => setSelectedIcon("#F7C273")}
          />
          <ColorPoint
            backgroundColor="#F4F773"
            isSelected={selectedIcon === "#F4F773"}
            onSelect={() => setSelectedIcon("#F4F773")}
          />
          <ColorPoint
            backgroundColor="#52F2F2"
            isSelected={selectedIcon === "#52F2F2"}
            onSelect={() => setSelectedIcon("#52F2F2")}
          />
        </View>
      </View>

      <View style={styles.colorV}>
        <View style={{ flexDirection: "row", height: 80 }}>
          <IconFeather
            name="message-square"
            style={{ marginTop: 11.5 }}
            size={30}
          />
          <View style={{ marginLeft: 20 }}>
            <Text style={{ color: "#A0A0A0", margin: 0 }}>Note</Text>
            <TextInput
              style={{ marginTop: 6 }}
              placeholder="Inserisci la tua nota qua"
              keyboardType="default"
            />
          </View>
        </View>
      </View>

      <View style={styles.VButton}>
        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => alert("Button pressed")}
        >
          <Text style={styles.buttonText}>Salva</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ECE9EA",
    borderRadius: 20,
    height: 200,
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
    height: 80,
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
    fontFamily: "Switzer-Semibold",
    fontSize: 16,
  },
});

export default AddCard;
