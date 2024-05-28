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
