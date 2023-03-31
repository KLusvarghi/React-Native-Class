// App 05 - Cálculo do IMC

import { useState } from 'react';
import { View, Image, Text, TextInput, Button, StyleSheet} from 'react-native';

export default function App05(){

  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');
  const [classificacao, setClassificacao] = useState('');

  // Funções
  function calcular(){
    const resul = (peso / (altura * altura)).toFixed(2);
    setResultado(resul)
    if(resultado < 18.5){
      setClassificacao('Você está abaixo do peso!')
    }else if(resultado >= 18.5 && resultado < 25) {
      setClassificacao('Você está no Peso normal!')
    }
    else if(resultado >= 25 && resultado < 30){
      setClassificacao('Você está com excesso de peso!')
    } 
    else if(resultado > 30 && resultado <= 34.99) {
      setClassificacao('Você está obeso(a)!')
    }
    else setClassificacao('Você está com obesidade extrema!')
  }

  let image = 'https://www.fetalmed.net/wp-content/uploads/2020/09/imagem-destacada-imc.jpg';

  return(
    <View style={styles.container}>
      <Text style={styles.title}>
        Cálculo do IMC
      </Text>

      <Image
        source={{ uri: image }}
        style={styles.image}
      />

      <TextInput 
        value={peso}
        style={styles.input}
        placeholder="Peso"
        onChangeText={ (n) => setPeso(n)}
      />

      <TextInput 
        style={styles.input}
        value={altura}
        placeholder="Altura"
        onChangeText={ (n) => setAltura(n)}
      />

      <Button 
        title="Verificar" 
        onPress={() => calcular()}
      />
      <Text>
        {
          classificacao && resultado && <Text style={styles.contador}>Seu IMC é de: {resultado} <br/> {classificacao}</Text>
        }
      </Text>
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
    width: 100, 
    height: 100, 
  },
});