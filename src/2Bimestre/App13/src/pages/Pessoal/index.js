import React, { useState } from 'react';
import { Text, View, Image, Linking, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Home() {

  function calcularIdade() {
    const dob = new Date('2003-05-08');
    const diff = Date.now() - dob.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  
  const [idade] = useState(calcularIdade());

  return (
    <ScrollView style={styles.container}>
      <View style={styles.divImgPessoal}>
        <Image source={{ uri: 'https://avatars.githubusercontent.com/u/71743008?v=4' }} style={styles.imgPessoal} />
      </View>

      <View style={styles.divItem}>
        <View style={styles.divIconItem}>
          <FontAwesome name="user" size={25} color="#c1c1c1" />
        </View>
        <View style={styles.divInfItem}>
          <Text style={styles.textItem}>Nome</Text>
          <Text style={styles.textInfItem}>Kauã Ortolani Lusvarghi</Text>
        </View>
      </View>

      <View style={styles.divItem}>
        <View style={styles.divIconItem}>
          <FontAwesome name="birthday-cake" size={20} color="#c1c1c1" />
        </View>
        <View style={styles.divInfItem}>
          <Text style={styles.textItem}>Idade</Text>
          <Text style={styles.textInfItem}>{idade} anos</Text>
        </View>
      </View>

      <View style={styles.divItem}>
        <View style={styles.divIconItem}>
          <FontAwesome name="github" size={25} color="#c1c1c1" />
        </View>
        <View style={styles.divInfItem}>
          <Text style={styles.textItem}>GitHub</Text>
          <TouchableOpacity style={styles.btnGithub} onPress={() => () => Linking.openURL('https://github.com/KLusvarghi')}>
            <Text style={styles.textInfItem}>KLusvarghi</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.divItem}>
        <View style={styles.divIconItem}>
          <FontAwesome name="phone" size={25} color="#c1c1c1" />
        </View>
        <View style={styles.divInfItem}>
          <Text style={styles.textItem}>Telefone</Text>
          <TouchableOpacity style={styles.btnGithub}>
            <Text style={styles.textInfItem}>+55 13 99606-8207</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.divItem}>
        <View style={styles.divIconItem}>
          <FontAwesome name="linkedin" size={25} color="#c1c1c1" />
        </View>
        <View style={styles.divInfItem}>
          <Text style={styles.textItem}>Linkedin</Text>
          <TouchableOpacity style={styles.btnGithub} onPress={() => Linking.openURL('https://www.linkedin.com/in/kaua-ortolani-lusvarghi-422b141b4/')}>
            <Text style={styles.textInfItem}>Kaua Ortolani Lusvarghi</Text>
          </TouchableOpacity>
        </View>
      </View>

    </ScrollView>
  );
}