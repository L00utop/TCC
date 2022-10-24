import React from "react";
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

import New from './New/New'
import Recomendation from "./Recomendations/Recomendation";



export default function Home() {
    const Navigation = useNavigation();
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

        <Animatable.View animation="fadeInUp" duration={900}>
            <New
            cover={require('../../../assets/Manutencao.png')}
            name="Manutenção de computadores"
            description="Manutenção de componentes e de computadores em geral."
            price="R$ 240,30"
            onPress={()=> Navigation.navigate("Detalhes")}
            />
        </Animatable.View>

        <Animatable.View animation="fadeInUp" duration={900} delay={200}>
            <New
            cover={require('../../../assets/Design.jpg')}
            name="Design Gráfico"
            description="Faço um design de acordo com as suas preferências."
            price="R$ 240,30"
            onPress={() => Navigation.navigate("Detalhes")}
            />
        </Animatable.View>

        <Animatable.View animation="fadeInUp" duration={900} delay={150}>
            <New
            cover={require('../../../assets/FrontEnd.png')}
            name="FrontEnd"
            description="FrontEnd para o seu projeto!"
            price="R$ 300,30"
            onPress={()=> Navigation.navigate("Detalhes")}
            />
        </Animatable.View>

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
                    />
                </Animatable.View>
            ))
        }  

</ScrollView>   
    
    );
}


const dados = [
    {
        img: require("../../../assets/FrontEnd.png"),
        nome: "Teste",
        description: "Qualquer coisa",
        price: "R$ 10,00"
    },
    {
        img: require("../../../assets/FrontEnd.png"),
        nome: "Teste1",
        description: "Qualquer coisa",
        price: "R$ 10,00"
    },
    {
        img: require("../../../assets/FrontEnd.png"),
        nome: "Teste2",
        description: "Qualquer coisa",
        price: "R$ 10,00"
    },
    {
        img: require("../../../assets/FrontEnd.png"),
        nome: "Teste3",
        description: "Qualquer coisa",
        price: "R$ 10,00"
    },
    {
        img: require("../../../assets/FrontEnd.png"),
        nome: "Teste4",
        description: "Qualquer coisa",
        price: "R$ 10,00"
    }
    
]

console.log(dados);

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
        fontSize: 15,
        paddingHorizontal: 15,
        marginBottom: 10,
        fontFamily: 'Kanit_700Bold',
        color: '#4f4a4a'
    },
   
    
});