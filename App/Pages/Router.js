
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from './WelcomeScreen';
import Sign from './SignScreen';
import Info from './InfoScreen';

const Stack = createNativeStackNavigator();



function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="WelcomeScreen" component={Welcome} options={{headerShown:false}}/>
        <Stack.Screen name="SignScreen" component={Sign} options={{headerShown:false}}/>
        <Stack.Screen name="InfoScreen" component={Info} options={{headerShown:false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;