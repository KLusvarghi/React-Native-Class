import React, { useState } from 'react';
import { Text, View, Image, Linking, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './style';

export default function Home() {

  const [local1] = useState("Grupo HJR");
  const [func1] = useState('Barman');
  const [desc1] = useState('Atendimento ao cliente, fazer drinks gestão de estoque e limpeza do local.');
  const [dur1] = useState('dez 2022 - fev 2023');
  
  const [local2] = useState("Seduc Praia Grande");
  const [func2] = useState('Monitor/Estagiário');
  const [desc2] = useState('Auxilio dos professores e alunos.');
  const [dur2] = useState('mar 2022 - mar 2023');

  return (
    <ScrollView style={styles.container}>

      <View style={styles.divItem}>
        <View style={styles.divInfItem}>
          <Text style={styles.textItem}>{local1}</Text>
          <Text style={styles.textInfItem}>{func1}</Text>
          <Text style={styles.textInfSubitem}>{desc1}</Text>
          <Text style={styles.textSubinfSubitem}>{dur1}</Text>
        </View>
      </View>

      <View style={styles.divItem}>
        <View style={styles.divInfItem}>
          <Text style={styles.textItem}>{local2}</Text>
          <Text style={styles.textInfItem}>{func2}</Text>
          <Text style={styles.textInfSubitem}>{desc2}</Text>
          <Text style={styles.textSubinfSubitem}>{dur2}</Text>
        </View>
      </View>

    </ScrollView>
  );
}