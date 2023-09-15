import React from 'react';
import SCREENS from '../constants/SCREENS';
import TabNavigation from './TabNavigation';

// create a component
const MainStack = () => {
  return (
    <>
      <Stack.Screen name={SCREENS.TABS} component={TabNavigation} />
    </>
  );
};

export default MainStack;
