import React from "react";
import { View, Text, StyleSheet, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function New(props){
    return(
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
        <Image source={props.cover}
        style={styles.cover}
        />
    </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: 'white',
        height: 250,
        width:  200,
        elevation: 2,
        borderRadius: 10,
        padding: 15,
        marginRight: 30,
        marginLeft: 2,
        MarginBottom: 5
    },

    cover: {
        width: 170,
        height: 110,
        borderRadius: 10,
    }
})