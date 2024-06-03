// header.js
import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import GrisImage from '../assets/images/gris.jpg'; // Importez votre image

const Header = ({ navigation }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, backgroundColor:'#f4f3f3' }}>
      {/* Utilisez l'image importée ici */}
      <Image source={GrisImage} style={{ width: 50, height: 50 }} />
      <TouchableOpacity style={{ marginRight: 10 }} onPress={() => navigation.navigate('Notifications')}>
        <Icon name="notifications-outline" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
