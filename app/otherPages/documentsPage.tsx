import { Text } from "../../components/textFont";
import { View, ScrollView, Image, StyleSheet } from "react-native";
import React from "react";

import data from "../../data/data.json";

const documentsImage = require("../../assets/private/documents.png");

const DocumentsPage = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        {/* Top view with receipt guy image */}
        <View style={styles.topView}>
          <Image source={documentsImage} style={styles.documents} />
        </View>

        {/* Main content container */}
        <View style={styles.mainContainer}>
          <Text style={styles.titleLastMoves}>Documents</Text>
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
  documents: {
    zIndex: 10,
    flex: 1,
    width: 230,
    height: 189,
    marginBottom: -25,
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
});

export default DocumentsPage;
