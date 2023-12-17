import React from 'react';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import { Text, View } from 'react-native';


import AppText from './app/components/AppText';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <AppText>I love Jonas!! He is the kindest, funniest, smartest, strongest husband i have ever known!</AppText>
    </View>
  );
}
