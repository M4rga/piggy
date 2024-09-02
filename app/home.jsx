import React, {useState, useRef, useEffect} from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
  Animated,
} from "react-native";
import {slides} from "../data/slides.js"; // Import the slides data

const {width, height} = Dimensions.get("window");

export default function HomeScreen({navigation}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesRef = useRef(null);

  // Initialize animated values for each dot and transition
  const animatedValues = useRef(
    slides.map(() => new Animated.Value(12))
  ).current;
  const translateX = useRef(new Animated.Value(0)).current;

  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      Animated.sequence([
        // Animate translation to simulate moving right
        Animated.timing(translateX, {
          toValue: -width, // Move left by the width of the screen
          duration: 300,
          useNativeDriver: true,
        }),
        // After the translation, scroll to the next index and reset the translation
        Animated.timing(translateX, {
          toValue: 0, // Reset the translation
          duration: 0, // No delay
          useNativeDriver: true,
        }),
      ]).start(() => {
        slidesRef.current.scrollToIndex({index: currentIndex + 1});
      });
    } else {
      navigation.navigate("Next");
    }
  };

  useEffect(() => {
    animatedValues.forEach((animValue, index) => {
      Animated.timing(animValue, {
        toValue: currentIndex === index ? 24 : 12, // 24 when active, 12 when inactive
        duration: 300,
        useNativeDriver: false, // Width can't use native driver
      }).start();
    });
  }, [currentIndex]);

  return (
    <View style={styles.container}>
      <Animated.View style={{transform: [{translateX}]}}>
        <FlatList
          data={slides}
          renderItem={({item}) => (
            <View style={styles.slide}>
              <Image
                source={item.image}
                style={styles.image}
                resizeMode="contain"
              />
            </View>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </Animated.View>
      <View style={styles.content}>
        <View style={styles.indicators}>
          {slides.map((_, index) => (
            <Animated.View
              key={index}
              style={[
                styles.dot,
                {
                  width: animatedValues[index], // Animate the width of each dot
                  backgroundColor: currentIndex === index ? "#000" : "#e0e0e0", // Change color when active
                },
              ]}
            />
          ))}
        </View>
        <Text style={styles.title}>{slides[currentIndex].title}</Text>
        <Text style={styles.description}>
          {slides[currentIndex].description}
        </Text>
        <View style={styles.allButtons}>
          <TouchableOpacity style={styles.button} onPress={handleNext}>
            <Text style={styles.buttonText}>Avanti</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.skipButton}>
            <Text style={styles.skipText}>Salta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCF6FB",
  },
  slide: {
    width: width,
    height: height * 0.5, // Adjust height for slide image area
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "80%",
    height: "80%",
  },
  indicators: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
    marginBottom: 20,
  },
  dot: {
    height: 8,
    borderRadius: 4,
    marginHorizontal: 2,
    backgroundColor: "#e0e0e0", // Default color for inactive dots
  },
  content: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    height: 270,
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
    textAlign: "left",
  },
  description: {
    fontSize: 14,
    textAlign: "left",
    color: "#555",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#FF69B4", // Use the pink color for the button
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 10,
    alignItems: "center",
    alignSelf: "center",
    width: 120,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  skipText: {
    color: "#555",
    alignSelf: "center",
    textDecorationLine: "underline",
  },
  allButtons: {
    position: "absolute",
    alignSelf: "center",
    bottom: 10,
  },
});
