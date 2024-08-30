import { Text } from "../components/textFont";
import React, { useState } from "react";
import { ScrollView, View, StyleSheet, FlatList, Image } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import DateTimePicker from "@react-native-community/datetimepicker";

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

  const onChange = (event, selectedDate) => {
    if (selectedDate !== undefined) {
      setDate(selectedDate);
    }
  };

  return (
    <ScrollView>
      {/* Categories */}
      <View style={styles.container}>
        <Text style={styles.title}>Categoria</Text>
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
          keyExtractor={(item) => item.type}
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
                <Icon name={item.icon} style={styles.walletItemIcon} />
                <Text style={styles.walletItemText}>{item.category}</Text>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.type}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapper}
          contentContainerStyle={styles.flatListContainer}
        />
      </View>

      {/* Date */}
      <View style={styles.container}>
        <Text style={styles.title}>Data</Text>
        <View style={styles.dateContainer}>
          <DateTimePicker
            value={date}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={onChange}
            style={styles.datePicker}
          />
          <DateTimePicker
            value={date}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={onChange}
            style={styles.datePicker}
          />
        </View>
      </View>
    </ScrollView>
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
    justifyContent: "space-between",
    marginLeft: -30,
  },
  datePicker: {
    width: 150,
  },
  nome: {
    fontSize: 10,
    textAlign: "center",
    marginTop: 4,
  },
});
