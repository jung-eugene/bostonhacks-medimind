import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/screens/StackNavigator.js'; 
import Assessment1 from './src/screens/Assessment1.js';

function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
