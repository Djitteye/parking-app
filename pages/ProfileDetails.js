// pages/ProfileDetails.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import ImageZoom from 'react-native-image-zoom';

const ProfileDetails = ({ route }) => {
  const navigation = useNavigation();
  const { firstName, lastName, phoneNumber, email, profileImage } = route.params;
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Profil')}>
        <Icon name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Image source={profileImage} style={styles.profileImage} />
      </TouchableOpacity>
      <Text style={styles.detailText}>Nom: {lastName}</Text>
      <Text style={styles.detailText}>Prénom: {firstName}</Text>
      <Text style={styles.detailText}>Numéro: {phoneNumber}</Text>
      <Text style={styles.detailText}>Email: {email}</Text>

      <Modal visible={modalVisible} transparent={true} onRequestClose={() => setModalVisible(false)}>
        <ImageZoom cropWidth={300} cropHeight={300} imageWidth={200} imageHeight={200}>
          <Image source={profileImage} style={{ width: 200, height: 200 }} />
        </ImageZoom>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    marginBottom: 20,
  },
  detailText: {
    fontSize: 18,
    marginVertical: 10,
  },
});

export default ProfileDetails;
