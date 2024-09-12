import { Text } from "../../../components/textFont";
import { View, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";

const images = {
  one: require("../../../assets/login/fourthImage.png"),
};

interface ImagePickerAsset {
  uri: string;
}

const Receipt = () => {
  const router = useRouter();
  const [image, setImage] = useState<string | null>(null);

  // Funzione per richiedere i permessi per accedere alla fotocamera
  const askCameraPermission = async (): Promise<boolean> => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Errore",
        "Permessi per accedere alla fotocamera non concessi"
      );
      return false;
    }
    return true;
  };

  // Funzione per richiedere i permessi per accedere alla galleria
  const askGalleryPermission = async (): Promise<boolean> => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Errore", "Permessi per accedere alla galleria non concessi");
      return false;
    }
    return true;
  };

  // Funzione per aprire la fotocamera e scattare una foto
  const openCamera = async () => {
    const hasPermission = await askCameraPermission();
    if (!hasPermission) return;

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images, // Solo immagini
      allowsEditing: true,
      quality: 1, // Alta qualità
    });

    // Verifica che l'operazione non sia stata annullata e che ci siano asset validi
    if (!result.canceled && result.assets && result.assets.length > 0) {
      setImage(result.assets[0].uri); // Setta l'URI della foto
      router.push("otherPages/addReceipt");
    }
  };

  // Funzione per aprire la galleria e selezionare una foto
  const openGallery = async () => {
    const hasPermission = await askGalleryPermission();
    if (!hasPermission) return;

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images, // Solo immagini
      allowsEditing: true,
      quality: 1, // Alta qualità
    });

    // Verifica che l'operazione non sia stata annullata e che ci siano asset validi
    if (!result.canceled && result.assets && result.assets.length > 0) {
      setImage(result.assets[0].uri); // Setta l'URI dell'immagine selezionata
      router.push("otherPages/addReceipt");
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>
        Scansiona lo scontrino o seleziona dalla galleria
      </Text>
      <View style={{ flex: 1 }}></View>
      <View style={styles.imageViewStyle}>
        <Image source={images.one} style={styles.imageStyle} />
      </View>
      <View style={styles.viewStyle}>
        <TouchableOpacity style={styles.button} onPress={openCamera}>
          <Text style={styles.buttonText}>Scatta foto</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={openGallery}>
          <Text style={styles.buttonText}>Importa</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCF6FB",
    paddingTop: "10%",
  },
  textStyle: {
    paddingHorizontal: "3%",
    fontFamily: "Switzer-Semibold",
    fontSize: 27,
  },
  imageViewStyle: {
    alignItems: "center",
    marginBottom: -21,
    zIndex: 1,
  },
  imageStyle: {
    height: 400,
    width: 300,
  },
  viewStyle: {
    flexDirection: "row",
    backgroundColor: "white",
    height: 130,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    justifyContent: "space-around",
    alignItems: "center",
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
    color: "black",
    fontSize: 14,
  },
});

export default Receipt;
