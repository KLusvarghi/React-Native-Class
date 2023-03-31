// App 03 - Multiplicação de 2 números

import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet} from 'react-native';

export default function App03(){

  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState(0);

  // Funções
  function calcular(){
    setResultado(num1 * num2)
  }

  return(
    <View style={styles.container}>
      <Text style={styles.title}>
        Multiplicador de Números
      </Text>

      <TextInput 
        value={num1}
        style={styles.input}
        placeholder="Digite o primeiro nº"
        onChangeText={ (number) => setNum1(number)}
      />

      <TextInput 
        style={styles.input}
        value={num2}
        placeholder="Digite o segundo nº"
        onChangeText={ (number) => setNum2(number)}
      />

      <Button 
        title="Calcular" 
        onPress={() => calcular()}
      />
      <Text style={styles.contador}>Resultado: {resultado}</Text>
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
    marginBottom: 20
  },
  input: {
    marginBottom: 15,
    padding: 6,
    paddingLeft: 25,
    paddingRigth: 25,
    borderWidth: 2,
    borderRadius: 4,
    borderColor: 'gray',
  },
  contador :{
    fontSize: 18,
    margin: 20,
  }
});
