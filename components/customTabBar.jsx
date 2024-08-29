import React, { useState } from "react";
import { Text } from "./textFont";
import { View, StyleSheet, Pressable } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default CustomTabBar = ({ state, descriptors, navigation }) => {
  const numberOfTabs = state.routes.length;
  const [isVisible, setIsVisible] = useState(false);

  const handlePress = () => {
    setIsVisible(!isVisible);
  };

  return (
    <View style={styles.tabBar}>
      {/* Render the first two tab buttons */}
      {state.routes.slice(0, 2).map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          if (isVisible) {
            setIsVisible(!isVisible);
          }
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <Pressable
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabButton}
          >
            {options.tabBarIcon &&
              options.tabBarIcon({
                color: isFocused ? "#F773ED" : "black",
                size: 22,
              })}
          </Pressable>
        );
      })}

      {/* Custom Add Button */}
      <View style={styles.addButton}>
        <Pressable onPress={handlePress}>
          <Icon name="plus" size={28} />
        </Pressable>
        {isVisible && (
          <Pressable style={styles.plusView} onPress={handlePress}>
            <Icon
              name="arrow-down-right"
              size={22}
              onPress={() => {
                setIsVisible(!isVisible);
                navigation.navigate("Income");
              }}
            />
            <Icon
              name="arrow-up-right"
              size={22}
              onPress={() => {
                setIsVisible(!isVisible);
                navigation.navigate("Outcome");
              }}
            />
            <Icon
              name="repeat"
              size={22}
              onPress={() => {
                setIsVisible(!isVisible);
                navigation.navigate("Loan");
              }}
            />
            <Icon
              name="file-minus"
              size={22}
              onPress={() => {
                setIsVisible(!isVisible);
                navigation.navigate("Recipt");
              }}
            />
            <FontAwesome
              name="caret-down"
              size={27}
              style={styles.arrowDown}
              onPress={handlePress}
            />
          </Pressable>
        )}
      </View>

      {/* Render the remaining tab buttons, except the last four */}
      {state.routes.slice(2, 4).map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index + 2;

        const onPress = () => {
          if (isVisible) {
            setIsVisible(!isVisible);
          }
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <Pressable
            key={index + 2}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabButton}
          >
            {options.tabBarIcon &&
              options.tabBarIcon({
                color: isFocused ? "#F773ED" : "black",
                size: 22,
              })}
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    height: 70,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    paddingBottom: 20,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  tabButton: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  addButton: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    position: "relative",
  },
  plusView: {
    opacity: 1,
    position: "absolute",
    paddingHorizontal: 30,
    top: -62,
    width: 250,
    height: 50,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 0.8,
    borderRadius: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  arrowDown: {
    position: "absolute",
    color: "black",
    transform: [{ translateX: 116.5 }],
    bottom: -18,
  },
});
