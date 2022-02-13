import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const CounterScreen = () => {
  const [counter, setCounter] = useState(10);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador: {counter}</Text>
      <TouchableOpacity
        style={styles.fab}
        onPress={() => setCounter(curr => curr + 1)}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>+1</Text>
        </View>
      </TouchableOpacity>
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
  btn2: {
    height: 70,
    borderRadius: 5,
    marginBottom: 10,
    padding: 15,
    borderColor: '#20232a',
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
  },
  btn: {
    backgroundColor: 'red',
    borderRadius: 5,
    marginBottom: 10,
    padding: 15,
  },
  fab: {
    backgroundColor: '#5856D6',
    width: 60,
    height: 60,
    borderRadius: 100,
  },

  fabText: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
