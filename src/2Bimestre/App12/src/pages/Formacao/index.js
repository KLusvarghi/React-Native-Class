import React, { useState } from 'react';
import { Text, View, Image, Linking, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Home() {
  
  const [escola2] = useState('Balneário das Palmeiras');
  const [escola3] = useState('FATEC de Praia Grande');

  const [dur2] = useState('2018 - 2020');
  const [dur3] = useState('2021 - Atual');

  const [tec3] = useState('Análise e Desenvolvimento de Sistemas');

  return (
    <ScrollView style={styles.container}>

      <View style={styles.divItem}>
        <View style={styles.divIconItem}>
          <FontAwesome name="graduation-cap" size={20} color="#c1c1c1" />
        </View>
        <View style={styles.divInfItem}>
          <Text style={styles.textItem}>Ensino Médio</Text>
          <Text style={styles.textInfItem}>{escola2}</Text>
          <Text style={styles.textSubinfSubitem}>{dur2}</Text>
        </View>
      </View>


      <View style={styles.divItem}>
        <View style={styles.divIconItem}>
          <FontAwesome name="graduation-cap" size={20} color="#c1c1c1" />
        </View>
        <View style={styles.divInfItem}>
          <Text style={styles.textItem}>Ensino Superior</Text>
          <Text style={styles.textInfItem}>{tec3}</Text>
          <Text style={styles.textInfSubitem}>{escola3}</Text>
          <Text style={styles.textSubinfSubitem}>{dur3}</Text>
        </View>
      </View>

    </ScrollView>
  );
}