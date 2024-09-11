import React, { useRef, useEffect } from "react";
import { Animated, PanResponder, StyleSheet, View } from "react-native";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import { Text } from "./textFont";

interface CardProps {
  color: string;
  color2: string;
  name: string;
  num1: number | string;
  num2: number | string;
  iconName: string;
  onPanMove?: (translateX: Animated.Value) => void; // Funzione per gestire il pan
  setActiveCard?: (cardId: number) => void; // Funzione per impostare la carta attiva
  cardId?: number; // ID unico della carta
}

const Card: React.FC<CardProps> = (props) => {
  const positionX = useRef(new Animated.Value(0)).current;
  const MAX_TRANSLATE_X = -150;
  const EXTRA_DRAG_LIMIT = -200;

  // Inizializza la logica per aggiornare la View nell'assegnazione di onPanMove
  useEffect(() => {
    if (props.onPanMove) {
      props.onPanMove(positionX);
    }
    if (props.setActiveCard && props.cardId !== undefined) {
      props.setActiveCard(props.cardId);
    }
  }, [positionX, props]);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gestureState) => {
        if (gestureState.dx < 0 && gestureState.dx >= EXTRA_DRAG_LIMIT) {
          Animated.event(
            [
              null,
              { dx: positionX },
            ],
            { useNativeDriver: false }
          )(evt, gestureState);
        }
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx < MAX_TRANSLATE_X) {
          Animated.spring(positionX, {
            toValue: MAX_TRANSLATE_X,
            useNativeDriver: true,
          }).start();
        } else {
          Animated.spring(positionX, {
            toValue: 0,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  return (
    <Animated.View
      style={[
        styles.card,
        { backgroundColor: props.color },
        { transform: [{ translateX: positionX }] },
      ]}
      {...panResponder.panHandlers}
    >
      <View style={styles.cardView1}>
        <Text style={{ fontSize: 25, color: props.color2 }}>{props.name}</Text>
        <Text
          style={{
            fontSize: 30,
            marginTop: 60,
            marginLeft: 5,
            color: props.color2,
          }}
        >
          {props.num1}
          <Text style={{ fontSize: 17 }}>{props.num2}</Text>
        </Text>
      </View>
      <IconFontAwesome
        style={{ marginTop: 5, color: props.color2 }}
        name={props.iconName}
        size={30}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    height: 170,
    width: "95%",
    marginLeft: "2.5%",
    padding: 15,
    flexDirection: "row",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.7,
    shadowRadius: 5,
    elevation: 10,
  },
  cardView1: {
    flex: 1,
  },
});

export default Card;
