import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BoxObjectModel = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BoxObjectModel</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  title: {
    paddingHorizontal: 100,
    paddingVertical: 20,
    fontSize: 20,
    borderWidth: 10,
    marginHorizontal: 50,
    marginVertical: 50,
  },
});

export default BoxObjectModel;
