import { Text, TextInput } from "../../components/customComponents";
import { useState } from "react";
import { View, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import { StyleSheet, ScrollView, Platform } from "react-native";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import SelectIcon from "../../components/selectIcon";
import ColorPoint from "../../components/colorPoint";
import TextInputDate from "../../components/textInputDate";

const AddCard = () => {
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
    >
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
              isSelected={selectedColor === "#A0A0A0"}
              onSelect={() => setSelectedColor("#A0A0A0")}
            />
            <ColorPoint
              backgroundColor="#D9D9D9"
              isSelected={selectedColor === "#D9D9D9"}
              onSelect={() => setSelectedColor("#D9D9D9")}
            />
            <ColorPoint
              backgroundColor="#2F212F"
              isSelected={selectedColor === "#2F212F"}
              onSelect={() => setSelectedColor("#2F212F")}
            />
            <ColorPoint
              backgroundColor="#F773ED"
              isSelected={selectedColor === "#F773ED"}
              onSelect={() => setSelectedColor("#F773ED")}
            />
            <ColorPoint
              backgroundColor="#5272F2"
              isSelected={selectedColor === "#5272F2"}
              onSelect={() => setSelectedColor("#5272F2")}
            />
            <ColorPoint
              backgroundColor="#AC52F2"
              isSelected={selectedColor === "#AC52F2"}
              onSelect={() => setSelectedColor("#AC52F2")}
            />
            <ColorPoint
              backgroundColor="#73F798"
              isSelected={selectedColor === "#73F798"}
              onSelect={() => setSelectedColor("#73F798")}
            />
            <ColorPoint
              backgroundColor="#F77373"
              isSelected={selectedColor === "#F77373"}
              onSelect={() => setSelectedColor("#F77373")}
            />
            <ColorPoint
              backgroundColor="#F7C273"
              isSelected={selectedColor === "#F7C273"}
              onSelect={() => setSelectedColor("#F7C273")}
            />
            <ColorPoint
              backgroundColor="#F4F773"
              isSelected={selectedColor === "#F4F773"}
              onSelect={() => setSelectedColor("#F4F773")}
            />
            <ColorPoint
              backgroundColor="#52F2F2"
              isSelected={selectedColor === "#52F2F2"}
              onSelect={() => setSelectedColor("#52F2F2")}
            />
          </View>
        </View>

        {/* Note section */}
        <TextInputDate type="note" icon="message-square" />

        <View style={styles.VButton}>
          <TouchableOpacity
            style={styles.saveButton}
            onPress={() => alert("Button pressed")}
          >
            <Text style={styles.buttonText}>Salva</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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
