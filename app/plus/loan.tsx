import React, { useState } from "react";
import { View, Button, Image, Text, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";

// Tipi TypeScript
interface ImagePickerAsset {
  uri: string;
}

export default function App() {
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
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Apri Fotocamera" onPress={openCamera} />
      <Button title="Carica dalla Galleria" onPress={openGallery} />

      {image ? (
        <Image
          source={{ uri: image }}
          style={{ width: 200, height: 200, marginTop: 20 }}
        />
      ) : (
        <Text style={{ marginTop: 20 }}>Nessuna immagine selezionata</Text>
      )}
    </View>
  );
}
