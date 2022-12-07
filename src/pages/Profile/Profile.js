import React from "react";
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import avatar from "../../../assets/avatar.png";
import { FontAwesome } from "@expo/vector-icons";
import { Foundation } from '@expo/vector-icons';
import { LineChart } from "react-native-chart-kit";


export default function Profile() {
  const screenWidth = Dimensions.get("window").width;
  return (
    <View style={style.container}>
      <Animatable.View animation="slideInDown" style={style.infoCont}>
        <View style={{ flexDirection: "row" }}>
          <Image source={avatar} style={style.avatar} />
          <View>
            <Text style={style.name}>Nome de usuário</Text>
            <FontAwesome name="star" size={20} color="#539afc">
              <Text style={{ fontFamily: "Montserrat_600SemiBold" }}>4.5</Text>
            </FontAwesome>
            <View style={style.info}>
              <Text style={style.descritpion}>Lorem ipsum dolor sit amet. </Text>
            </View>
          </View>
        </View>
      </Animatable.View>

      <Animatable.View animation='fadeInLeft'>
        <Text style={style.titles}>Contatos</Text>
        <View style={style.midCont}>
          <View style={style.contatoInfo}>
            <FontAwesome name="whatsapp" size={30} color="black" />
            <Text style={style.contatoTxt}>(15) 9999-8888</Text>
          </View>
          <View style={style.contatoInfo}>
            <FontAwesome name="envelope" size={27} color="black" />
            <Text style={style.contatoTxt}>emailusuario@dominio</Text>
          </View>
        </View>
      </Animatable.View>

      <View style={style.statusCont}>
        <Animatable.View animation="fadeInUp">
          <Text style={style.titles}>Estatísticas</Text>
          <LineChart
            data={{
              labels: ["Janeiro", "Fevereiro", "Março", "Abril"],
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                  ],
                },
              ],
            }}
            width={screenWidth - 18}
            height={200}
            chartConfig={{
              backgroundGradientFrom: "#FFF",
              backgroundGradientTo: "#FFF",
              decimalPlaces: 0,
              color: (opacity = 255) => `rgba(83, 154, 252, ${opacity})`,
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 20,
              fontFamily: "Montserrat_600SemiBold",
              alignSelf: "center",
              shadowColor: "#000",
              shadowOffset: {
                width: 5,
                height: 5,
              },
              shadowOpacity: 0.50,
              shadowRadius: 7.49,
            }}
          />
        </Animatable.View>
      </View>
      <Animatable.View style={{flexDirection: "row", alignSelf: 'center'}} animation='fadeInUp' delay={200} >
        <TouchableOpacity style={style.button}>
          <Foundation name="pencil" size={28} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={style.button}>
          <FontAwesome name="bar-chart" size={28} color="black" />  
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: "#539afc",
  },

  info: {
    flex: 1,
  },

  name: {
    paddingTop: 5,
    fontSize: 18,
    fontFamily: "Montserrat_600SemiBold",
  },

  descritpion: {
    fontSize: 15,
    fontFamily: "Montserrat_600SemiBold",
    color: "#a1a1a1",
  },

  infoCont: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 5,
    backgroundColor: "#fff",
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
    alignSelf: "flex-start",
    borderRadius: 20,
    margin: 5,
  },

  titles: {
    paddingTop: 20,
    paddingLeft: 10,
    fontSize: 18,
    color: '#fff',
    fontFamily: 'Montserrat_800ExtraBold'
  },

  statusCont: {
    flex: 2,
  },

  midCont: {
    justifyContent: 'space-around',
    marginTop: 20,
    borderRadius: 20,
    alignSelf: 'center',
    backgroundColor: '#fff',
    width: '95%',
    height: 100,
    padding: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
  },

  contatoInfo: {
    flexDirection: "row",
    alignItems: 'center',
    paddingLeft: 20
  },

  button: {
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    backgroundColor: '#fff',
    borderRadius: 20,
    alignSelf: 'center',
    width: 80,
    height: 80,
    margin: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },

  contatoTxt: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 15,
    paddingLeft: 13
  }
});
