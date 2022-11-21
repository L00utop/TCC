import React from "react";
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from "react-native";

import * as Animatable from 'react-native-animatable';

import SwiperComponent from "./Swiper/Swiper";

import { useNavigation } from "@react-navigation/native";


export default function Details(props) {
    const Navigation = useNavigation();
    console.log(props.route.params)
    
    return(
    <View>
        <SwiperComponent/>
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