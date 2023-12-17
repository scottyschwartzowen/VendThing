import React from 'react';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from './app/components/AppText';
import AppButton from './app/components/AppButton';

export default function App() {
  return (
    <WelcomeScreen />
  );
}
