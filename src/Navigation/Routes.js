//import liraries
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './StackNavigation';
import TabNavigation from './TabNavigation';

// create a component
const Routes = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
      {/* <TabNavigation /> */}
    </NavigationContainer>
  );
};

//make this component available to the app
export default Routes;
