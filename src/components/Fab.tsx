import React from 'react';
import {
  View,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
interface Props {
  title: string;
  position?: 'br' | 'bl';
  onPress: () => void;
}

// TouchableOpacity Replaced for another one to fixed android touch
const Fab = ({title, onPress, position = 'br'}: Props) => {
  const ios = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
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

  const android = () => {
    return (
      <View
        style={[
          styles.fabLocation,
          position === 'bl' ? styles.left : styles.right,
        ]}>
        <TouchableNativeFeedback
          onPress={onPress}
          background={TouchableNativeFeedback.Ripple('#28425B', false, 30)}>
          <View style={styles.fab}>
            <Text style={styles.fabText}>{title}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };

  // Supper important to return different values
  return Platform.OS === 'ios' ? ios() : android();
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
