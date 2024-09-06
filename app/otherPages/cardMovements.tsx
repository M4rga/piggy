import { Text } from "../../components/textFont"; // Importing custom text components
import { FlatList } from "react-native";
import { View, StyleSheet, Image, ScrollView } from "react-native"; // Importing React Native components
import IconFeather from "react-native-vector-icons/Feather";
import StatsCategory from "../../components/categoryLastMovements";
import data from "../../data/data.json";

const cardMovements = () => {

    return (
        <View style={styles.MovesContainer}>
            <Text style={styles.titleLastMoves}>Ultimi movimenti</Text>
            <FlatList
              data={data.movements}
              renderItem={({ item }) => (
                <StatsCategory
                  moves={item.moves}
                  amount={item.amount}
                  date={item.date}
                />
              )}
              keyExtractor={(item, index) => index.toString()}
              scrollEnabled={false}
            />
          </View>
    );
  };

  const styles = StyleSheet.create({

    MovesContainer: {
        padding: 10,
    },
    titleLastMoves: {
        fontSize: 18,
        fontFamily: "Switzer-Semibold",
        marginBottom: 10,
        marginLeft: 10,
    },
});

export default cardMovements