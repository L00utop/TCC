import react from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

import * as Animatable from 'react-native-animatable'


import Welcome from '../pages/Welcome/Welcome';
import Profile from '../pages/Profile/Profile'
import Login from '../pages/Login/Login';
import SignIn from '../pages/SignIn/SignIn';
import Home from '../pages/Home/Home';
import Details from '../pages/Home/DetailsComponent/Details'



const Stack = createNativeStackNavigator();


export default function Routes(props) { 
    console.log(props)
    const Navigation = useNavigation();
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false }}
            />

            <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
            />

            <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerShown: false }}
            />

        <Stack.Screen 
            name="Home"
            component={Home}
            options={{ headerShown: true, headerShadowVisible: false, headerTitle: ()=> 
            <Animatable.View animation='fadeInLeft' delay={100} >
                <Text style={{fontFamily: 'Montserrat_800ExtraBold', fontSize: 18}}>Início</Text>
            </Animatable.View>,  
            headerLeft: ()=> null,  
            headerRight: ()=> 
            <Animatable.View animation='fadeInRight' >
            <TouchableOpacity style={{ marginRight: 15 }} onPress={ () => Navigation.navigate('Perfil')}>
                <FontAwesome name="user" size={30} color="black" />
            </TouchableOpacity>
            </Animatable.View>}} 
            />
            
        <Stack.Screen
            name="Perfil"
            component={Profile}
            options={{headerShown: true, headerShadowVisible: false, 
                headerTitle: ()=> 
                <Animatable.View animation='slideInDown' duration={900}>
                    <Text style={{fontFamily: 'Montserrat_800ExtraBold', fontSize: 18}}>Perfil</Text>
                </Animatable.View>,
                headerRight: ()=> 
                <Animatable.View animation='fadeInRight' duration={900}>
                <TouchableOpacity style={{ marginRight: 15 }} onPress={ () => Navigation.navigate('Perfil')}>
                    <FontAwesome name="gear" size={30} color="black" />
                </TouchableOpacity>
                </Animatable.View>}}
            />
            
        <Stack.Screen
            name="Details"
            component={Details}
            options={{ headerShown: true, headerShadowVisible: false, headerTitle: ()=> 
                <Animatable.View animation='fadeInRight' duration={900}>
                    <Text style={{fontFamily: 'Montserrat_800ExtraBold', fontSize: 18}}>Detalhes</Text>
                </Animatable.View>}}
                />
        </Stack.Navigator>
    );
}
