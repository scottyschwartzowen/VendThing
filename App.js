import React, { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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
import AuthNavigator from './app/navigation/AuthNavigator';

const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    <Button
      title="View Tweet"
      onPress={() => navigation.navigate('TweetDetails', { id: 1 })}
    />
  </Screen>
);

const TweetDetails = ({ route }) => (
  <Screen>
    <Text>Tweet Details {route.params.id}</Text>
  </Screen>
);

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: 'dodgerblue' },
        headerTintColor: 'white',
      }}
    >
      <Stack.Screen
        name="Tweets"
        component={Tweets}
        options={{
          headerStyle: { backgroundColor: 'tomato' },
          headerTintColor: 'white',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TweetDetails"
        component={TweetDetails}
        options={({ route }) => ({ title: 'Tweet Details' })}
      />
    </Stack.Navigator>
  );
};

const Account = () => (
  <Screen>
    <Text>Account</Text>
  </Screen>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Feed" component={StackNavigator} />
    <Tab.Screen name="Account" component={Account} />
  </Tab.Navigator>
);

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
      <AuthNavigator />
    </NavigationContainer>
  );
}
