import React from 'react';
import { View, Text } from 'react-native';

export default function Details({route}) {
 return (
   <View>
     <Text>{route.params?.sinopse}</Text>
   </View>
  );
}