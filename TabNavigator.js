import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Header from './pages/header';
import Accueil from './pages/accueil';
import Reservation from './pages/reservation';
import Messages from './pages/messages';
import Parking from './pages/parking';
import Profil from './pages/profil';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <>
      <Header />
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Accueil') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Reservation') {
              iconName = focused ? 'cart' : 'cart-outline';
            } else if (route.name === 'Messages') {
              iconName = focused ? 'chatbox' : 'chatbox-outline';
            } else if (route.name === 'Parking') {
              iconName = focused ? 'car' : 'car-outline';
            } else if (route.name === 'Profil') {
              iconName = focused ? 'person' : 'person-outline';
            }
            return <Icon name={iconName} size={28} color={color} />;
          },
          tabBarActiveTintColor: '#FD6A00',
          tabBarInactiveTintColor: 'black',
          
         
          headerShown: false,
        })}
      >
        <Tab.Screen name="Accueil" component={Accueil} />
        <Tab.Screen name="Reservation" component={Reservation} />
        <Tab.Screen name="Parking" component={Parking} />
        <Tab.Screen name="Messages" component={Messages} />
        <Tab.Screen name="Profil" component={Profil} />
      </Tab.Navigator>
    </>
  );
};

export default TabNavigator;
