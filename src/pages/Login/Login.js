import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from "react-native";

import * as Animatable from 'react-native-animatable';

import { useNavigation } from "@react-navigation/native";

import Parse from 'parse/react-native.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

Parse.setAsyncStorage(AsyncStorage);
Parse.initialize('Ax352cf6WQNDf4nGdSFLTNbgGhZ8tbXq0apgcz3D', 'UaNdcZVED7IP4CSTpWZWxbfxHSejC3OHp5oxRWQD');
Parse.serverURL = 'https://parseapi.back4app.com/';


let dados = {
    Email: "",
    Password: "",
}

export default function Login(props) {
    const navigation = useNavigation();


    async function logar(email, senha){
        let queryUser = new Parse.Query('Usuario');
        queryUser.equalTo("Email", email);
    
        let resultUser = (await queryUser.find())[0];    
        if(resultUser != undefined){
            if(resultUser.get("Password") == senha ){
                console.log("Logado")
                props.navigation.navigate("Home", resultUser)
            }
            else{
                console.log("Senha incorreta")
            }
        }
        else{
            console.log("Usuário não encontrado")
        }
    }


    return(
    <View style={styles.container}>
        <Animatable.View animation="fadeInLeft" delay={400} style={styles.containerHeader}>
        <Text style={styles.text}>Bem vindo(a)</Text>
        </Animatable.View>
        
        <Animatable.View animation="fadeInUp" style={styles.containerForm}>
            <Text style={styles.title}>Email</Text>
            <TextInput placeholder="Seu email" style={styles.input} onChange={(email)=>{
                dados.Email = email.nativeEvent.text;
            }}/>

            <Text style={styles.title}>Senha</Text>
            <TextInput placeholder="Sua senha" secureTextEntry={true} style={styles.input} onChange={(senha)=>{
                dados.Password = senha.nativeEvent.text;
            }}/>
            <TouchableOpacity></TouchableOpacity>

            <TouchableOpacity style={styles.button} 
                onPress={()=>{logar(dados.Email,dados.Password)}}>
                <Text style={styles.buttonTxt}>Acessar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonCad}
            onPress={ () => navigation.navigate('SignIn')}>
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