import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Accueil = () => {
  const [activeTab, setActiveTab] = useState('Accueil');

  const images = [
    { source: require('../assets/images/mercede.png'), name: 'Mercedes' },
    { source: require('../assets/images/kia.jpg'), name: 'Kia' },
    { source: require('../assets/images/renault.png'), name: 'Renault' },
    { source: require('../assets/images/toyota.jpg'), name: 'Toyota' },
    { source: require('../assets/images/audi.png'), name: 'Audi' },
  ];

  const moreImages = [
    { source: require('../assets/images/toyota1.png'), name: 'Prado 4X4' },
    { source: require('../assets/images/kia.png'), name: 'KIA EV6-2022' },
    { source: require('../assets/images/mercedesbenz.jpg'), name: 'Mercedes Benz' },
    { source: require('../assets/images/mercedesgla.jpg'), name: 'Mercedes GLA' },
  ];

  const handleImagePress = (index, type) => {
    console.log('Image cliquée:', index, 'Type:', type);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/images/gris.jpg')}
          style={{ width: 50, height: 50 }}
        />
        <TouchableOpacity style={styles.notificationIcon}>
          <Icon name="notifications-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.searchBarContainer}>
        <Icon name="search-outline" size={30} color="#999" style={styles.searchIcon} />
        <TextInput
          style={styles.searchBar}
          placeholder="Recherche..."
          placeholderTextColor="#999"
        />
        <TouchableOpacity style={styles.sortButton}>
          <Icon name="filter-outline" size={30} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.mainContent}>
        {/* Ajoutez ici le contenu principal de votre page */}
      </View>

      <View style={styles.scrollContainer}>
        <View style={styles.scrollSection}>
          <Text style={styles.scrollTitle}>Nos marques</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.imageScrollView}
            contentContainerStyle={styles.scrollViewContent}
          >
            {images.map((item, index) => (
              <View key={index} style={styles.imageContainer}>
                <TouchableOpacity onPress={() => handleImagePress(index, 'first')}>
                  <View style={styles.imageWrapper}>
                    <Image source={item.source} style={styles.scrollImage} />
                    <View style={styles.imageOverlay}>
                      <Text style={styles.imageLabel}>{item.name}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>

          <View style={styles.scrollTitleContainer}>
            <Text style={styles.scrollTitle}>Pour vous</Text>
            <TouchableOpacity style={styles.arrowIcon}>
              <Icon name="chevron-forward-outline" size={20} color="#fff" />
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.imageScrollView}
            contentContainerStyle={styles.scrollViewContent}
          >
            {moreImages.map((item, index) => (
              <View key={index} style={styles.imageContainer}>
                <TouchableOpacity onPress={() => handleImagePress(index, 'second')}>
                  <View style={styles.imageWrapper}>
                    <Image source={item.source} style={styles.scrollImageLarge} />
                    <View style={styles.imageOverlay}>
                      <Text style={styles.imageLabel}>{item.name}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>

      <View style={styles.bottomIcons}>
        {renderNavIcon('home-outline', 'Accueil', activeTab, setActiveTab)}
        {renderNavIcon('cart-outline', 'Vente', activeTab, setActiveTab)}
        {renderNavIcon('car-outline', 'Parking', activeTab, setActiveTab)}
        {renderNavIcon('chatbox-outline', 'Messages', activeTab, setActiveTab)}
        {renderNavIcon('person-outline', 'Profil', activeTab, setActiveTab)}
      </View>
    </View>
  );
};

const renderNavIcon = (iconName, label, activeTab, setActiveTab) => {
  const isActive = activeTab === label;
  const iconStyle = isActive ? styles.activeIcon : styles.inactiveIcon;
  const labelStyle = isActive ? styles.activeIconLabel : styles.inactiveIconLabel;

  return (
    <TouchableOpacity
      style={[styles.navIcon, isActive && styles.activeNavIcon]}
      onPress={() => setActiveTab(label)}
      key={label}
    >
      <Icon name={iconName} size={24} style={iconStyle} />
      <Text style={labelStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f3f3',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  mainContent: {
    flex: 1,
  },
  notificationIcon: {
    marginLeft: 10,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderColor: '#ffffff',
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchBar: {
    flex: 1,
  },
  sortButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#FD6A00',
    marginLeft: 10,
  },
  bottomIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#ffffff',
    borderTopWidth: 2,
    borderColor: '#FE7614',
  },
  navIcon: {
    alignItems: 'center',
  },
  activeNavIcon: {
    backgroundColor: '#FD6A00',
    borderRadius: 30,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  activeIcon: {
    color: '#fff',
  },
  inactiveIcon: {
    color: '#888',
  },
  activeIconLabel: {
    color: '#fff',
    marginTop: 5,
    fontSize: 14,
  },
  inactiveIconLabel: {
    color: '#888',
    marginTop: 5,
    fontSize: 14,
  },
  scrollContainer: {
    paddingBottom: 30, // Add padding to avoid touching bottom navigation
  },
  scrollSection: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  scrollTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  scrollTitle: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  arrowIcon: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#FD6A00',
  },
  imageScrollView: {
    height: 110,
    marginBottom: 20, // Add margin between scroll views and other content
  },
  scrollViewContent: {
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  imageContainer: {
    alignItems: 'center',
    marginHorizontal: 5,
  },
  imageWrapper: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollImage: {
    width: 110,
    height: 60,
    borderRadius: 10,
  },
  scrollImageLarge: {
    width: 160,
    height: 100,
    borderRadius: 10,
  },
  imageOverlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Semi-transparent background
    borderRadius: 10,
  },
  imageLabel: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  },
});

export default Accueil;
