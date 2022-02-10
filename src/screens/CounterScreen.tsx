import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

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
      <Button
        title="Increase + 1"
        onPress={() => setCounter(current => current + 1)}
      />
      <Button
        title="Decrease -1"
        onPress={() => setCounter(current => current - 1)}
      />
    </View>
  );
};

export default CounterScreen;
