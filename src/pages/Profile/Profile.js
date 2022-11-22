import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';
import avatar from '../../../assets/avatar.png'
import { FontAwesome } from '@expo/vector-icons';




export default function Profile() {
 
 return (
   <View style={style.container}>
    <Animatable.View animation='fadeInDown' style={style.infoCont}>
      <Image source={avatar} style={style.avatar}/>
      <View style={style.info}>
      <Text style={style.name}>Nome</Text>
      <Text style={style.descritpion}>descrição</Text>
      </View>
      <FontAwesome name="star" size={34} style={style.fullStar}/>
      <Text>4.5</Text>
    </Animatable.View>
    <Text style={style.statistics}>
      Feito pelo usuário:
    </Text>

      
    <View>
  
    </View>
   </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

  infoCont: {  
    flexDirection: 'row',
    shadowColor: "#000",
    shadowOffset: {
    width: 5,
    height: 5,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    borderRadius: 20
  },

  avatar: {
    height: 100,
    width: 100
  }
})