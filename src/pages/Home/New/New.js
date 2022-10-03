import React from "react";
import { View, Text, StyleSheet, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';

export default function New(props){
    return(
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
        <Image source={props.cover}
        style={styles.cover}
        />

        <View style={styles.content}>
            <Text style={styles.title}>{props.name}</Text>

            <View style={styles.dot}></View>

            <Text style={styles.badge}>Novo</Text>
        </View>

        <Text style={styles.description}>{props.description}</Text>

        <View style={styles.footer}>
            <View style={{width: '80%'}}>
                <Text style={styles.price}>R$ 240,30</Text>
            </View>
            <View style={{width: '20%'}}>
                <AntDesign name="plus" size={20} color="black" />
            </View>
        </View>
        

    </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: 'white',
        height: 250,
        width:  190,
        borderRadius: 10,
        padding: 14,
        marginRight: 30,
        marginLeft: 2,
        MarginBottom: 5
    },

    cover: {
        width: 170,
        height: 110,
        borderRadius: 10,
    },
    
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },

    title: {
        fontFamily: 'Kanit_500Medium',
        fontSize: 12,
        color: '#4f4a4a'
    },

    badge: {
        fontFamily: 'Kanit_500Medium',
        fontSize: 12

    },
    
    dot: {
        width: 6,
        height: 6,
        borderRadius: 6,
        backgroundColor: 'lightblue',
        marginHorizontal: 6,
    },

    description: {
        fontFamily: 'Kanit_500Medium',
        fontSize: 12,
        color: '#4f4a4a'
    },
    footer: {
        flexDirection: 'row',
        marginTop: 5,
        alignItems: 'center',
        width: '100%'
    }
})