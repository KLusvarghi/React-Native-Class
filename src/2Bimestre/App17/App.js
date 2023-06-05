import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { useState } from 'react';
import Constants from 'expo-constants';
import api from './api';

export default function App() {
  const [confirm, setConfirm] = useState();
  const [cep, setCep] = useState();

  const [showCep, setShowCep] = useState();
  const [logradouro, setLogradouro] = useState();
  const [bairro, setBairro] = useState();
  const [cidade, setCidade] = useState();
  const [estado, setEstado] = useState();

  const consultaCep = async (cep) => {
    const response = await api.get('/' + cep + '/json/');
    setShowCep(response.data.cep);
    setLogradouro(response.data.logradouro);
    setBairro(response.data.bairro);
    setCidade(response.data.localidade);
    setEstado(response.data.uf);
    setConfirm(!confirm);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Cep x Endereço</Text>
      <View>
        <TextInput
          placeholder="Insira seu CEP"
          style={styles.input}
          value={cep}
          onChangeText={(vl) => setCep(vl)}
        />
        <TouchableOpacity style={styles.btn} onPress={() => consultaCep(cep)}>
          Consultar
        </TouchableOpacity>
      </View>
      {confirm && (
        <View>
          <Text>{showCep}</Text>
          <Text>{logradouro}</Text>
          <Text>{bairro}</Text>
          <Text>{cidade}</Text>
          <Text>{estado}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
  },
  btn: {
    marginTop: 10,
    textAlign: 'center',
    backgroundColor: 'red',
    color: 'white',
    padding: 5,
  },
});
