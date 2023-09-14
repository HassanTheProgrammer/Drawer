//import liraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SCREENS from '../../constants/SCREENS';
import Button from '../../Components/Button';

// create a component
const ScreenFour = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button
        title="Go To Screen One"
        onPress={() => navigation.navigate(SCREENS.SCREEN_ONE)}
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
export default ScreenFour;
