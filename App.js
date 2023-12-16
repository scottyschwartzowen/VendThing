import React from 'react';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          backgroundColor: 'dodgerblue',
          width: 100,
          height: 100,
          padding: 20,
          paddingHorizontal: 10,
          paddingLeft: 30,
        }}
      >
        <View style={{
          backgroundColor: "gold",
          width: 50,
          height: 50,
        }
        }></View>
      </View>
      <View style={{
        backgroundColor: "tomato",
        width: 140,
        height: 140,
        margin: 20,
        marginVertical: 60,
      }}></View>
    </View>
  );
}
