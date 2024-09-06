import { Text } from "../../components/textFont";
import {
  View,
  ScrollView,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import StatsCategory from "../../components/categoryLastMovements";

import data from "../../data/data.json";

const receiptImage = require("../../assets/private/receipt-guy.png");

const ReceiptPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Elettrodomestici");

  const categories = [
    "Elettrodomestici",
    "Abbigliamento",
    "Tecnologia",
    "Supermercato",
  ];
  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        {/* Top view with receipt guy image */}
        <View style={styles.topView}>
          <Image source={receiptImage} style={styles.receipGuy} />
        </View>

        {/* Main content container */}
        <View style={styles.mainContainer}>
          <Text style={styles.titleLastMoves}>Categoria</Text>
          <View style={styles.selectionContainer}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.scrollContainer}
            >
              {categories.map((category, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.button,
                    selectedCategory === category && styles.selectedButton,
                  ]}
                  onPress={() => setSelectedCategory(category)}
                >
                  <Text
                    style={[
                      styles.nonSelectedText,
                      ...(selectedCategory === category
                        ? [styles.selectedText]
                        : []),
                    ]}
                  >
                    {category}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
          {/* Latest movements section */}
          <Text style={styles.titleLastMoves}>Ultimi scontrini</Text>
          <View style={styles.MovesContainer}>
            <FlatList
              data={data.receipts}
              renderItem={({ item }) => (
                <StatsCategory name={item.name} date={item.date} icon="image" />
              )}
              keyExtractor={(item, index) => index.toString()}
              scrollEnabled={false}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCF6FB",
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: "flex-start",
  },
  topView: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 2,
  },
  receipGuy: {
    zIndex: 10,
    flex: 1,
    width: 230,
    height: 205,
  },
  text: {
    fontSize: 23,
    fontFamily: "Switzer-Semibold",
  },
  titleLastMoves: {
    fontSize: 18,
    fontFamily: "Switzer-Semibold",
    margin: 20,
  },
  MovesContainer: {
    padding: 10,
  },
  selectionContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#ccc",
    margin: 5,
  },
  selectedButton: {
    borderColor: "pink",
  },
  nonSelectedText: {
    color: "#555",
  },
  selectedText: {
    color: "pink",
  },
  scrollContainer: {
    flexDirection: "row",
  },
});

export default ReceiptPage;
