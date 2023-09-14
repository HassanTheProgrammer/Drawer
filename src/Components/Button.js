//import liraries
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

// create a component
const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity styles={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: 'orange',
    padding: 15,
    borderRadius: 10,
  },
});

//make this component available to the app
export default Button;
