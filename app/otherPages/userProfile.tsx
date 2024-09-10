import { Text } from "../../components/textFont"; // Importing custom text components
import { FlatList } from "react-native";
import { View, StyleSheet, Image, ScrollView, Pressable } from "react-native"; // Importing React Native components
import HomeCards from "../../components/homeCards"; // Importing a custom HomeCards component
import StatsCategory from "../../components/categoryLastMovements";
import IconFeather from "react-native-vector-icons/Feather";
import { useRouter } from "expo-router";

const currencies = ["EUR", "USD", "JPY", "GBP", "AUD", "CAD", "CHF"];

const UserProfile = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Generali</Text>
        <View style={styles.option}>
          <Text style={styles.optionLabel}>Obiettivo</Text>
        </View>
        <View style={styles.option}>
          <Text style={styles.optionLabel}>Valuta</Text>
          {/* <Picker
            selectedValue={selectedCurrency}
            style={styles.picker}
            onValueChange={(itemValue) => setSelectedCurrency(itemValue)}
          >
            {currencies.map((currency) => (
              <Picker.Item key={currency} label={currency} value={currency} />
            ))}
          </Picker> */}
        </View>
        <View style={styles.option}>
          <Text style={styles.optionLabel}>Privacy</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        <View style={styles.option}>
          <Text style={styles.optionLabel}>Foto</Text>
        </View>
        <View style={styles.option}>
          <Text style={styles.optionLabel}>Nome e cognome</Text>
        </View>
        <View style={styles.option}>
          <Text style={styles.optionLabel}>E-mail</Text>
        </View>
        <View style={styles.option}>
          <Text style={styles.optionLabel}>Password</Text>
        </View>
        <Pressable style={styles.option}>
          <Text style={styles.optionLabel}>Esci</Text>
        </Pressable>
        <Pressable style={styles.option}>
          <Text style={styles.optionLabel}>Elimina account</Text>
        </Pressable>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Help</Text>
        <View style={styles.option}>
          <Text style={styles.optionLabel}>Istruzioni</Text>
        </View>
        <View style={styles.option}>
          <Text style={styles.optionLabel}>FAQ</Text>
        </View>
        <View style={styles.option}>
          <Text style={styles.optionLabel}>Supporto</Text>
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FCF6FB",
        padding: 20,
      },
      section: {
        marginBottom: 30,
      },
      sectionTitle: {
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 10,
      },
      option: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#eaeaea",
      },
      optionLabel: {
        fontSize: 16,
      },
      picker: {
        height: 50,
        width: 120,
      },

});
export default UserProfile