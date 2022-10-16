import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts, Kanit_400Regular, Kanit_500Medium, Kanit_700Bold } from "@expo-google-fonts/kanit";


import Routes from './src/routes/Stack';



export default function App() {
  let [fontsLoaded] = useFonts({
    Kanit_400Regular,
    Kanit_500Medium,
    Kanit_700Bold,
  });
  return (
      <NavigationContainer>
        <StatusBar backgroundColor="#3382fb" barStyle={"dark-content"} />
        <Routes/>
      </NavigationContainer>      
  );
}
