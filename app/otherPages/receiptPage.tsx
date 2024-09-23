import { Text } from "../../components/customComponents";
import {
  View,
  ScrollView,
  Image,
  StyleSheet,
  FlatList,
  Pressable,
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
          <Text style={styles.titleCategories}>Categoria</Text>
          <View style={styles.selectionContainer}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.scrollContainer}
            >
              {categories.map((category, index) => (
                <Pressable
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
                </Pressable>
              ))}
            </ScrollView>
          </View>
          {/* Latest movements section */}
          <Text style={styles.titleCategories}>Ultimi scontrini</Text>
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
  titleCategories: {
    fontSize: 18,
    fontFamily: "Switzer-Semibold",
    margin: 20,
    marginBottom: 0,
  },
  MovesContainer: {
    padding: 15,
  },
  selectionContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  button: {
    borderColor: "#A0A0A0",
    borderWidth: 2,
    padding: 12,
    paddingTop: 9,
    borderRadius: 15,
    marginBottom: 10,
    alignItems: "center",
    width: "auto",
    marginRight: 10,
  },
  selectedButton: {
    borderColor: "#F773ED",
    borderWidth: 2,
    padding: 12,
    paddingTop: 9,
    borderRadius: 15,
    marginBottom: 10,
    alignItems: "center",
    width: "auto",
    marginRight: 10,
  },
  nonSelectedText: {
    color: "#A0A0A0",
    fontSize: 11,
  },
  selectedText: {
    color: "#F773ED",
    fontSize: 11,
  },
  scrollContainer: {
    flexDirection: "row",
    padding: 5,
  },
});

export default ReceiptPage;
