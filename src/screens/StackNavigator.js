// StackNavigator.js

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {LoginScreen, SignupScreen} from './AuthScreens.js'; // Replace with the path to your HomeScreen component
import Assessment1 from './Assessment1.js';
import Assessment2 from './Assessment2.js';
import Assessment3 from './Assessment3.js';
import Assessment4 from './Assessment4.js';
import Assessment5 from './Assessment5.js';
import Assessment6 from './Assessment6.js';
import Assessment7 from './Assessment7.js';
import Assessment8 from './Assessment8.js';
import Assessment9 from './Assessment9.js';
import DashboardScreen from './DashboardScreen.js';
import FoodRecommendation from './FoodRecommendation.js';
import DashboardScrean from './DashboardScreen.js'

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
    <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
    <Stack.Screen name="A1" component={Assessment1} options={{ headerShown: false}} />
    <Stack.Screen name="A2" component={Assessment2} options={{ headerShown: false}} />
    <Stack.Screen name="A3" component={Assessment3} options={{ headerShown: false}} />
    <Stack.Screen name="A4" component={Assessment4} options={{ headerShown: false}} />
    <Stack.Screen name="A5" component={Assessment5} options={{ headerShown: false}} />
    <Stack.Screen name="A6" component={Assessment6} options={{ headerShown: false}} />
    <Stack.Screen name="A7" component={Assessment7} options={{ headerShown: false}} />
    <Stack.Screen name="A8" component={Assessment8} options={{ headerShown: false}} />
    <Stack.Screen name="A9" component={Assessment9} options={{ headerShown: false}} />
    {/* <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ headerShown: false}} />
    <Stack.Screen name="FoodRec" component={FoodRecommendation} options={{ headerShown: false}} />
    <Stack.Screen name="Dashboard" component={DashboardScrean} options={{ headerShown: false}} /> */}

  </Stack.Navigator>
  );
};

export default StackNavigator;
