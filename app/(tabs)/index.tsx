import {Text} from "../../components/textFont"; // Importing custom text components
import {FlatList} from "react-native";
import {View, StyleSheet, Image, ScrollView} from "react-native"; // Importing React Native components
import HomeCards from "../../components/homeCards"; // Importing a custom HomeCards component
import TextTicker from "react-native-text-ticker"; // Importing TextTicker for scrolling text animation
import StatsCategory from "../../components/categoryLastMovements";
import IconFeather from "react-native-vector-icons/Feather";

import data from "../../data/data.json";

// Importing image assets
const pig_empty = require("../../assets/homepage/Pig_empty.png");
const pig_mid = require("../../assets/homepage/Pig_mid.png");
const pig_full = require("../../assets/homepage/Pig_full.png");
const pig_logo = require("../../assets/homepage/Pig_logo.png");
const menu = require("../../assets/homepage/Menu_home.png");

const Home = () => {
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

  // Example total balance in string format
  const totalBalanceString = "20.275,78";

  // Convert the total balance string to a number
  const convertBalanceToNumber = (balanceString: string) => {
    return parseFloat(balanceString.replace(/\./g, "").replace(",", "."));
  };

  // Convert string balance to number
  const totalBalance = convertBalanceToNumber(totalBalanceString);

  // Function to format balance with thousands separators and decimals
  const formatBalance = (balance: number) => {
    // Create a formatter object for formatting numbers according to German locale
    const formatter = new Intl.NumberFormat("de-DE", {
      // Ensure there are always 2 digits after the decimal point
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    // Format the balance using the created formatter object
    const formattedBalance = formatter.format(balance);

    // Split the formatted string into euros and cents
    // In the "de-DE" locale, the decimal separator is a comma (",")
    const [euros, cents] = formattedBalance.split(",");

    // Return an object containing the formatted euros and cents
    return {euros, cents};
  };
  // Extract formatted euros and cents
  const {euros, cents} = formatBalance(totalBalance);

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
          <Image source={getPigImage(totalBalance)} style={styles.pig_top} />
        </View>

        {/* Main content container */}
        <View style={styles.mainContainer}>
          <View style={styles.row}>
            <View style={styles.logoContainer}>
              <Image source={pig_logo} style={styles.pig_logo} />
            </View>
            <Text style={styles.text}>Ciao Marco!</Text>

            <View style={{flex: 1}}></View>

            <Image source={menu} style={styles.menuHome} />
          </View>

          {/* Total balance section */}
          <View style={styles.balanceContainer}>
            <Text style={styles.totalBalanceText}>Bilancio Totale</Text>
            <Text style={styles.totalBalanceAmount}>
              € {euros}
              <Text style={styles.totalBalanceDecimal}>.{cents}</Text>
            </Text>
            <HomeCards />
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
              <Text style={[styles.inOutAmount, {color: amountColor}]}>
                {isPositive ? "+" : ""}
                {inOutAmount}
              </Text>
              <Text style={styles.inOutText}>{inOutText}</Text>
            </View>

            {/* View aggiuntiva per entrate e uscite */}
            <View style={styles.inOutDetails}>
              <View style={styles.inOutColumn}>
                <Text style={styles.inLabel}>Entrate</Text>
                <View style={styles.valueRow}>
                  <Text style={styles.inValue}>+ 1.500</Text>
                  <IconFeather
                    name="chevron-right"
                    size={20}
                    color="#000000"
                    style={styles.chevronIcon}
                  />
                </View>
              </View>
              <View style={styles.inOutColumn}>
                <Text style={styles.outLabel}>Uscite</Text>
                <View style={styles.valueRow}>
                  <Text style={styles.outValue}>- 630</Text>
                  <IconFeather
                    name="chevron-right"
                    size={20}
                    color="#000000"
                    style={styles.chevronIcon}
                  />
                </View>
              </View>
            </View>
          </View>

          {/* Latest movements section */}
          <View style={styles.MovesContainer}>
            <Text style={styles.titleLastMoves}>Ultimi movimenti</Text>
            <FlatList
              data={data.movements}
              renderItem={({item}) => (
                <StatsCategory
                  moves={item.moves}
                  amount={item.amount}
                  date={item.date}
                />
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

// Styles for the component
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
    fontFamily: "Switzer-Semibold",
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
  },
  allCards: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  totalBalanceText: {
    paddingBottom: 10,
    fontSize: 18,
    fontFamily: "Switzer-Semibold",
  },
  totalBalanceAmount: {
    fontSize: 25,
    fontFamily: "Switzer-Semibold",
    marginBottom: 20,
  },
  totalBalanceDecimal: {
    fontSize: 12,
    fontFamily: "Switzer-Semibold",
    color: "#A0A0A0",
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
    fontFamily: "Switzer-Semibold",
    marginBottom: 10,
    marginLeft: 10,
  },
  titleThisMonth: {
    fontSize: 18,
    fontFamily: "Switzer-Semibold",
    marginBottom: 10,
    marginLeft: 20,
    marginTop: -15,
  },
  InOutContainer: {
    flexDirection: "row", // Disposizione orizzontale
    backgroundColor: "#FFFFFF",
    paddingLeft: 20,
    marginBottom: 10,
    width: "100%", // Larghezza aumentata per far spazio a entrambe le view
    height: 115,
    alignItems: "center",
  },
  // Stile per la sezione "Sei in Positivo", numero e freccia
  amountInOut: {
    flex: 1,
    borderColor: "#ECE9EA",
    borderWidth: 2,
    borderRadius: 17,
    height: "100%",
    justifyContent: "space-between", // Spaziamo gli elementi
  },
  // Stile per la freccia in alto a sinistra
  arrowInOut: {
    position: "absolute",
    top: 15,
    left: 15,
    fontFamily: "Switzer-Semibold", // Rende la freccia più spessa
  },
  // Stile per il testo "Sei in Positivo!"
  inOutText: {
    position: "absolute",
    bottom: 20,
    left: 20,
    fontSize: 16,
    color: "#000000",
    fontFamily: "Switzer-Semibold",
  },
  // Stile per il numero della somma in alto a destra
  inOutAmount: {
    position: "absolute",
    top: 20,
    right: 20,
    fontSize: 22,
    fontFamily: "Switzer-Semibold",
    color: "#F773ED",
  },
  // Stile per la nuova view con entrate/uscite
  inOutDetails: {
    flexDirection: "column", // Disposizione orizzontale
    backgroundColor: "#FFFFFF",
    paddingLeft: 20,
    marginLeft: 20,
    marginRight: 10,
    height: 115,
    width: 130,
    alignItems: "flex-start", // Allinea a sinistra
    borderColor: "#ECE9EA",
    borderWidth: 2,
    borderRadius: 17,
  },
  // Stile per le righe Entrate e Uscite
  inOutColumn: {
    flexDirection: "column",
    marginBottom: 10, // Spazio tra le etichette e i valori
  },
  // Stile per le etichette Entrate e Uscite
  inLabel: {
    fontSize: 12,
    marginTop: 10,
    marginLeft: -5, // Spostiamo più a sinistra
    color: "#000000",
    fontFamily: "Switzer-Semibold",
  },
  outLabel: {
    fontSize: 12,
    marginLeft: -5, // Spostiamo più a sinistra
    color: "#000000",
    fontFamily: "Switzer-Semibold",
  },
  // Stile per i valori di Entrate e Uscite
  inValue: {
    fontSize: 18,
    marginTop: 5, // Aggiunge uno spazio maggiore tra label e valore
    marginLeft: -5, // Spostiamo più a sinistra
    color: "#F773ED",
    fontFamily: "Switzer-Semibold",
  },
  outValue: {
    fontSize: 18,
    marginTop: 5, // Aggiunge uno spazio maggiore tra label e valore
    marginLeft: -5, // Spostiamo più a sinistra
    color: "#5272F2",
    fontFamily: "Switzer-Semibold",
  },
  valueRow: {
    flexDirection: "row", // Disposizione orizzontale
    justifyContent: "space-between", // Spazio tra testo e icona
    alignItems: "center", // Allinea verticalmente l'icona e il testo
    width: "100%", // Assicurati che l'elemento occupi tutta la larghezza disponibile
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
