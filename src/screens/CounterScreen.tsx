import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const CounterScreen = () => {
  const [counter, setCounter] = useState(10);
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 40,
          top: -15,
        }}>
        Contador: {counter}
      </Text>
      <TouchableOpacity onPress={() => setCounter(curr => curr + 1)}>
        <View style={{backgroundColor: 'red', borderRadius: 5}}>
          <Text>Click me +1 </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setCounter(curr => curr - 1)}>
        <View style={{backgroundColor: 'green', borderRadius: 5}}>
          <Text>Click me -1 </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CounterScreen;
