// App 04 - Alcool ou gasolina

import { useState } from 'react';
import { View, Image, Text, TextInput, Button, StyleSheet} from 'react-native';

export default function App04(){

  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [resultado, setResultado] = useState(null);
  
  // Funções
  function calcular(){
    const calc = +(num1 / num2).toFixed(3);
    if (calc < 0.7){
      setResultado('Melhor utilziar Alcool')
    }else if(calc > 0.7) {
      setResultado('Melhor utilziar Gasolina')
    }else {
      setResultado('Prencha os valores!')
    }
    handleClear()
  }
  
    const image = 'https://png.pngtree.com/png-vector/20191028/ourlarge/pngtree-gas-station-icon-cartoon-style-png-image_1896261.jpg';

    return(
      <View style={styles.container}>
        <Text style={styles.title}>
          Alcool ou Gasolina
        </Text>

        <Image
          source={{ uri: image }}
          style={styles.image}
        />

        <TextInput 
          value={num1}
          style={styles.input}
          placeholder="Preço do Alcool"
          onChangeText={ (number) => setNum1(number)}
        />

        <TextInput 
          style={styles.input}
          value={num2}
          placeholder="Preco da Gasolina"
          onChangeText={ (number) => setNum2(number)}
        />

        <Button 
          title="Verificar" 
          onPress={() => calcular()}
        />
        {resultado &&
          <Text style={styles.contador}>Resultado: {resultado}</Text>
        }
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
    fontWeight: 'bold'
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
  },
    image: {
    width: 200, 
    height: 200, 
  },
});
