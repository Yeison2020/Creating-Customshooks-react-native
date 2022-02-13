import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
interface Props {
  title: string;
  position?: 'br' | 'bl';
  onPress: () => void;
}
const Fab = ({title, onPress, position = 'br'}: Props) => {
  return (
    <TouchableOpacity
      style={[
        styles.fabLocation,
        position === 'bl' ? styles.left : styles.right,
      ]}
      onPress={onPress}>
      <View style={styles.fab}>
        <Text style={styles.fabText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Fab;

const styles = StyleSheet.create({
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

  fabLocation: {
    position: 'absolute',
    bottom: 25,
  },
  right: {
    right: 25,
  },
  left: {
    left: 25,
  },
  fab: {
    backgroundColor: '#5856D6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },

  fabText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
