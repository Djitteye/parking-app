// Header.js
import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import GrisImage from '../assets/images/gris.jpg';

const Header = ({ navigation }) => {
  return (
    <View style={styles.headerContainer}>
      <Image source={GrisImage} style={styles.logoImage} />
      <TouchableOpacity 
        style={styles.notificationButton} 
        onPress={() => navigation.navigate('Notifications')}
      >
        <Icon name="notifications-outline" size={30} color="#999" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#f4f3f3',
    padding: 10,
  },
  logoImage: {
    width: 50,
    height: 50,
  },
  notificationButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#f4f3f3',
    marginLeft: 10,
  },
});

export default Header;
