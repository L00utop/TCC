import React from "react";
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import { Feather } from 'react-native-feather';

import * as Animatable from 'react-native-animatable';

import { useNavigation } from "@react-navigation/native";


export default function Home() {
    const Navigation = useNavigation();
    return(
    <ScrollView showsVerticalScrollIndicator={false}
    style={{backgroundColor: 'white'}}>
        <View style={styles.header}>
            <View style={styles.inputArea}>
                <Feather name="search" size={24} color="black"/>
                <TextInput placeholder=" O que procura?" style={styles.input}/>
            </View>
        </View>
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginVertical: 20
    },

    inputArea: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        width: '98%',
        backgroundColor: 'white',
        elevation: 2,
        height: 37,
        borderRadius: 10,
    }
    
});