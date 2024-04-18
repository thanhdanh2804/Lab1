import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NameInputScreen from './screens/NameInputScreen';
import Project1Screen from './screens/Project1Screen';
import Project2Screen from './screens/Project2Screen';
import Project3Screen from './screens/Project3Screen';
import Project4Screen from './screens/Project4Screen';
import Project5Screen from './screens/Project5Screen';
import Project6Screen from './screens/Project6Screen';
import Project7Screen from './screens/Project7Screen';
import Project8Screen from './screens/Project8Screen';
import Calculator from './screens/Calculator';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="NameInput">
        <Stack.Screen name="NameInput" component={NameInputScreen} />
        <Stack.Screen name="Project1" component={Project1Screen} />
        <Stack.Screen name="Project2" component={Project2Screen} />
        <Stack.Screen name="Project3" component={Project3Screen} />
        <Stack.Screen name="Project4" component={Project4Screen} />
        <Stack.Screen name="Project5" component={Project5Screen} />
        <Stack.Screen name="Project6" component={Project6Screen} />
        <Stack.Screen name="Project7" component={Project7Screen} />
        <Stack.Screen name="Project8" component={Project8Screen} />
        <Stack.Screen name="Calculator" component={Calculator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
