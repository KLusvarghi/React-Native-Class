// App 06 - Jogo do nº aleatório

import { useState } from 'react';
import { View, Image, Text, Button, StyleSheet} from 'react-native';

export default function App06(){

  const [number, setNumber] = useState('');
  const [image, setImage] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBH5KDRdXfrl4mjNhmV2hgHHk4M5ADmvMCw62qNCnaNM1u8Qebatcw-ziqll9V9u8GlDk&usqp=CAU');

  // Funções
  function modifica(){
    setNumber(+(Math.floor(Math.random() * 10)))
    setImage(`https://picsum.photos/${number}`)
  }

  // https://picsum.photos/
  return(
    <View style={styles.container}>
      <Text style={styles.title}>
        Jogo do Nº Aleatório
      </Text>

      <Image
        style={styles.image}
        source={{ uri: image }}
      />
      <Text>Pensem em um nº 0 à 10</Text>

      <Text style={styles.number}>{number}</Text>

      <Button 
        style={styles.button}
        title="Descobrir" 
        onPress={() => modifica()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginTop: 25,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  image: {
    minWidth: 200, 
    minHeight: 200, 
    borderRadius: 10,
    marginBottom: 20,
  },
  number: {
    marginTop: 20,
    marginBottom: 20,
  }
});

