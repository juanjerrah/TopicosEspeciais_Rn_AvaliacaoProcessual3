import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet, Text, View } from 'react-native';
import Counter from './components/Counter';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#565454' style='light'/>
      <View>
        <Counter/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#424242'
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  }
});

export default App;
