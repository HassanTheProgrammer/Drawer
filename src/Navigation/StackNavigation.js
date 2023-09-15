//import liraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {Home, Chats, Groups, GoogleMap} from '../Screens';
import SCREENS from '../constants/SCREENS';
import MainStack from './MainStack';
import TabNavigation from './TabNavigation';

const Stack = createNativeStackNavigator();
// create a component
const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={SCREENS.TABS} component={TabNavigation} />
      <Stack.Screen name={SCREENS.CHATS} component={Chats} />
      <Stack.Screen name={SCREENS.GROUPS} component={Groups} />
      <Stack.Screen name={SCREENS.GOOGLE_MAP} component={GoogleMap} />
    </Stack.Navigator>

    // <Drawer.Navigator>
    // <Drawer.Screen name={SCREENS.HOME} component={Home} />
    // <Drawer.Screen name={SCREENS.CHATS} component={Chats} />
    // <Drawer.Screen name={SCREENS.GROUPS} component={Groups} />
    // <Drawer.Screen name={SCREENS.GOOGLE_MAP} component={GoogleMap} />
    // {/* {MainStack(Stack)} */}
    // </Drawer.Navigator>
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
