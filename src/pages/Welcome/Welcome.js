import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function Welcome() {
    return(
        <View style={styles.container}>


            <View style={styles.containerForm}>
            <Text style={styles.title}>Procura trabalho? Deixe conosco!</Text>
            <Text style={styles.texto}>Crie uma conta para iniciar</Text>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonTxt}>Começar</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#38a69d',
    },

    containerLogo:{
        flex: 2,
        backgroundColor: '38a69d',
        justifyContent: 'center',
        alignItems: 'center,'
    },

    containerForm:{
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius:25,
        paddingStart: '25%',
        paddingEnd: '25%'
    },

    title:{
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 30,
        marginBottom: 12
    },

    texto:{
        color: '#a1a1a1'
    },

    button: {
        position: 'absolute',
        backgroundColor: '#38a69d',
        borderRadius: 50,
        width: '60%',
        paddingVertical: 8,
        alignSelf: 'center',
        bottom: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },


});
