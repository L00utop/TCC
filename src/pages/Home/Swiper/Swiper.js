import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

import Swiper from 'react-native-swiper/src';

export default function SwiperComponent() {
 return (
    <Swiper
    style={style.wrapper}
    dotStyle={{ 
        backgroundColor: '#0000',
        borderColor: '#000',
        borderWidth: 1,
        width: 10,
        height: 10,
        borderRadius: 10,
     }}
     activeDotColor='#000'
     activeDotStyle={{
        borderColor: '#000',
        borderWidth: 1,
        width: 10,
        height: 10,
        borderRadius: 10,
     }}
    >
        <View style={style.slide}>
            <Image source={require('../../../../assets/Design.jpg')}
            style={{width: '100%', height: 400}}/> 

        </View>
        <View style={style.slide}>
            <Image source={require('../../../../assets/FrontEnd.png')}
            style={{width: '100%', height: 400}}/> 
        </View>
    </Swiper>

  );
}

const style = StyleSheet.create({
    wrapper:{

    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    }
})