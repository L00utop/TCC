import React from 'react';
import { StatusBar } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


import Routes from './src/routes/Stack';



const Drawer = createDrawerNavigator();


export default function App() {
  return (
      <NavigationContainer>
        <StatusBar backgroundColor="#38a69d" barStyle={"dark-content"} />
        <Routes/>
      </NavigationContainer>      
  );
}
