import React, { useState, useRef, useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
  Animated,
} from "react-native";
import { slides } from "../../data/slides"; // Import the slides data
import { Text } from "../../components/textFont";

const { width, height } = Dimensions.get("window");

interface Slide {
  id: string;
  title: string;
  description: string;
  image: any; // you can replace 'any' with a specific type based on your image imports
}

interface WelcomeProps {
  navigation: {
    navigate: (screen: string) => void;
  };
}

const Welcome: React.FC<WelcomeProps> = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const slidesRef = useRef<FlatList<Slide>>(null);

  const animatedValues = useRef<Animated.Value[]>(
    slides.map(() => new Animated.Value(12))
  ).current;

  const translateX = useRef(new Animated.Value(0)).current;

  const viewableItemsChanged = useRef(({ viewableItems }: any) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({
    viewAreaCoveragePercentThreshold: 50,
  }).current;

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      Animated.sequence([
        Animated.timing(translateX, {
          toValue: -width,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(translateX, {
          toValue: 0,
          duration: 0,
          useNativeDriver: true,
        }),
      ]).start(() => {
        slidesRef.current?.scrollToIndex({ index: currentIndex + 1 });
      });
    } else {
      navigation.navigate("Next");
    }
  };

  const handleSkip = () => {
    const lastIndex = slides.length - 1;
    setCurrentIndex(lastIndex);
    slidesRef.current?.scrollToIndex({ index: lastIndex });
  };

  useEffect(() => {
    animatedValues.forEach((animValue, index) => {
      Animated.timing(animValue, {
        toValue: currentIndex === index ? 24 : 12,
        duration: 300,
        useNativeDriver: false,
      }).start();
    });
  }, [currentIndex]);

  return (
    <View style={styles.container}>
      <Animated.View style={{ transform: [{ translateX }] }}>
        <FlatList
          data={slides}
          renderItem={({ item }) => (
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
                  width: animatedValues[index],
                  backgroundColor: currentIndex === index ? "#000" : "#e0e0e0",
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
          {currentIndex === slides.length - 1 ? (
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Next")}
            >
              <Text style={styles.buttonText}>Iniziamo</Text>
            </TouchableOpacity>
          ) : (
            <>
              <TouchableOpacity style={styles.button} onPress={handleNext}>
                <Text style={styles.buttonText}>Avanti</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
                <Text style={styles.skipText}>Salta</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCF6FB",
  },
  slide: {
    marginTop: 40,
    width: width,
    height: height * 0.5,
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
    backgroundColor: "#e0e0e0",
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
    fontFamily: "Switzer-Semibold",
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
    backgroundColor: "#F773ED",
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
  skipButton: {
    marginTop: 10,
  },
  skipText: {
    color: "#A0A0A0",
    alignSelf: "center",
    textDecorationLine: "underline",
  },
  allButtons: {
    position: "absolute",
    alignSelf: "center",
    bottom: 10,
  },
});

export default Welcome;
