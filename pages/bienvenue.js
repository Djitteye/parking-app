// WelcomeScreen.js

import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

const Bienvenue = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/blanc.jpg')}
        style={styles.image}
      />
      <Text style={styles.title}>Djitteye auto service</Text>
      <Text style={styles.subtitle}>
        Parcourez notre sélection exceptionnelle pour trouver la voiture de vos rêves.
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="Log In" onPress={() => navigation.navigate('Connexion')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Sign Up" onPress={() => navigation.navigate('Inscription')} />
      </View>
       <View style={styles.buttonContainer}>
        <Button title="Home" onPress={() => navigation.navigate('Accueil')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingBottom: 100,
  },
  image: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 70,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 24,
    color: 'black',
    marginTop: 70,
  },
  buttonContainer: {
    marginTop: 20,
    width: '80%',
  },
});

export default Bienvenue;




/*
// TabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Accueil from './pages/accueil';
import Reservation from './pages/reservation';
import AutresEcrans from './pages/autresEcrans'; // Importez d'autres écrans selon vos besoins

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Accueil') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Reservation') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'AutresEcrans') {
            iconName = focused ? 'apps' : 'apps-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#FD6A00',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Accueil" component={Accueil} />
      <Tab.Screen name="Reservation" component={Reservation} />
      <Tab.Screen name="AutresEcrans" component={AutresEcrans} />
    </Tab.Navigator>
  );
};

export default TabNavigator;



*/ 
