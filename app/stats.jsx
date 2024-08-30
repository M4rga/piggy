// ------------FONT---------------
import {Text, TextInput} from "../components/textFont";
import {useState, useEffect} from "react";
import * as Font from "expo-font";
// -------------------------
import React from "react";
import {View, StyleSheet, TouchableOpacity, ScrollView} from "react-native"; // TouchableOpacity puts together n elements and makes them clickable
import {PieChart} from "react-native-gifted-charts";
import StatsCategory from "../components/statsCategory";
import DropdownButton from "../components/dropdown";
import data from "../data/data.json";

const data1 = [{value: 20}, {value: 50}, {value: 65}, {value: 90}]; // Data used in the graph
const data2 = [{value: 30}, {value: 40}, {value: 90}, {value: 73}]; // Data used in the graph
const data3 = [{value: 50}, {value: 50}, {value: 30}, {value: 10}]; // Data used in the graph

export default function Stats() {
  const [selectedValue, setSelectedValue] = useState("settimana"); // State (hook) that permit to select multiple items - Default value: "settimana"
  const [selectOption, setSelectedOptions] = useState("uscite");
  // ------------FONT---------------
  const [fontsLoaded, setFontsLoaded] = useState(false); // Correct useState import
  const loadFonts = () => {
    return Font.loadAsync({
      "Switzer-Variable": require("../assets/font/Switzer-Variable.ttf"),
      "Switzer-Bold": require("../assets/font/Switzer-Bold.otf"),
      "Switzer-Semibold": require("../assets/font/Switzer-Semibold.otf"),
      "Switzer-Thin": require("../assets/font/Switzer-Thin.otf"),
      "Switzer-Italic": require("../assets/font/Switzer-Italic.otf"),
    });
  };

  useEffect(() => {
    loadFonts().then(() => setFontsLoaded(true));
  }, []);

  if (!fontsLoaded) {
    return null; // Or show a loading indicator
  }
  // -------------------------

  // Function to set the selected item active
  const handleSelection = (value) => {
    setSelectedValue(value);
  };

  const value = 50;

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Orizzontal selector */}
        <View style={styles.horizontalPicker}>
          <TouchableOpacity
            style={[
              styles.option,
              selectedValue === "settimana" && styles.selectedOption, //If selectedValue is equals to "settimana" then adds another style to the previous
            ]}
            onPress={() => handleSelection("settimana")}
          >
            <Text
              style={[
                styles.optionText,
                selectedValue === "settimana" && styles.selectedOptionText,
              ]}
            >
              Settimana
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.option,
              selectedValue === "mese" && styles.selectedOption,
            ]}
            onPress={() => handleSelection("mese")}
          >
            <Text
              style={[
                styles.optionText,
                selectedValue === "mese" && styles.selectedOptionText,
              ]}
            >
              Mese
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.option,
              selectedValue === "anno" && styles.selectedOption,
            ]}
            onPress={() => handleSelection("anno")}
          >
            <Text
              style={[
                styles.optionText,
                selectedValue === "anno" && styles.selectedOptionText,
              ]}
            >
              Anno
            </Text>
          </TouchableOpacity>
        </View>

        {/* Page content that changes based on the selected item */}
        <View style={[styles.content, styles.graphContainer]}>
          <View style={styles.pickerContainer}>
            <DropdownButton />
          </View>

          <PieChart
            data={
              selectedValue === "settimana"
                ? data1
                : selectedValue === "mese"
                ? data2
                : data3
            }
            donut
            innerRadius={100}
            centerLabelComponent={() => (
              <Text style={{fontSize: 20}}>
                € <Text style={styles.valueText}>{value}</Text>
              </Text>
            )}
          />
        </View>

        {/* Date text */}
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>13 maggio - 19 maggio</Text>
        </View>

        {/* Categories */}
        <View>
          <StatsCategory
            icon={data.categroies[0].icon}
            name={data.categroies[0].type}
            circleColor={data.categroies[0].circleColor}
          />
          <StatsCategory
            icon={data.categroies[1].icon}
            name={data.categroies[1].type}
            circleColor={data.categroies[1].circleColor}
          />
          <StatsCategory
            icon={data.categroies[3].icon}
            name={data.categroies[3].type}
            circleColor={data.categroies[3].circleColor}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    margin: 0,
  },
  graphContainer: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 80,
    margin: 20,
  },
  horizontalPicker: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  option: {
    flex: 1,
    alignItems: "center",
  },
  selectedOption: {
    borderBottomWidth: 2,
    borderBottomColor: "black",
  },
  optionText: {
    fontSize: 18,
    color: "#333",
  },
  selectedOptionText: {
    color: "black",
    fontFamily: "Switzer-Semibold",
  },
  content: {
    marginTop: 20,
    alignItems: "center",
  },
  contentText: {
    fontSize: 16,
    color: "#333",
  },
  pickerContainer: {
    position: "absolute",
    top: 20,
    left: 20,
    width: 128,
    height: 100,
    zIndex: 10,
  },
  valueText: {
    fontSize: 30,
  },
  dateContainer: {
    margin: 20,
    marginBottom: 0,
  },
  dateText: {
    color: "grey",
  },
});
