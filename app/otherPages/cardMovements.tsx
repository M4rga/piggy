import { Text } from "../../components/textFont"; // Importing custom text components
import { FlatList } from "react-native";
import { View, StyleSheet, ScrollView } from "react-native"; // Importing React Native components
import StatsCategory from "../../components/categoryLastMovements";
import data from "../../data/data.json";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";

const cardMovements = () => {

    return (
        <ScrollView>
        <View style={{ marginTop: 40 }}>
            <View style={styles.card}>
                <View style={styles.cardView1}>
                    <Text style={{ fontSize: 25 }}>Conto corrente</Text>
                    <View
                        style={{
                            marginTop: 85,
                            marginLeft: 5,
                            flexDirection: "row",
                        }}
                    >
                        <View>
                            <Text style={{ fontSize: 30 }}>6.579</Text>
                        </View>
                        <View style={{ flexDirection: "row", paddingBottom: 4.6 }}>
                            <Text style={{ fontSize: 17, textAlignVertical: "bottom" }}>
                                ,
                            </Text>
                            <Text
                                style={{ fontSize: 17, textAlignVertical: "bottom" }}
                            >
                                78
                            </Text>
                        </View>
                    </View>
                </View>
                <IconFontAwesome
                    style={{ marginTop: 5 }}
                    name="credit-card"
                    size={30}
                />
            </View>
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
        </View>
    </ScrollView>  
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
    card: {
        backgroundColor: "#ECE9EA",
        borderRadius: 20,
        height: 200,
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

export default cardMovements