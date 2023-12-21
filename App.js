import React, { useState } from 'react';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import { Switch, Text, TextInput, View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from './app/components/AppText';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';

const categories = [
  { label: 'Furniture', value: 1 },
  { label: 'Clothing', value: 2 },
  { label: 'Devices', value: 3 },
  { label: 'Sex Toys', value: 4 },
  { label: 'Prostitutes', value: 5 },
  { label: 'Old Ballet Slippers', value: 6 },
  { label: "Luke's Dirty Panties", value: 7 },
  { label: 'Naked Fouette Lessons', value: 8 },
  { label: 'Happy Ending Massage', value: 9 },
  { label: "Frau Luhe's Virginity", value: 10 },
  { label: "Gailene Stock's Ashes", value: 11 },
  { label: "Zoltan's Anal Wart Collection", value: 12 },
];

export default function App() {
  const [category, setCategory] = useState(categories[0]);

  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        items={categories}
        icon="apps"
        placeholder="Category"
      />
      <AppTextInput icon="email" placeholder="Email" />
    </Screen>
  );
}
