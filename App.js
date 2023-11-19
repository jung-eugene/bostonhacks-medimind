import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/screens/StackNavigator.js'; 
import ChatGPT35 from './src/screens/test.js';
import ChatSymptomCheckerScreen from './src/screens/SymptomChecker.js';

function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
