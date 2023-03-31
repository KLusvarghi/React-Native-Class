// App 10 - Conversor de Moedas

import React, {useEffect, useState} from 'react';
import { View, TextInput, Text, Button, StyleSheet } from 'react-native';
import { Picker} from '@react-native-picker/picker';
import conversoes from './api/conversoes.json';

export default function App10(){

  const [valor, setValor] = useState(null);
  const [de, setDe] = useState('');
  const [para, setPara] = useState('');
  const [exibe, setExibe] = useState(false);
  const [resultado, setResultado] = useState(0);

  
  function converter(){
    setExibe(!false)
    const compara = `${de}-${para}`;
    if(de == 0 || para == 0 || valor === null || valor === 0 ){
      setExibe(false)
      return alert('Prenencha os valores!')
    }else if(de === para) {
      return setResultado(valor)
    }else {
      conversoes.map(item => {
        if(item.title === compara){
          setResultado( (item.conversao * valor).toFixed(2).replace('.', ',') )
        }
      })
    }
  }

  return(
    <View style={styles.container}>
      <Text style={styles.title}>
        Conversos de Modedas: Dólar, Real e Euro
      </Text>

      <View style={styles.containerInput}>
        <Text style={styles.label}>Valor:</Text>
        <TextInput 
          placeholder="0"
          style={styles.input}
          value={valor}
          onChangeText={ (n) => setValor(n)}
        />
      </View>

      <View style={styles.containerInput}>
        <Text style={styles.label}>De:</Text>
        <Picker
          style={styles.input}
          selectedValue={de}
          onValueChange={(vl) => setDe(vl)}
        >
          <Picker.Item key={0} value={''} label="Selecione"/>
          <Picker.Item key={1} value={'USD'} label="Dolár" />
          <Picker.Item key={2} value={'BRL'} label="Real" />
          <Picker.Item key={2} value={'EUR'} label="Euro" />
        </Picker>
      </View>

      <View style={styles.containerInput}>
        <Text style={styles.label}>Para:</Text>
        <Picker
          style={styles.input}
          selectedValue={para}
          onValueChange={(vl) => setPara(vl)}
        >
          <Picker.Item key={0} value={''} label="Selecione"/>
          <Picker.Item key={1} value={'USD'} label="Dolár" />
          <Picker.Item key={2} value={'BRL'} label="Real" />
          <Picker.Item key={2} value={'EUR'} label="Euro" />
        </Picker>
      </View>
      

      <Button 
        title="Converter" 
        onPress={() => converter()}
        thumbColor='blue'
      />

      {de && para && valor && exibe &&
        <View>
          <Text style={styles.mensagem}>Conversão: <Text style={styles.resultado}>{valor ? resultado : ''}</Text></Text>
        </View>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 20
  },
  containerInput: {
    display: 'flex',
    width: '100%'
    // flexDirection: 'row',
    // justifyContent: 'space-between'
  },
  title: {
    textAlign: 'center',
    fontSize: 26,
    marginTop: 25,
    marginBottom: 20,
    fontWeight: 'bold'
  },
  input: {
    marginBottom: 15,
    padding: 6,
    borderWidth: 2,
    borderRadius: 4,
    borderColor: 'gray',
  },
  label: {
    fontSize: 16
  },
  resultado: {
    fontWeight: 'bold',
    fontSize: 22,
    marginTop: 25,
  },
  mensagem: {
    fontSize: 22,
    marginTop: 25,
  }
});
