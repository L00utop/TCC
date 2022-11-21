import React from 'react';
import { Text, View, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import StarReview from 'react-native-stars';
import { AntDesign } from '@expo/vector-icons';
//<AntDesign name="star" size={24} color="black" />

import * as Animatable from 'react-native-animatable'
import { Button } from 'react-native-web';

export default function DetalhesNew(props) {
  console.log(props.route.params)
 return (
   <View style={style.container}>
      <Image source={props.route.params.img} style={style.img}/>

    <Animatable.View style={style.top}>
      <Text style={style.title}>{props.route.params.name}</Text>
      <StarReview
      default={2}
      starSize={28}
      count={5}
      fullStar={<AntDesign name="star" size={28} style={[style.fullStar]}/>}
      emptyStar={<AntDesign name="star" size={28} style={[style.emptyStar]}/>}/>
    </Animatable.View>

    <Animatable.View style={style.mid}>
      <Text style={style.description}>{props.route.params.description}</Text>
    </Animatable.View>
    
    <Animatable.View style={style.bottom}>
      <TouchableOpacity style={style.button}>
        <Text>a</Text>
      </TouchableOpacity>
    </Animatable.View>
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
    flex: 1,
    alignContent: 'center',
    flexDirection: 'row',
  },
  emptyStar:{
    color: '#d4d4d4',
  },
  fullStar:{
    color: '#539afc'
  },

  title:{
    paddingTop: 3,
    fontSize: 23,
    paddingLeft: 5,
    paddingRight: 120,
    fontFamily: 'Montserrat_700Bold',
  }
})