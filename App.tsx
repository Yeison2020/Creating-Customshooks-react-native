import React from 'react';
import {SafeAreaView} from 'react-native';
// import HolaMundoScreen from './src/screens/HolaMundoScreen';
// import CounterScreen from './src/screens/CounterScreen';
import BoxObjectModel from './src/screens/BoxObjectModelScreen';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <BoxObjectModel />
    </SafeAreaView>
  );
};

export default App;
