import { Text } from "../../components/textFont";
import { View, ScrollView, Image, StyleSheet, FlatList } from "react-native";
import React from "react";
import StatsCategory from "../../components/categoryLastMovements";

import data from "../../data/data.json";

const passwordKeeperImage = require("../../assets/login/fifthImage.png");

const PasswordKeeperPage = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        {/* Top view with receipt guy image */}
        <View style={styles.topView}>
          <Image source={passwordKeeperImage} style={styles.passwordKeeper} />
        </View>

        {/* Main content container */}
        <View style={styles.mainContainer}>
          <Text style={styles.titleLastMoves}>Account</Text>

          {/* Account section */}
          <View style={styles.MovesContainer}>
            <FlatList
              data={data.accounts}
              renderItem={({ item }) => (
                <StatsCategory name={item.name} date={item.date} />
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
  passwordKeeper: {
    zIndex: 10,
    flex: 1,
    width: 230,
    height: 189,
    marginBottom: -35,
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
  button: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#ccc",
    margin: 5,
  },
});

export default PasswordKeeperPage;
