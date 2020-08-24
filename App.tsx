import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Standard eslint patter</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'

  },
  text: {
    fontSize: 30
  }
})

export default App
