import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import { View } from 'react-native';
import Counter from './components/Counter';
import { styles } from './AppStyles';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#565454' style='light'/>
      <View style={styles.main}>
        <Counter/>
      </View>
    </SafeAreaView>
  );
}

export default App;
