//import liraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import {ScreenOne, ScreenTwo, ScreenThree, ScreenFour} from '../Screens';
import SCREENS from '../constants/SCREENS';

// create a component
const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={SCREENS.SCREEN_ONE} component={ScreenOne} />
      <Stack.Screen name={SCREENS.SCREEN_TWO} component={ScreenTwo} />
      <Stack.Screen name={SCREENS.SCREEN_THREE} component={ScreenThree} />
      <Stack.Screen name={SCREENS.SCREEN_FOUR} component={ScreenFour} />
    </Stack.Navigator>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default StackNavigation;
