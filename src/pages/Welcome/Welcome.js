import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Logo from "../../../assets/LogoTCC.png";

import * as Animatable from 'react-native-animatable';

import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
    const Navigation = useNavigation();
    return(
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Animatable.Image animation="fadeInUp" duration={1700} style={styles.Image} source={Logo}/>
                <Animatable.Text animation="fadeInUp" duration={2300} style={styles.nomeLogo}>OCTO TECH</Animatable.Text>
            </View>


            <Animatable.View animation="fadeInUp" duration={1400} style={styles.containerForm}>
                <Text style={styles.title}>Procura trabalho? Deixe conosco!</Text>
                <Text style={styles.texto}>Crie uma conta para iniciar</Text>

                <TouchableOpacity
                style={styles.button}
                onPress={ () => Navigation.navigate('SignIn')}>
                    
                    <Text style={styles.buttonTxt}>Começar</Text>
                </TouchableOpacity>
            </Animatable.View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#3382fb',
    },

    containerLogo:{
        flex: 2,
        backgroundColor: '#3382fb',
        justifyContent: 'center',
        alignItems: 'center',
    },

    nomeLogo: {
        color: 'white',
        fontSize: 50,
        fontWeight: 'bold',
        marginTop: 6,
        marginBottom: 60,
    },

    Image: {
        flex: 1,
        width: 270,
        height: 270,
        resizeMode: 'contain',
        alignItems: 'center',
    },

    containerForm:{
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 25,
        borderTopRightRadius:25,
        paddingVertical: '15%',
        paddingTop: 5,
        paddingStart: '25%',
        paddingEnd: '25%',
        
    },

    title:{
        fontSize: 30,
        color: '#3382fb',
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 0,
        lineHeight: 33
    },

    texto:{
        color: '#a1a1a1',
        paddingVertical: '5%',
    },

    buttonTxt:{
        color: '#ffff'
    },

    button: {
        position: 'absolute',
        backgroundColor: '#539afc',
        borderRadius: 50,
        width: '60%',
        paddingVertical: 8,
        alignSelf: 'center',
        bottom: '10%',
        alignItems: 'center',
        justifyContent: 'center',
    },


});
