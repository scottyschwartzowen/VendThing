import React, { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import Screen from './app/components/Screen';
import { Text } from 'react-native';
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
import ImageInputList from './app/components/ImageInputList';

const Link = () => {
  const navigation = useNavigation();

  return (
    <Button title="Click" onPress={() => navigation.navigate('TweetDetails')} />
  );
};

const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    <Link />
  </Screen>
);

const TweetDetails = () => (
  <Screen>
    <Text>Tweet Details</Text>
  </Screen>
);

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tweets" component={Tweets} />
      <Stack.Screen name="TweetDetails" component={TweetDetails} />
    </Stack.Navigator>
  );
};

export default function App() {
  // const [imageUri, setImageUri] = useState();
  // const [imageUris, setImageUris] = useState([]);

  // const requestPermission = async () => {
  //   const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  //   if (!granted) alert('You need to enable permission to access the library');
  // };

  // useEffect(() => {
  //   requestPermission();
  // }, []);

  // const selectImage = async () => {
  //   try {
  //     const result = await ImagePicker.launchImageLibraryAsync();
  //     if (!result.canceled) setImageUri(result.assets[0].uri);
  //     // using "result.assets[0].uri" because "result.uri" is deprecated after SDK 48
  //   } catch (error) {
  //     console.log('Error reading an image', error);
  //   }
  // };

  // const handleAdd = (uri) => {
  //   setImageUris([...imageUris, uri]);
  // };

  // const handleRemove = (uri) => {
  //   setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  // };

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
