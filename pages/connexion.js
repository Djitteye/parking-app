import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const Connexion = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    // Insérer ici la logique de connexion (envoi des données au backend, etc.)
    console.log('Phone Number:', phoneNumber);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
    // Réinitialisation des champs après la connexion
    setPhoneNumber('');
    setPassword('');
  };

  const handleForgotPassword = () => {
    // Insérer ici la logique pour gérer le lien "Mot de passe oublié ?"
    console.log('Forgot Password');
  };

  const handleSignUp = () => {
    // Insérer ici la logique pour gérer le lien "S'inscrire"
    console.log('Sign Up');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/gris.jpg')}
        style={styles.image}
      />
      <Text style={styles.title}>Connectez-vous!</Text>
      
      <View style={styles.inputContainer}>
        <Icon name="phone" size={20} color="#888" style={styles.icon} />
        <TextInput 
          style={styles.input}
          placeholder="Téléphone"
          placeholderTextColor="#888"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
        />
      </View>
      
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#888" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          placeholderTextColor="#888"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <View style={styles.optionsContainer}>
        <TouchableOpacity onPress={() => setRememberMe(!rememberMe)}>
          <Text style={styles.optionsText}>Se souvenir de moi</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.optionsText}>Mot de passe oublié ?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Se connecter</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={handleSignUp}>
        <Text style={styles.signUpText}>
          Vous n'avez pas de compte ? <Text style={styles.signUpLink}>Inscrivez-vous</Text>
        </Text>
      </TouchableOpacity>

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f3f3',
    marginBottom: 300,
    marginTop: 200,
  },
  image: {
    width: 200,
    height: 200,
  },
  title: {
    
    fontSize: 38,
    fontWeight: 'bold',
    color: 'black',
    paddingBottom: 25,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',
    marginBottom: 20,
    width: 300,
    height: 54,
  },
  icon: {
    marginLeft: 10,
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 17,
    padding: 10,
    color: 'black',
  },
  optionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  optionsText: {
    paddingLeft: 25,
    color: 'black',
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#FD6A00',
    width: 168,
    padding: 10,
    borderRadius: 30,
    marginBottom: 20,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  signUpText: {
   
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  signUpLink: {
    color: 'blue',
  },
});

export default Connexion;