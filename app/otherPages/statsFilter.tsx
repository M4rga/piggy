import React, { useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Pressable,
  Modal,
} from "react-native";
import IconFeather from "react-native-vector-icons/Feather";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import data from "../../data/data.json";
import { Text } from "../../components/textFont";

// Definire un tipo per le categorie
interface Category {
  icon: keyof typeof images;
  type: string;
}

// Definire un tipo per i portafogli
interface Wallet {
  icon: string;
  category: string;
}

const images = {
  apple: require("../../assets/stats/apple.png"),
  house: require("../../assets/stats/house.png"),
  pill: require("../../assets/stats/pill.png"),
  plane: require("../../assets/stats/plane.png"),
  shopping: require("../../assets/stats/shopping.png"),
  train: require("../../assets/stats/train.png"),
  headphones: require("../../assets/stats/headphones.png"),
  car: require("../../assets/stats/car.png"),
  plate: require("../../assets/stats/plate.png"),
  ticket: require("../../assets/stats/ticket.png"),
};

const StatsFilter: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedWallet, setSelectedWallet] = useState<string | null>(null);

  const onChange = (
    event: DateTimePickerEvent,
    selectedDate?: Date | undefined
  ) => {
    if (selectedDate) {
      setDate(selectedDate);
    }
    setShowDatePicker(false);
  };

  const onEndDateChange = (
    event: DateTimePickerEvent,
    selectedDate?: Date | undefined
  ) => {
    if (selectedDate) {
      setEndDate(selectedDate);
    }
    setShowEndDatePicker(false);
  };

  const handleCategorySelect = (type: string) => {
    setSelectedCategory((prev) => (prev === type ? null : type)); // If the selected item is the same as the one selected before, this become deselected. Otherwise if another item is selected, it becomes the new selected item
  };

  const handleWalletSelect = (category: string) => {
    setSelectedWallet((prev) => (prev === category ? null : category));
  };

  return (
    <View style={{ backgroundColor: "#FCF6FB", flex: 1 }}>
      {/* Categories */}
      <View style={styles.container}>
        <Text style={styles.title}>Categoria</Text>
        <FlatList
          data={data.categories as Category[]}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.itemContainer,
                selectedCategory === item.type && { borderColor: "#F773ED" }, // Change the border color
              ]}
              onPress={() => handleCategorySelect(item.type)} // Select the category
            >
              <View
                style={[
                  styles.categoryItem,
                  selectedCategory === item.type && {
                    borderColor: "#F773ED",
                    borderWidth: 1,
                  },
                ]}
              >
                <Image
                  source={images[item.icon]}
                  style={styles.categoryItemImage}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.nome}>{item.type}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => item.type + index.toString()}
          numColumns={5}
          columnWrapperStyle={styles.columnWrapper}
          contentContainerStyle={styles.flatListContainer}
          scrollEnabled={false}
        />
      </View>

      {/* Wallets */}
      <View style={styles.container}>
        <Text style={styles.title}>Portafogli</Text>
        <FlatList
          data={data.wallet as Wallet[]}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.itemContainer,
                selectedWallet === item.category && { borderColor: "#F773ED" },
              ]}
              onPress={() => handleWalletSelect(item.category)}
            >
              <View
                style={[
                  styles.walletItem,
                  selectedWallet === item.category && {
                    borderColor: "#F773ED",
                    borderWidth: 1,
                  },
                ]}
              >
                <IconFontAwesome
                  name={item.icon}
                  style={styles.walletItemIcon}
                />
                <Text style={styles.walletItemText}>{item.category}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => item.category + index.toString()}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapper}
          contentContainerStyle={styles.flatListContainer}
          scrollEnabled={false}
        />
      </View>

      {/* Date Selection */}
      <View style={styles.container}>
        <Text style={styles.title}>Data</Text>
        <View style={styles.dateContainer}>
          <TouchableOpacity
            style={styles.datePickerContainer}
            onPress={() => setShowDatePicker(true)}
          >
            <IconFeather name={"calendar"} style={styles.datePickerIcon} />
            <Text style={styles.dateText}>{date.toLocaleDateString()}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.datePickerContainer}
            onPress={() => setShowEndDatePicker(true)}
          >
            <IconFeather name={"calendar"} style={styles.datePickerIcon} />
            <Text style={styles.dateText}>{endDate.toLocaleDateString()}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Modal for Start Date */}
      <Modal visible={showDatePicker} transparent={true} animationType="fade">
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <DateTimePicker
              value={date}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
            <Pressable
              style={styles.modalButton}
              onPress={() => setShowDatePicker(false)}
            >
              <Text style={styles.modalButtonText}>Chiudi</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {/* Modal for End Date */}
      <Modal
        visible={showEndDatePicker}
        transparent={true}
        animationType="fade"
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <DateTimePicker
              value={endDate}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={onEndDateChange}
            />
            <Pressable
              style={styles.modalButton}
              onPress={() => setShowEndDatePicker(false)}
            >
              <Text style={styles.modalButtonText}>Chiudi</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
  },
  title: {
    fontSize: 15,
    color: "gray",
    marginBottom: 20,
  },
  flatListContainer: {
    paddingHorizontal: 8,
  },
  columnWrapper: {
    justifyContent: "space-between",
  },
  itemContainer: {
    alignItems: "center",
    justifyContent: "center",
    margin: 4,
  },
  categoryItem: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: "hidden",
    borderColor: "grey",
    borderWidth: 0.5,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  categoryItemImage: {
    width: 30,
    height: 30,
  },
  walletItem: {
    width: 100,
    height: 50,
    borderRadius: 15,
    borderColor: "grey",
    borderWidth: 0.5,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: "center",
  },
  walletItemIcon: {
    fontSize: 20,
    marginRight: 10,
  },
  walletItemText: {
    fontSize: 9,
    textAlign: "left",
    flex: 1,
    flexShrink: 1,
    overflow: "hidden",
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  datePickerContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "lightgrey",
    padding: 5,
    borderRadius: 5,
  },
  datePickerIcon: {
    fontSize: 24,
    color: "black",
    marginRight: 5,
  },
  datePicker: {
    width: 100,
    backgroundColor: "lightgrey",
    borderRadius: 5,
  },
  dateText: {
    fontSize: 14,
    color: "black",
  },
  nome: {
    fontSize: 10,
    textAlign: "center",
    marginTop: 4,
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: 300,
    alignItems: "center",
  },
  modalButton: {
    marginTop: 20,
    backgroundColor: "#F773ED",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  modalButtonText: {
    color: "white",
    fontSize: 16,
  },
});

export default StatsFilter;
