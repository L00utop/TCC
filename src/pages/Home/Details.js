import React from "react";
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from "react-native";

import * as Animatable from 'react-native-animatable';

import { useNavigation } from "@react-navigation/native";


export default function Details() {
    const Navigation = useNavigation();
    return(
    <View>
        <Text style={style.texto}>Teste</Text>
    </View>
    );
}

const style = StyleSheet.create({
    texto: {
        fontSize: 18,
        marginBottom: 20
    },
});