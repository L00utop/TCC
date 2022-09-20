import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import * as Animatable from 'react-native-animatable'

import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
    const Navigation = useNavigation();
    return(
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                
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
        backgroundColor: 'black',
    },

    containerLogo:{
        flex: 2,
        backgroundColor: 'Black',
        justifyContent: 'center',
        alignItems: 'center,'
    },

    containerForm:{
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius:25,
        paddingVertical: '15%',
        paddingTop: 5,
        paddingStart: '25%',
        paddingEnd: '25%',
        
    },

    title:{
        fontSize: 30,
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
        backgroundColor: 'black',
        borderRadius: 50,
        width: '60%',
        paddingVertical: 8,
        alignSelf: 'center',
        bottom: '10%',
        alignItems: 'center',
        justifyContent: 'center',
    },


});
