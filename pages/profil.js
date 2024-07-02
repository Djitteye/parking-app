// pages/Profil.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Profil = () => {
  const navigation = useNavigation();
  const username = "Djitteye Abdoulaye";
  const profileImage = require('../assets/images/sn.jpg');

  const handleLogout = () => {
    console.log('Déconnexion');
  };

  const handleProfileClick = () => {
    navigation.navigate('ProfileDetails', {
      firstName: "Abdoulaye",
      lastName: "Djitteye",
      phoneNumber: "79919122",
      email: "abdoulayedjitteye5@email.com",
      profileImage: require('../assets/images/sn.jpg') // Assurez-vous que le chemin est correct
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.editButton}>
        <Icon name="create-outline" size={24} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.profileContainer} onPress={handleProfileClick}>
        <Image source={profileImage} style={styles.profileImage} />
        <Text style={styles.username}>{username}</Text>
      </TouchableOpacity>

      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Confidentialite')}>
          <Icon name="lock-closed-outline" size={24} color="#000" />
          <Text style={styles.optionText}>Confidentialité</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Langue')}>
          <Icon name="language-outline" size={24} color="#000" />
          <Text style={styles.optionText}>Langue</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Parametre')}>
          <Icon name="settings-outline" size={24} color="#000" />
          <Text style={styles.optionText}>Paramètres</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Déconnexion</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 40,
    backgroundColor: '#fff',
  },
  editButton: {
    position: 'absolute',
    top: 10,
    right: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
  },
  username: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555'
  },
  optionsContainer: {
    marginTop: 40,
    width: '100%',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  optionText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#555',
  },
  logoutButton: {
    position: 'absolute',
    bottom: 30,
    width: '80%',
    backgroundColor: '#FD6A00',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Profil;
