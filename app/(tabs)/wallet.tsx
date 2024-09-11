import React, { useRef, useState } from "react";
import { Animated, StyleSheet, View, ScrollView } from "react-native";
import Card from "../../components/card";
import PlusCard from "../../components/plusCard";
import { Text } from "../../components/textFont";

type AnimatedValueMap = {
  [key: number]: { height: Animated.Value; width: Animated.Value };
};

const Wallet = () => {
  // Mappa degli Animated.Values per ogni carta
  const cardAnimatedValues = useRef<AnimatedValueMap>({
    1: { height: new Animated.Value(0), width: new Animated.Value(0) },
    2: { height: new Animated.Value(0), width: new Animated.Value(0) },
    3: { height: new Animated.Value(0), width: new Animated.Value(0) },
    4: { height: new Animated.Value(0), width: new Animated.Value(0) },
  }).current;

  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handlePanMove = (cardId: number, translateX: Animated.Value) => {
    translateX.addListener(({ value }) => {
      const newSize = Math.max(-value, 0); // Non permette valori negativi per altezza e larghezza

      if (activeCard === cardId) {
        Animated.timing(cardAnimatedValues[cardId].height, {
          toValue: newSize,
          duration: 0, // Aggiorna immediatamente
          useNativeDriver: false,
        }).start();

        Animated.timing(cardAnimatedValues[cardId].width, {
          toValue: newSize + 100, // Aumenta la larghezza basata su newSize
          duration: 0, // Aggiorna immediatamente
          useNativeDriver: false,
        }).start();
      }
    });
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#FCF6FB" }}>
      <View style={styles.balance}>
        <Text style={styles.balanceText}>Bilancio Totale</Text>
        <Text style={{ fontSize: 34 }}>
          € 20.275
          <Text style={{ color: "#A0A0A0", fontSize: 20 }}>,78</Text>
        </Text>
      </View>

      <View style={styles.cardContainer}>
        <Card
          name="Conto Corrente"
          num1="€ 6.579"
          num2=",78"
          color="#ECE9EA"
          iconName="credit-card"
          color2=""
          onPanMove={(translateX) => handlePanMove(1, translateX)} // Passa la funzione handlePanMove con ID carta 1
          setActiveCard={setActiveCard}
          cardId={1}
        />
        {/* View che si espande proporzionalmente al trascinamento della carta */}
        <Animated.View
          style={[
            styles.expandedView,
            {
              height: cardAnimatedValues[1].height,
              width: cardAnimatedValues[1].width,
            },
          ]}
        />
      </View>

      <View style={styles.cardContainer}>
        <Card
          name="Risparmi"
          num1="€ 834"
          num2=",00"
          color="#2F212F"
          color2="white"
          iconName="money"
          onPanMove={(translateX) => handlePanMove(2, translateX)} // Passa la funzione handlePanMove con ID carta 2
          setActiveCard={setActiveCard}
          cardId={2}
        />
        {/* View che si espande proporzionalmente al trascinamento della carta */}
        <Animated.View
          style={[
            styles.expandedView,
            {
              height: cardAnimatedValues[2].height,
              width: cardAnimatedValues[2].width,
            },
          ]}
        />
      </View>

      <View style={styles.cardContainer}>
        <Card
          name="Pay Pal"
          num1="€ 62"
          num2=",00"
          color="#5272F2"
          color2="white"
          iconName="paypal"
          onPanMove={(translateX) => handlePanMove(3, translateX)} // Passa la funzione handlePanMove con ID carta 3
          setActiveCard={setActiveCard}
          cardId={3}
        />
        {/* View che si espande proporzionalmente al trascinamento della carta */}
        <Animated.View
          style={[
            styles.expandedView,
            {
              height: cardAnimatedValues[3].height,
              width: cardAnimatedValues[3].width,
            },
          ]}
        />
      </View>

      <View style={styles.cardContainer}>
        <Card
          name="Fondo di risparmio"
          num1="€ 12.800"
          num2=",00"
          color="#F773ED"
          color2="white"
          iconName="smile-o"
          onPanMove={(translateX) => handlePanMove(4, translateX)} // Passa la funzione handlePanMove con ID carta 4
          setActiveCard={setActiveCard}
          cardId={4}
        />
        {/* View che si espande proporzionalmente al trascinamento della carta */}
        <Animated.View
          style={[
            styles.expandedView,
            {
              height: cardAnimatedValues[4].height,
              width: cardAnimatedValues[4].width,
            },
          ]}
        />
      </View>

      <PlusCard />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  balance: {
    paddingTop: "10%",
    paddingLeft: "5%",
    marginBottom: 40,
  },
  balanceText: {
    color: "#A0A0A0",
    fontSize: 20,
  },
  expandedView: {
    backgroundColor: "red", // Colore della View che si espande
    width: 0, // Larghezza iniziale
  },
  cardContainer: {
    flexDirection: "row",
    alignItems: "center", // Allinea verticalmente le carte e la View espandibile
    marginBottom: 20, // Spazio tra le righe di carte
  },
});

export default Wallet;
