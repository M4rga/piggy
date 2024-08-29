import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default CustomTabBar = ({ state, descriptors, navigation }) => {
  const numberOfTabs = state.routes.length;

  return (
    <View style={styles.tabBar}>
      {/* Render the first two tab buttons */}
      {state.routes.slice(0, 2).map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
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
          <TouchableOpacity
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
          </TouchableOpacity>
        );
      })}

      {/* Custom Add Button */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => alert("AddScreen")} // Customize navigation action
      >
        <Icon name="plus" size={28} />
      </TouchableOpacity>

      {/* Render the remaining tab buttons, except the last two */}
      {state.routes.slice(2, numberOfTabs - 1).map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index + 2;

        const onPress = () => {
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
          <TouchableOpacity
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
          </TouchableOpacity>
        );
      })}

      {/* Render the last tab button */}
      {state.routes.slice(numberOfTabs - 1).map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index + (numberOfTabs - 1);

        const onPress = () => {
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
          <TouchableOpacity
            key={index + numberOfTabs}
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
          </TouchableOpacity>
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
    flex: 1, // Ensures buttons are evenly spaced
  },
  addButton: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
