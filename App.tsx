import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
  },
});

const App: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Airbnb eslint patter</Text>
    <StatusBar style="auto" />
  </View>
);

export default App;
