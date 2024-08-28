import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"; // TouchableOpacity puts together n elements and makes them clickable
import { PieChart } from "react-native-gifted-charts";

const data = [{ value: 20 }, { value: 50 }, { value: 65 }, { value: 90 }]; // Data used in the graph
const data2 = [{ value: 30 }, { value: 40 }, { value: 90 }, { value: 73 }]; // Data used in the graph
const data3 = [{ value: 50 }, { value: 50 }, { value: 30 }, { value: 10 }]; // Data used in the graph

export default function Stats() {
  const [selectedValue, setSelectedValue] = useState("settimana"); // State (hook) that permit to select multiple items - Default value: "settimana"

  // Function to set the selected item active
  const handleSelection = (value) => {
    setSelectedValue(value);
  };

  return (
    <View style={styles.container}>
      <Text style={{ textAlign: "center", fontWeight: "bold" }}>Stats</Text>
      <View>
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
          {selectedValue === "settimana" && (
            <PieChart data={data} donut innerRadius={100} />
          )}
          {selectedValue === "mese" && (
            <PieChart data={data2} donut innerRadius={100} />
          )}
          {selectedValue === "anno" && (
            <PieChart data={data3} donut innerRadius={100} />
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50,
  },
  graphContainer: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 50,
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
    fontWeight: "bold",
  },
  content: {
    marginTop: 20,
    alignItems: "center",
  },
  contentText: {
    fontSize: 16,
    color: "#333",
  },
});
