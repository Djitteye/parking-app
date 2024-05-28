/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {connexion , inscrciption , bienvenue, accueil} from "./pages"

AppRegistry.registerComponent(appName, () => App);

/*
  const images = [
    require('../assets/images/carrousel1.png'),
    require('../assets/images/carrousel2.png'),
    require('../assets/images/carrousel3.jpg'),
    require('../assets/images/carrousel4.jpg'),
    // Ajoutez autant d'images que nécessaire
  ];*/
