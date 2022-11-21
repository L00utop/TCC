import React from "react";
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';


import New from './New/New';
import Recomendation from "./Recomendations/Recomendation";



export default function Home(props) {
    const navigation = useNavigation();

    const dados = [
        {
            img: require("../../../assets/FrontEnd.png"),
            name: "Front-End",
            description: "Front-End de acordo com as suas preferências!",
            price: "R$ --,--"
        },
        {
            img: require("../../../assets/Manutencao.png"),
            name: "Manutenção",
            description: "Manuntenção de computadores e componentes.",
            price: "R$ --,--",
        },
        {
            img: require("../../../assets/Design.jpg"),
            name: "Design gráfico",
            description: "Design de acordo com as suas escolhas!",
            price: "R$ --,--",
        },
    
    ]
    return(
<ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor: 'white'}}>    
<ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor: 'white'}}>
        <Animatable.View animation="fadeInUp" duration={900} style={styles.header}>
            <View style={styles.inputArea}>
                <FontAwesome name="search" size={25} color="black" style={styles.ico}/>
                <TextInput placeholder="O que procura?" style={styles.input}/>
            </View>
        </Animatable.View>

        <Animatable.View animation="fadeInLeft" delay={200} style={styles.contentNew}>
            <Text style={styles.title}>Novidades</Text>
        </Animatable.View>
  
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal:15, paddingVertical: 15}}>

    {
        dados.map(novo=> (
        <Animatable.View animation="fadeInUp" duration={900}>
            <New
                cover={novo.img}
                name={novo.name}
                price={novo.price}
                description={novo.description}
                onPress={()=> props.navigation.navigate("DetailsNew", novo)}
            />
        </Animatable.View>
        ))
    }

        </ScrollView>
</ScrollView>
        <Animatable.View animation="fadeInLeft" delay={200} style={styles.contentNew}>
            <Text style={styles.title}>Recomendações</Text>
        </Animatable.View>

        {
            dados.map(recomendation =>(
                <Animatable.View animation="fadeInUp" duration={900} delay={150}>
                    <Recomendation 
                        cover={recomendation.img}
                        name={recomendation.name}
                        price={recomendation.price}
                        description={recomendation.description}
                        onPress={() => props.navigation.navigate("Detalhes", dados)}
                    />
                </Animatable.View>
            ))
        }  

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
        shadowColor: "#000",
        shadowOffset: {
	    width: 5,
	    height: 5,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        width: '95%',
        backgroundColor: 'white',
        height: 37,
        borderRadius: 10,
    },

    input: {
        flex: 1,
        height: 35,
        width: '100%',
        fontSize: 16,
        borderRadius: 4,
        marginLeft: 20,
        paddingLeft: 5,
    },

    contentNew: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center'
    },

    title: {
        fontSize: 18,
        paddingHorizontal: 15,
        marginBottom: 10,
        paddingTop: 10,
        fontFamily: 'Montserrat_700Bold',
        color: '#4f4a4a'
    },
   
    
});