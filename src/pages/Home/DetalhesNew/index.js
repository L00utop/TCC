import React from 'react';
import { View, Text } from 'react-native';

export default function DetalhesNew(props) {
  console.log(props.route.params.description)
 return (
   <View>
    <Text>{props.route.params.description}</Text>
   </View>
  );
}