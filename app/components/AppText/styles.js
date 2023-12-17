import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  text: {
    color: 'teal',
    fontSize: 20,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
});

export default styles;
