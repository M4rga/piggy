import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
} from "react-native";
import { slides } from "../../data/slides"; // Import the slides data
import { Text } from "../../components/customComponents";

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

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      slidesRef.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      navigation.navigate("Next");
    }
  };

  const handleSkip = () => {
    const lastIndex = slides.length - 1;
    setCurrentIndex(lastIndex);
    slidesRef.current?.scrollToIndex({ index: lastIndex });
  };

  const viewableItemsChanged = useRef(({ viewableItems }: any) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({
    viewAreaCoveragePercentThreshold: 50,
  }).current;

  return (
    <View style={styles.container}>
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
      <View style={styles.content}>
        <View style={styles.indicators}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                {
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
    position: "absolute",
    top: 10,
    left: 0,
    right: 0,
    zIndex: 2,
  },
  dot: {
    height: 8,
    width: 8,
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
    // justifyContent: "center",
    // alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontFamily: "Switzer-Semibold",
    color: "#000",
    marginTop: 50,
    textAlign: "left",
  },
  description: {
    fontSize: 14,
    textAlign: "left",
    color: "#555",
    marginTop: 15,
  },
  button: {
    backgroundColor: "#F773ED",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 10,
    alignItems: "center",
    width: 140,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Switzer-Semibold",
  },
  skipButton: {
    marginTop: 10,
  },
  skipText: {
    color: "#A0A0A0",
    textDecorationLine: "underline",
  },
  allButtons: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    alignItems: "center",
  },
});

export default Welcome;
