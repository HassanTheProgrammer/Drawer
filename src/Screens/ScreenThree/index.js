//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from '../../Components/Button';
import SCREENS from '../../constants/SCREENS';

// create a component
const ScreenThree = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button
        title="Go To Scrren Four"
        onPress={() => navigation.navigate(SCREENS.SCREEN_FOUR)}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default ScreenThree;
