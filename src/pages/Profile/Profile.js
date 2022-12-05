import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import * as Animatable from "react-native-animatable";
import avatar from "../../../assets/avatar.png";
import { FontAwesome } from "@expo/vector-icons";

export default function Profile() {
  return (
    <View style={style.container}>
      <Animatable.View animation="fadeInDown" style={style.infoCont}>
        <View style={{flexDirection: 'row'}}>
        <Image source={avatar} style={style.avatar} />
        <View >
          <Text style={style.name}>Nome de usuário</Text>
        <FontAwesome name="star" size={20} color="#539afc"> <Text style={{fontFamily: 'Montserrat_600SemiBold'}}>4.5</Text></FontAwesome>
        </View>
        </View>
        <View style={style.info}>
          <Text style={style.descritpion}>Lorem ipsum dolor sit amet. Non dolorum quos et quod obcaecati ea omnis...</Text>
        </View>
   
      </Animatable.View>
      <View style={style.statusCont}>
        <Text style={style.statistics}>Estatísticas</Text>

      </View>

      <View></View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  info: {
    flex: 1,
  },
  
  name: {   
    paddingTop: 5,
    fontSize: 18,
    fontFamily: 'Montserrat_600SemiBold'
  },

  descritpion: {
    padding: 5,
    fontSize: 18,
    fontFamily: 'Montserrat_600SemiBold',
    color: '#a1a1a1'
  },

  infoCont: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 5,
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
    width: 5,
    height: 5,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
  },

  avatar: {
    height: 100,
    width: 100,
    alignSelf: 'flex-start',
    borderRadius: 20,
    margin: 7
  },

  statusCont: {
    flex: 2,
    
  },
});
