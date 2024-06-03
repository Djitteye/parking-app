import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import bienvenue from './pages/bienvenue';
import connexion from './pages/connexion';
import inscription from './pages/inscription';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Main" component={TabNavigator} />
          <Stack.Screen name="Bienvenue" component={bienvenue} />
          <Stack.Screen name="Connexion" component={connexion} />
          <Stack.Screen name="Inscription" component={inscription} />
          
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
