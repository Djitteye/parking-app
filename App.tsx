// In App.js in a new project

import * as React from 'react';
import { View, Text,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import bienvenue from './pages/bienvenue';
import connexion from './pages/connexion';
import inscription from './pages/inscription';
import accueil from './pages/accueil';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Ecran d'accueil</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return ( 
    <NavigationContainer>
       <Stack.Navigator screenOptions={{ headerShown: false }}>
      
        <Stack.Screen name="Bienvenue" component={bienvenue} />
        <Stack.Screen name="Connexion" component={connexion} />
        <Stack.Screen name="Inscription" component={inscription} />
        <Stack.Screen name="Accueil" component={accueil} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;