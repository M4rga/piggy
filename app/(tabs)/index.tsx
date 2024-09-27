import { Text } from "../../components/customComponents"; // Importing custom text components
import { FlatList } from "react-native";
import { View, StyleSheet, Image, ScrollView, Pressable } from "react-native"; // Importing React Native components
import HomeCards from "../../components/homeCards"; // Importing a custom HomeCards component
import StatsCategory from "../../components/categoryLastMovements";
import IconFeather from "react-native-vector-icons/Feather";
import { useRouter } from "expo-router";
import Balance from "../../components/balanceNumber";
import BalanceTextInput from "../../components/balanceTextInput";

import data from "../../data/data.json";

// Importing image assets
const pig_empty = require("../../assets/homepage/Pig_empty.png");
const pig_mid = require("../../assets/homepage/Pig_mid.png");
const pig_full = require("../../assets/homepage/Pig_full.png");
const pig_logo = require("../../assets/homepage/Pig_logo.png");

const Home = () => {
  const router = useRouter();
  // Function to get the appropriate pig image based on the balance
  const getPigImage = (balance: number) => {
    if (balance < 500) {
      return pig_empty; // Show empty pig image for balance < 500
    } else if (balance >= 500 && balance < 10000) {
      return pig_mid; // Show mid pig image for balance between 500 and 10000
    } else {
      return pig_full; // Show full pig image for balance >= 10000
    }
  };

  // Example inOutAmount
  const inOutAmount = -231; // You can change this value to a negative number to test the negative case

  // Determine colors and text based on inOutAmount
  const isPositive = inOutAmount >= 0;
  const inOutText = isPositive ? "Sei in Positivo!" : "Sei in Negativo!";
  const amountColor = isPositive ? "#F773ED" : "#5272F2"; // Pink for positive, blue for negative

  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        {/* Top view with pig image */}
        <View style={styles.topView}>
          <Image source={getPigImage(20275.78)} style={styles.pig_top} />
        </View>

        {/* Main content container */}
        <View style={styles.mainContainer}>
          <View style={styles.row}>
            <View style={styles.logoContainer}>
              <Image source={pig_logo} style={styles.pig_logo} />
            </View>
            <Text style={styles.text}>Ciao Marco!</Text>

            <View style={{ flex: 1 }}></View>

            <Pressable onPress={() => router.push("../otherPages/userProfile")}>
              <IconFeather name="more-vertical" size={22.5} />
            </Pressable>
          </View>

          {/* Total balance section */}
          <View>
            <View style={styles.balanceContainer}>
              <Text style={styles.totalBalanceText}>Bilancio Totale</Text>
              <Balance number={20275.78} size={25} />
            </View>
            <View style={{ marginBottom: 25 }}>
              <HomeCards />
            </View>
          </View>

          <Text style={styles.titleThisMonth}>Questo mese</Text>
          {/* In/Out section for this month */}
          <View style={styles.InOutContainer}>
            {/* Posizionamento della freccia in alto a sinistra */}
            <View style={styles.amountInOut}>
              <IconFeather
                name={isPositive ? "arrow-up-right" : "arrow-down-right"} // Icona dinamica
                size={35} // Ingrandiamo la freccia
                color={amountColor} // Usa amountColor per il colore dinamico
                style={styles.arrowInOut} // Aggiorniamo lo stile
              />
              <Text style={[styles.inOutAmount, { color: amountColor }]}>
                {isPositive ? "+" : ""}
                {inOutAmount}
              </Text>
              <Text style={styles.inOutText}>{inOutText}</Text>
            </View>

            {/* View aggiuntiva per entrate e uscite */}
            <Pressable
              style={styles.inOutDetails}
              onPress={() => router.push("/stats")}
            >
              <View style={styles.inOutColumn}>
                <Text style={styles.inLabel}>Entrate</Text>
                <View style={styles.valueRow}>
                  <Text style={styles.inValue}>+ 1.500</Text>
                  <IconFeather
                    name="chevron-right"
                    size={17}
                    color="#ECE9EA"
                    style={{ marginTop: 9 }}
                  />
                </View>
              </View>
              <View style={[styles.inOutColumn, { marginTop: -7 }]}>
                <Text style={styles.outLabel}>Uscite</Text>
                <View style={styles.valueRow}>
                  <Text style={styles.outValue}>- 630</Text>
                  <IconFeather
                    name="chevron-right"
                    size={17}
                    color="#ECE9EA"
                    style={{ marginTop: 9 }}
                  />
                </View>
              </View>
            </Pressable>
          </View>

          {/* Latest movements section */}
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
  pig_top: {
    zIndex: 10,
    flex: 1,
    width: 230,
    height: 189,
    marginBottom: -25,
  },
  pig_logo: {
    width: 48,
    height: 33,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    paddingTop: 15,
    justifyContent: "space-between",
    paddingRight: 20,
  },
  text: {
    fontSize: 23,
    fontFamily: "Switzer-Variable",
  },
  logoContainer: {
    width: 58,
    height: 58,
    borderRadius: 29,
    borderWidth: 1,
    borderColor: "#F773ED",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  menuHome: {
    width: 22,
    height: 22,
  },
  balanceContainer: {
    padding: 20,
    paddingBottom: 10,
  },
  allCards: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  totalBalanceText: {
    paddingBottom: 10,
    fontSize: 18,
    fontFamily: "Switzer-Variable",
  },
  card: {
    width: 80,
    height: 50,
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
    justifyContent: "flex-end",
    paddingRight: 20,
    marginRight: 10,
  },
  cardIcon: {
    position: "absolute",
    top: 5,
    right: 5,
  },
  cardAmountRow: {
    flexDirection: "row",
    alignItems: "baseline",
    position: "absolute",
    bottom: 5,
    left: 5,
  },
  cardAmount: {
    fontSize: 12,
    color: "#FFFFFF",
  },
  cardAmountDecimal: {
    fontSize: 8,
    color: "#FFFFFF",
  },
  cash: {
    flex: 1,
    width: 15,
    height: 15,
  },
  paypal: {
    width: 12,
    height: 12,
  },
  titleLastMoves: {
    fontSize: 18,
    marginBottom: 10,
    marginLeft: 10,
  },
  titleThisMonth: {
    fontSize: 18,
    marginBottom: 10,
    marginLeft: 20,
  },
  InOutContainer: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    paddingLeft: 10,
    marginBottom: 10,
    width: "100%",
    height: 115,
    alignItems: "center",
  },
  amountInOut: {
    flex: 1,
    borderColor: "#ECE9EA",
    borderWidth: 2,
    borderRadius: 17,
    height: "100%",
    justifyContent: "space-between",
  },
  arrowInOut: {
    position: "absolute",
    top: 15,
    left: 15,
    fontFamily: "Switzer-Semibold",
  },
  inOutText: {
    position: "absolute",
    bottom: 20,
    left: 20,
    fontSize: 16,
    color: "#000000",
    fontFamily: "Switzer-Semibold",
  },
  inOutAmount: {
    position: "absolute",
    top: 20,
    right: 20,
    fontSize: 22,
    fontFamily: "Switzer-Semibold",
    color: "#F773ED",
  },
  inOutDetails: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    paddingLeft: 20,
    marginLeft: 20,
    marginRight: 10,
    height: 115,
    width: 140,
    alignItems: "flex-start",
    borderColor: "#ECE9EA",
    borderWidth: 2,
    borderRadius: 17,
  },
  inOutColumn: {
    flexDirection: "column",
    marginBottom: 10,
  },
  inLabel: {
    fontSize: 12,
    marginTop: 10,
    marginLeft: -5,
    color: "#000000",
    fontFamily: "Switzer-Semibold",
  },
  outLabel: {
    fontSize: 12,
    marginLeft: -5,
    color: "#000000",
    fontFamily: "Switzer-Semibold",
  },
  inValue: {
    fontSize: 18,
    marginTop: 5,
    marginLeft: -5,
    color: "#F773ED",
    fontFamily: "Switzer-Semibold",
  },
  outValue: {
    fontSize: 18,
    marginTop: 5,
    marginLeft: -5,
    color: "#5272F2",
    fontFamily: "Switzer-Semibold",
  },
  valueRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  chevronIcon: {
    marginRight: 15,
    color: "#D3D3D3",
  },
  description: {
    fontSize: 12,
    textAlign: "left",
    marginTop: 5,
    marginLeft: 11,
  },
  MovesContainer: {
    padding: 10,
  },
});

export default Home;
