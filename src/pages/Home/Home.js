import React from "react";
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";
import { Feather } from 'react-native-feather';
import * as Animatable from 'react-native-animatable';

import New from './New/New'



export default function Home() {
    const Navigation = useNavigation();
    return(
    <ScrollView showsVerticalScrollIndicator={false}
    style={{backgroundColor: 'white'}}>
        <View style={styles.header}>
            <View style={styles.inputArea}>
                <TextInput placeholder=" O que procura?" style={styles.input} />
            </View>
        </View>

        <View style={styles.contentNew}>
            <Text style={styles.title}>Novidades</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal:15}}>
            <New
            cover={require('../../../assets/Manutencao.png')}
            name="Manutenção de computadores"
            Description="Manutenção de componentes e de computadores em geral."
            onpress={()=> {}}
            />
        </ScrollView>

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
        height: 37,
        borderRadius: 10,
    },

    input: {
        borderBottomWidth: 1,
        height: 40,
        width: '100%',
        marginBottom: 12,
        fontSize: 16,
        borderRadius: 4,
        marginLeft: 20,
    },

    contentNew: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center'
    },

    title: {
        paddingHorizontal: 15,
        fontFamily: 'Kanit_500Medium',
        color: '#4f4a4a'
    }
    
});