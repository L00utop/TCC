import React from "react";
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from "react-native";

import * as Animatable from 'react-native-animatable';

import { useNavigation } from "@react-navigation/native";

import Parse from 'parse/react-native.js';



let dados = {
    email: "",
    pass: "",
    name: ""
}

export default function SignIn(props) {
    const Navigation = useNavigation();

    async function cadastrar(nome,email,senha){
        const newUser = new Parse.Object('Usuario');
        newUser.set('Name', nome);
        newUser.set('Email', email);
        newUser.set('Password', senha);
        try {
          const result = await newUser.save();
          console.log(result);
          console.log('Usuario created', result);
          props.navigation.navigate('Home',newUser);
        } catch (error) {
          console.error('Error while creating Usuario: ', error);
        }
      };

    return(
    <View style={styles.container}>
        <Animatable.View animation="fadeInLeft" delay={400} style={styles.containerHeader}>
        <Text style={styles.text}>Crie sua conta</Text>
        </Animatable.View>
        
        <Animatable.View animation="fadeInUp" style={styles.containerForm}>
            <Text style={styles.title}>Nome</Text>
            <TextInput placeholder="Seu nome" style={styles.input} onChange={(nome)=>{ dados.name = nome.nativeEvent.text}}/>

            <Text style={styles.title}>Email</Text>
            <TextInput placeholder="Seu email" style={styles.input} onChange={(email)=>{ dados.email = email.nativeEvent.text}}/>

            <Text style={styles.title}>Senha</Text>
            <TextInput placeholder="Sua senha" secureTextEntry={true} style={styles.input} onChange={(password)=>{ dados.pass = password.nativeEvent.text}}/>

            <TouchableOpacity style={styles.button} 
            onPress={ () => {
                cadastrar(dados.name,dados.email,dados.pass);
            }}>
                <Text style={styles.buttonTxt}>Cadastrar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonCad}
            onPress={ () => Navigation.navigate('Login')}>
                <Text style={styles.cadTxt}>Já possui conta? Faça login.</Text>
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
        paddingLeft: 5,
        fontSize: 16,
        borderRadius: 4
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