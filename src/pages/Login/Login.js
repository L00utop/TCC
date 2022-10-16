import React from "react";
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from "react-native";

import * as Animatable from 'react-native-animatable';

import { useNavigation } from "@react-navigation/native";


export default function Login() {
    const Navigation = useNavigation();
    return(
    <View style={styles.container}>
        <Animatable.View animation="fadeInLeft" delay={400} style={styles.containerHeader}>
        <Text style={styles.text}>Bem vindo(a)</Text>
        </Animatable.View>
        
        <Animatable.View animation="fadeInUp" style={styles.containerForm}>
            <Text style={styles.title}>Email</Text>
            <TextInput placeholder="Seu email" style={styles.input}/>

            <Text style={styles.title}>Senha</Text>
            <TextInput placeholder="Sua senha" secureTextEntry={true} style={styles.input}/>

            <TouchableOpacity style={styles.button} 
            onPress={ () => Navigation.navigate('Home')}>
                <Text style={styles.buttonTxt}>Acessar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonCad}
            onPress={ () => Navigation.navigate('SignIn')}>
                <Text style={styles.cadTxt}>Não possui conta? Cadastre-se.</Text>
            </TouchableOpacity>
        </Animatable.View>
    </View>
    );  
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3382fb',
    },
    
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%'
    },

    text: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff'
    },

    containerForm: {
        flex: 1,
        backgroundColor: '#ffff',
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },

    title:{
        fontSize: 20,
        marginTop: 28
    },  

    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
        borderRadius: 4,
        paddingLeft: 5,
    }, 

    button: {
        backgroundColor: '#539afc',
        width: '100%',
        height: 40,
        borderRadius: 25,
        marginTop: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonTxt: {
        color: '#fff',
        fontSize: 18,
    },  

    buttonCad: {
        marginTop: 14,
        alignSelf: 'center',
    },

    cadTxt: {
        color: '#a1a1a1'
    }

});