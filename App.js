import React, { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

import Screen from './app/components/Screen';
import { Button, Image } from 'react-native';

export default function App() {
  const [imageUri, setImageUri] = useState();

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) alert('You need to enable permission to access the library');
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.canceled) setImageUri(result.assets[0].uri);
      // using "result.assets[0].uri" because "result.uri" is deprecated after SDK 48
    } catch (error) {
      console.log('Error reading an image', error);
    }
  };

  return (
    <Screen>
      <Button title="Select Image" onPress={selectImage} />
      <Image source={{ uri: imageUri }} style={{ height: 200, width: 200 }} />
    </Screen>
  );
}
