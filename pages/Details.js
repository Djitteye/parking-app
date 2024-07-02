// screens/Details.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Details = ({ route }) => {
  const { item } = route.params;
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      {/* Back Arrow */}
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.navigate('pourVous')}
      >
        <Icon name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

      {/* Item Image */}
      <Image source={item.itemImage} style={styles.itemImage} />

      {/* Item Details */}
      <View style={styles.detailsContainer}>
        <View style={styles.titleContainer}>
          <View>
            <Text style={styles.title}>{item.itemName}</Text>
            <Text style={styles.price}>{item.itemPrice}</Text>
          </View>
          <TouchableOpacity style={styles.reserveButton}>
            <Text style={styles.reserveButtonText}>Réserver</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.detailTextContainer}>
          <Icon name="car-sport-outline" size={20} color="#000" />
          <Text style={styles.detailText}>Marque: {item.brand}</Text>
        </View>
        <View style={styles.detailTextContainer}>
          <Icon name="calendar-outline" size={20} color="#000" />
          <Text style={styles.detailText}>Année: {item.year}</Text>
        </View>
        <View style={styles.detailTextContainer}>
          <Icon name="speedometer-outline" size={20} color="#000" />
          <Text style={styles.detailText}>Kilométrage: {item.mileage} km</Text>
        </View>
        <View style={styles.detailTextContainer}>
          <Icon name="flame-outline" size={20} color="#000" />
          <Text style={styles.detailText}>Carburant: {item.fuel}</Text>
        </View>
        <View style={styles.detailTextContainer}>
          <Icon name="swap-horizontal-outline" size={20} color="#000" />
          <Text style={styles.detailText}>Transmission: {item.transmission}</Text>
        </View>
        <View style={styles.detailTextContainer}>
          <Icon name="color-palette-outline" size={20} color="#000" />
          <Text style={styles.detailText}>Couleur: {item.color}</Text>
        </View>
        <View style={styles.detailTextContainer}>
          <Icon name="flash-outline" size={20} color="#000" />
          <Text style={styles.detailText}>Puissance: {item.power} ch</Text>
        </View>
        <View style={styles.detailTextContainer}>
          <Icon name="water-outline" size={20} color="#000" />
          <Text style={styles.detailText}>Capacité du réservoir: {item.tankCapacity} L</Text>
        </View>
        <View style={styles.detailTextContainer}>
          <Icon name="key-outline" size={20} color="#000" />
          <Text style={styles.detailText}>Nombre de portes: {item.doors}</Text>
        </View>
        <View style={styles.detailTextContainer}>
          <Icon name="person-outline" size={20} color="#000" />
          <Text style={styles.detailText}>Nombre de sièges: {item.seats}</Text>
        </View>
        <View style={styles.detailTextContainer}>
          <Icon name="leaf-outline" size={20} color="#000" />
          <Text style={styles.detailText}>Consommation: {item.consumption} l/100km</Text>
        </View>
        <View style={styles.detailTextContainer}>
          <Icon name="cog-outline" size={20} color="#000" />
          <Text style={styles.detailText}>Équipements:</Text>
          <Text style={styles.detailText}>{item.equipment}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FD6A00',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
  },
  itemImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  detailsContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 1,
    padding: 20,
    marginTop: -20,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#FD6A00',
  },
  reserveButton: {
    backgroundColor: '#FD6A00',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    width:140,
  },
  reserveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign:'center',
  },
  detailTextContainer: {
    backgroundColor: '#fff',
    borderColor: '#f4f3f3',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailText: {
    color: 'black',
    fontSize: 16,
    marginLeft: 10,
  },
});

export default Details;
