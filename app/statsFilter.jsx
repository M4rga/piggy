import { Text } from "../components/textFont";
import React, { useState } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import DateTimePicker from "@react-native-community/datetimepicker";
import Icon2 from "react-native-vector-icons/FontAwesome";

import data from "../data/data.json";

const images = {
  apple: require("../assets/stats/apple.png"),
  house: require("../assets/stats/house.png"),
  pill: require("../assets/stats/pill.png"),
  plane: require("../assets/stats/plane.png"),
  shopping: require("../assets/stats/shopping.png"),
  train: require("../assets/stats/train.png"),
  headphones: require("../assets/stats/headphones.png"),
  car: require("../assets/stats/car.png"),
  plate: require("../assets/stats/plate.png"),
  ticket: require("../assets/stats/ticket.png"),
};

export default function StatsFilter() {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false); // Stato per controllare la visibilità del DatePicker
  const [showEndDatePicker, setShowEndDatePicker] = useState(false); // Stato per controllare la visibilità del DatePicker per la data di fine

  const onChange = (event, selectedDate) => {
    if (selectedDate !== undefined) {
      setDate(selectedDate);
    }
    setShowDatePicker(false); // Nascondi il DatePicker dopo aver selezionato la data
  };

  const onEndDateChange = (event, selectedDate) => {
    if (selectedDate !== undefined) {
      setDate(selectedDate);
    }
    setShowEndDatePicker(false); // Nascondi il DatePicker dopo aver selezionato la data
  };

  return (
    <View>
      {/* Categories */}
      <View style={styles.container}>
        <Text style={styles.title}>Categoria</Text>
        {/* Flatlisst works like a for cicle */}
        <FlatList
          data={data.categories} // Data where to pick the items information
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <View style={styles.categoryItem}>
                <Image
                  source={images[item.icon]}
                  style={styles.categoryItemImage}
                  resizeMode="contain" // Contain is used to mantain proportions of the images
                />
              </View>
              <Text style={styles.nome}>{item.type}</Text>
            </View>
          )}
          keyExtractor={(item, index) => item.type + index.toString()}
          numColumns={5} // Number of columns
          columnWrapperStyle={styles.columnWrapper}
          contentContainerStyle={styles.flatListContainer}
        />
      </View>

      {/* Wallets */}
      <View style={styles.container}>
        <Text style={styles.title}>Portafogli</Text>
        <FlatList
          data={data.wallet}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <View style={styles.walletItem}>
                <Icon2 name={item.icon} style={styles.walletItemIcon} />
                <Text style={styles.walletItemText}>{item.category}</Text>
              </View>
            </View>
          )}
          keyExtractor={(item, index) => item.type + index.toString()}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapper}
          contentContainerStyle={styles.flatListContainer}
        />
      </View>

      {/* Date */}
      <View style={styles.container}>
        <Text style={styles.title}>Data</Text>
        <View style={styles.dateContainer}>
          {/* Initial date */}
          {Platform.OS === "android" ? (
            <TouchableOpacity
              style={styles.datePickerContainer}
              onPress={() => setShowDatePicker(true)}
            >
              <Icon name={"calendar"} style={styles.datePickerIcon} />
              <Text style={styles.dateText}>{date.toDateString()}</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.datePickerContainer}>
              <Icon name={"calendar"} style={styles.datePickerIcon} />
              <DateTimePicker
                value={date}
                mode="date"
                is24Hour={true}
                display="default"
                onChange={onChange}
                style={styles.datePicker}
              />
            </View>
          )}
          {showDatePicker && Platform.OS === "android" && (
            <DateTimePicker
              value={date}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={onChange}
              style={styles.datePicker}
            />
          )}
          {/* End date */}
          {Platform.OS === "android" ? (
            <TouchableOpacity
              style={styles.datePickerContainer}
              onPress={() => setShowEndDatePicker(true)}
            >
              <Icon name={"calendar"} style={styles.datePickerIcon} />
              <Text style={styles.dateText}>{date.toDateString()}</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.datePickerContainer}>
              <Icon name={"calendar"} style={styles.datePickerIcon} />
              <DateTimePicker
                value={date}
                mode="date"
                is24Hour={true}
                display="default"
                onChange={onEndDateChange}
                style={styles.datePicker}
              />
            </View>
          )}
          {showEndDatePicker && Platform.OS === "android" && (
            <DateTimePicker
              value={date}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={onEndDateChange}
              style={styles.datePicker}
            />
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 20,
  },
  flatListContainer: {
    paddingHorizontal: 8,
  },
  columnWrapper: {
    justifyContent: "space-between",
  },
  itemContainer: {
    alignItems: "center",
    justifyContent: "center",
    margin: 4,
  },
  categoryItem: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: "hidden",
    borderColor: "grey",
    borderWidth: 0.5,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  categoryItemImage: {
    width: 30,
    height: 30,
  },
  walletItem: {
    width: 100,
    height: 50,
    borderRadius: 15,
    borderColor: "grey",
    borderWidth: 0.5,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: "center",
  },
  walletItemIcon: {
    fontSize: 20,
    marginRight: 10,
  },
  walletItemText: {
    fontSize: 9,
    textAlign: "left",
    flex: 1,
    flexShrink: 1,
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  datePickerContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "lightgrey",
    padding: 5,
    borderRadius: 5,
  },
  datePickerIcon: {
    fontSize: 24,
    color: "black",
    marginRight: 5,
  },
  datePicker: {
    width: 100,
    backgroundColor: "lightgrey",
    borderRadius: 5,
  },
  nome: {
    fontSize: 10,
    textAlign: "center",
    marginTop: 4,
  },
});
