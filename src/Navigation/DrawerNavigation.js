import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Home, Chats, Groups, GoogleMap} from '../Screens';
import SCREENS from '../constants/SCREENS';

const Drawer = createDrawerNavigator();

const DrawerNavi = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={SCREENS.HOME} component={Home} />
      <Drawer.Screen name={SCREENS.CHATS} component={Chats} />
      <Drawer.Screen name={SCREENS.GROUPS} component={Groups} />
      <Drawer.Screen name={SCREENS.GOOGLE_MAP} component={GoogleMap} />
    </Drawer.Navigator>
  );
};

export default DrawerNavi;
