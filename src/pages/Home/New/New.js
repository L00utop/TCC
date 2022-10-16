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
        
        <Text style={styles.title}>{props.name}</Text>

        <View style={styles.content}>
            <Text style={styles.badge}>Novo</Text>
            <View style={styles.dot}></View>
        </View>

        <Text style={styles.description}>{props.description}</Text>

        <View style={styles.footer}>
            <View style={{width: '80%'}}>
                <Text style={styles.price}>{props.price}</Text>
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
        shadowColor: "#000",
        shadowOffset: {
	    width: 5,
	    height: 5,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        marginTop: 20,
        backgroundColor: 'white',
        height: 250,
        width:  190,
        borderRadius: 10,
        padding: 10,
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
        fontSize: 12,
    
    },
    
    dot: {
        width: 6,
        height: 6,
        borderRadius: 6,
        backgroundColor: 'lightblue',
        marginHorizontal: 6,
    
    },

    description: {
        fontFamily: 'Kanit_400Regular',
        fontSize: 12,
        color: '#4f4a4a'
    },
    footer: {
        position: 'absolute',
        top: 200,
        flexDirection: 'row',
        marginTop: 15,
        alignItems: 'center',
        width: '100%',
        

    },
    price:{
        fontSize: 15,
        fontFamily: 'Kanit_500Medium',
        alignSelf: 'baseline'
    }
})