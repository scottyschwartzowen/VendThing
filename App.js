import {
  StyleSheet,
  SafeAreaView,
  Button,
  StatusBar,
  Platform,
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        color="teal"
        title="Tap Me Here"
        onPress={() => console.log('You tapped me.')}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
