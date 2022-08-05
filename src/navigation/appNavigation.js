import React from 'react';
import HomeScreen from '../screens/Home';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {navigationRef} from './root-navigation';

const Stack = createNativeStackNavigator();

const AppNavigation = () => (
  // <NavigationContainer ref={navigationRef}>
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigation;
