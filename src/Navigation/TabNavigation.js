import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Chats, Groups, GoogleMap} from '../Screens';
import SCREENS from '../constants/SCREENS';
import {Dimensions, Image} from 'react-native';
import ICONS from '../constants/ICONS';
// import DrawerNavigation from './DrawerNavigation';
import DrawerNavi from './DrawerNavigation';

console.log(SCREENS);
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const setIcon = icon => {
    return {
      tabBarIcon: ({focused}) => {
        return (
          <Image
            resizeMode="contain"
            source={icon}
            style={{
              height: 25,
              width: 25,
              tintColor: focused ? 'green' : 'red',
            }}
          />
        );
      },
    };
  };
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: 'red',
        tabBarActiveTintColor: 'green',
      }}>
      <Tab.Screen
        options={setIcon(ICONS.HOME)}
        name={SCREENS.DRAWER}
        component={DrawerNavi}
      />
      <Tab.Screen
        options={setIcon(ICONS.CHAT)}
        name={SCREENS.CHATS}
        component={Chats}
      />
      <Tab.Screen
        options={setIcon(ICONS.GROUP)}
        name={SCREENS.GROUPS}
        component={Groups}
      />
      <Tab.Screen
        options={setIcon(ICONS.GOOGLE_MAP)}
        name={SCREENS.GOOGLE_MAP}
        component={GoogleMap}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
