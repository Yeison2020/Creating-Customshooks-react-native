import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Fab from '../components/Fab';

const CounterScreen = () => {
  const [counter, setCounter] = useState(10);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador: {counter}</Text>
      <Fab title="-1" onPress={() => setCounter(curr => curr - 1)} />
      <Fab
        title="+1"
        onPress={() => setCounter(curr => curr + 1)}
        position="bl"
      />

      {/* <TouchableOpacity
        style={styles.fabLocationR}
        onPress={() => setCounter(curr => curr - 1)}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>-1</Text>
        </View>
      </TouchableOpacity> */}
    </View>
  );
};

export default CounterScreen;

// Recommended to order styles in A-Z orders

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#707382',
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    top: -15,
  },
});
