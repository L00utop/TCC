import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import * as Animatable from "react-native-animatable";
import avatar from "../../../assets/avatar.png";
import { FontAwesome } from "@expo/vector-icons";

export default function Profile() {
  return (
    <View style={style.container}>
      <Animatable.View animation="fadeInDown" style={style.infoCont}>
        <Image source={avatar} style={style.avatar} />
        <View style={style.info}>
          <Text style={style.name}>Nome</Text>
          <Text style={style.descritpion}>descrição</Text>
        </View>
        <FontAwesome name="star" size={34} style={style.fullStar} />
        <Text>4.5</Text>
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

  infoCont: {
    flex: 1,
    flexDirection: "row",
    shadowColor: "#000",
    width: "100%",
    shadowOffset: {
      width: 5,
      height: 2,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 5,
  },

  avatar: {
    height: 100,
    width: 100,
    alignSelf: 'flex-start',
    borderRadius: 20,
  },

  statusCont: {
    flex: 2,
  },
});
