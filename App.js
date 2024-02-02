import React, { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import Screen from './app/components/Screen';
import { Button, Image } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import LoginScreen from './app/screens/LoginScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import AccountScreen from './app/screens/AccountScreen';
import ImageInput from './app/components/ImageInput';

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
      <ImageInput imageUri={imageUri} />
    </Screen>
  );
}
