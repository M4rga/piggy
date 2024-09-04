import { useState } from "react";
import React from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native"; // TouchableOpacity puts together n elements and makes them clickable
import { PieChart } from "react-native-gifted-charts";
import StatsCategory from "../../components/statsCategoryLastMovements";
import DropdownButton from "../../components/dropdown";
import { Text } from "../../components/textFont";
import data from "../../data/data.json";

const data1 = [{ value: 20 }, { value: 50 }, { value: 65 }, { value: 90 }]; // Data used in the graph
const data2 = [{ value: 30 }, { value: 40 }, { value: 90 }, { value: 73 }]; // Data used in the graph
const data3 = [{ value: 50 }, { value: 50 }, { value: 30 }, { value: 10 }]; // Data used in the graph

const Stats = () => {
  const [selectedValue, setSelectedValue] = useState<string>("settimana"); // State (hook) that permit to select multiple items - Default value: "settimana"

  // Function to set the selected item active
  const handleSelection = (value: string) => {
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
                selectedValue === "settimana" ? styles.selectedOptionText : {},
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
                selectedValue === "mese" ? styles.selectedOptionText : {},
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
                selectedValue === "anno" ? styles.selectedOptionText : {},
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
            strokeWidth={4}
            strokeColor="white"
            innerRadius={105}
            centerLabelComponent={() => (
              <Text style={{ fontSize: 20 }}>
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
            icon={data.categories[0].icon}
            name={data.categories[0].type}
            circleColor={data.categories[0].circleColor}
            amount="- € 330"
          />
          <StatsCategory
            icon={data.categories[1].icon}
            name={data.categories[1].type}
            circleColor={data.categories[1].circleColor}
            amount="- € 50"
          />
          <StatsCategory
            icon={data.categories[3].icon}
            name={data.categories[3].type}
            circleColor={data.categories[3].circleColor}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    margin: 0,
    backgroundColor: "#FCF6FB",
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
    paddingBottom: 10,
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

export default Stats;
