import React, { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { Image, Button } from 'react-native';

import Screen from './app/components/Screen';

export default function App() {
  const [imageUri, setImageUri] = useState();
  const [assets, setAssets] = useState([]);

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) alert('You need to enable permission to access the library.');
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
      });

      if (!result.canceled) {
        setImageUri(result.assets[0].uri);
        setAssets(result.assets);
      }
    } catch (error) {
      console.error('Error selecting image:', error);
    }
  };

  return (
    <Screen>
      <Button title="Select Image" onPress={selectImage} />
      <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
    </Screen>
  );
}
