import { Text } from "../../components/textFont"; // Importing custom text components
import { View, StyleSheet, ScrollView, Pressable } from "react-native"; // Importing React Native components
import IconFeather from "react-native-vector-icons/Feather";
import React, { useState } from "react";
import DropdownButton from "../../components/dropdown";
import { useRouter } from "expo-router";
import { MenuProvider } from "react-native-popup-menu";

const UserProfile = () => {
  const router = useRouter();

  const [selectedTransactionType, setSelectedTransactionType] =
    useState<string>("uscite");

  const handleDropdownSelection = (value: string) => {
    setSelectedTransactionType(value); // Updates the item in the dropdown
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Generali</Text>
        <View style={styles.allOptions}>
          <View>
            <Pressable
              style={styles.option}
              onPress={() => router.push("otherPages/target")}
            >
              <IconFeather name="award" size={18.5} />
              <Text style={styles.optionLabel}>Obiettivo</Text>
            </Pressable>
          </View>
          <View>
            <Pressable style={styles.option}>
              <IconFeather name="dollar-sign" size={18.5} />
              <Text style={styles.optionLabel}>Valuta</Text>
              <View style={styles.dropdownButtonContainer}>
                <DropdownButton
                  selectedValue={selectedTransactionType}
                  onSelect={handleDropdownSelection}
                  type="settings"
                  color="#F9F9F9"
                />
              </View>
            </Pressable>
          </View>
          <View>
            <Pressable style={styles.option}>
              <IconFeather name="lock" size={18.5} />
              <Text style={styles.optionLabel}>Privacy</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        <View style={styles.allOptions}>
          <View>
            <Pressable style={styles.option}>
              <IconFeather name="image" size={18.5} />
              <Text style={styles.optionLabel}>Foto</Text>
            </Pressable>
          </View>
          <View>
            <Pressable style={styles.option}>
              <IconFeather name="user" size={18.5} />
              <Text style={styles.optionLabel}>Nome e cognome</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Help</Text>
        <View style={styles.allOptions}>
          <View>
            <Pressable style={styles.option}>
              <IconFeather name="compass" size={18.5} />
              <Text style={styles.optionLabel}>Istruzioni</Text>
            </Pressable>
          </View>
          <View>
            <Pressable style={styles.option}>
              <IconFeather name="help-circle" size={18.5} />
              <Text style={styles.optionLabel}>FAQ</Text>
            </Pressable>
          </View>
          <View>
            <Pressable style={styles.option}>
              <IconFeather name="life-buoy" size={18.5} />
              <Text style={styles.optionLabel}>Supporto</Text>
            </Pressable>
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
    padding: 20,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: "Switzer-Semibold",
    marginBottom: 10,
    marginLeft: 20,
  },
  allOptions: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#FCF6FB",
    fontFamily: "Switzer-Variable",
  },
  optionLabel: {
    fontSize: 16,
    marginLeft: 15,
  },
  picker: {
    height: 50,
    width: 120,
  },
  Pressable: {
    height: 40,
  },
  dropdownButtonContainer: {
    marginLeft: "auto",
    width: 100,
    height: 40,
    backgroundColor: "#F9F9F9",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2.5,
  },
});

export default UserProfile;
