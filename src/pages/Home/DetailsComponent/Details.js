import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import StarReview from 'react-native-stars';
import Heart from "react-heart"
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


import * as Animatable from 'react-native-animatable'



export default function DetalhesNew(props) {
  console.log(props.route.params)
  const [active, setActive] = useState(false)
  return (
    <View style={style.container}>
      <Animatable.Image key={props} animation='fadeInDown' source={props.route.params.img} style={style.img} />


      <View style={style.top}>
        <Animatable.Text animation='fadeInLeft' duration={900} style={style.title}>{props.route.params.name}</Animatable.Text>
        <Animatable.View animation='fadeInRight' duration={900} delay={50} style={style.icons}>
          <StarReview
            default={2.5}
            starSize={34}
            count={5}
            half={true}
            fullStar={<FontAwesome name="star" size={34} style={style.fullStar} />}
            emptyStar={<FontAwesome name="star-o" size={34} style={style.emptyStar} />}
            halfStar={<FontAwesome name="star-half-full" size={34} style={style.fullStar} />}
          />
        </Animatable.View>
      </View>


      <Animatable.View animation='fadeInUp' duration={900} style={style.mid}>
        <Text style={style.description}>{props.route.params.description}</Text>
        <Text style={style.description2}>{props.route.params.description2}{`\n `}</Text>
      </Animatable.View>
      <Animatable.View animation='fadeInUp' duration={900} style={style.mid2}>
        <Text style= {style.title}>{props.route.params.price}</Text>
        <Heart isActive={active} onClick={() => setActive(!active)} inactiveColor="#7e7e7e" activeColor="red" style={style.heart} animationDuration={0.1} />
      </Animatable.View>

 
    <Animatable.Text animation='fadeInLeft' duration={900} style={style.bottomTxt}>Entre em contato via:</Animatable.Text>
      <View style={style.bottom}>
        <Animatable.View animation='fadeInLeft'>
        <TouchableOpacity style={style.button}>
          <FontAwesome name="whatsapp" size={28} color="white"/>
        </TouchableOpacity>
        </Animatable.View>

        <Animatable.View animation='fadeInRight'>
        <TouchableOpacity style={style.button}>
          <Entypo name="phone" size={28} color="white"/>
        </TouchableOpacity>
        </Animatable.View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

  img: {
    marginTop: 10,
    borderRadius: 10,
    alignSelf: 'center',
    width: '98%',
    height: 200
  },

  top: {
    flex: -1,
    height: '7%',
    paddingTop: 9,
    paddingHorizontal: 3,
    paddingRight: 5,
    justifyContent: 'space-between',
    alignContent: 'center',
    flexDirection: 'row',
    marginBottom: 2,
    alignItems: 'center'
  },
  
  mid: {
    flex: -1,
    paddingHorizontal: 3,

  },
  mid2: {
    flex: 1,
    paddingHorizontal: 3,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between'
  },

  bottom: {

    flexDirection: 'row',
    alignItems: 'center',
    padding: 9,
    justifyContent: 'space-between',
   },
   
   bottomTxt: {
    fontSize: 20  ,
    paddingLeft: 5,
    fontFamily: 'Montserrat_700Bold',
   },


  heart: {
    height: 32,
    width: 32,
    marginRight: 20,
    marginLeft: 50
  },

  emptyStar: {
    color: '#d4d4d4',
  },

  fullStar: {
    color: '#539afc'
  },

  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center'
  },
  

  title: {
    paddingTop: 3,
    fontSize: 24,
    paddingLeft: 5,
    fontFamily: 'Montserrat_700Bold',
  },

  description: {
    fontSize: 18,
    marginLeft: 5,
    color: '#000',
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 5,
  },

  description2: {
    fontSize: 16,
    marginLeft: 5,
    color: '#a1a1a1',
    fontFamily: 'Montserrat_600SemiBold',
  },

  button: {
    shadowColor: "#000",
    shadowOffset: {
    width: 5,
    height: 5,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    backgroundColor: '#539afc',
    borderRadius: 10,
    width: 180,
    paddingVertical: 8,
    bottom: '10%',
    justifyContent: 'center',
    alignItems: 'center'
  },

})