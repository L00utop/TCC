import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import * as Animatable from "react-native-animatable";
import avatar from "../../../assets/avatar.png";
import { FontAwesome } from "@expo/vector-icons";
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
          </View>
        </View>
        <View style={style.info}>
          <Text style={style.descritpion}>
            Lorem ipsum dolor sit amet. Non dolorum quos et quod obcaecati ea
            omnis...
          </Text>
        </View>
      </Animatable.View>
      <View style={style.statusCont}>
        <Text style={style.statistics}>Estatísticas</Text>
        <Animatable.View>
          <LineChart
            data={{
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                  ],
                },
              ],
            }}
            width={Dimensions.get('window').width - 16}
            height={250}
            chartConfig={{
              backgroundGradientFrom: "#FFF",
              backgroundGradientTo: "#FFF",
              decimalPlaces: 3,
              color: (opacity = 255) => `rgba(83, 154, 252, ${opacity})`,
              style: {
                borderRadius: 20,
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
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
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
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
    padding: 5,
    fontSize: 18,
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

  statusCont: {
    flex: 2,
  },
});
