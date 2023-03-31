// App 07 - Formulário de abertura de conta bancária

import { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  Switch,
} from 'react-native';

import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default function App07(){

  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState(null)
  const [sexo, setSexo] = useState(null)
  const [escolaridade, setEscolaridade] = useState(null)
  const [limite, setLimite] = useState(0)
  const [brasileiro, setBrasileiro] = useState(false)
  const [exibe, setExibe] = useState(false)
   
  function verifica(){
    if(nome && idade && sexo && escolaridade && limite > 10 ) {
      setExibe(true)
    }
  }


  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Abertura de Conta</Text>

        <View style={styles.containerInput}>
          <Text>Nome:</Text>
          <TextInput
            placeholder='Seu nome'
            style={styles.input}
            value={nome}
            onChangeText={(vl) => setNome(vl)}
          />
        </View>

        <View style={styles.containerInput}>
          <Text>Idade:</Text>
          <TextInput
            placeholder='Sua idade'
            style={styles.input}
            value={idade}
            onChangeText={(vl) => setIdade(vl)}
          />
        </View>

        <View style={styles.containerInput}>
          <Text>Sexo:</Text>
          <Picker
            style={styles.input}
            selectedValue={sexo}
            onValueChange={(vl) => setSexo(vl)}>
            <Picker.Item key={0} value={''} label="Selecione" />
            <Picker.Item key={1} value={'Masculino'} label="Maculino" />
            <Picker.Item key={2} value={'Feminino'} label="Feminino" />
          </Picker>
        </View>

        <View style={styles.containerInput}>
          <Text>Ecolaridade:</Text>
          <Picker
            style={styles.input}
            selectedValue={escolaridade}
            onValueChange={(itemValue) =>
              setEscolaridade(itemValue)
            }>
            <Picker.Item key={0} value={''} label="Selecione" />
            <Picker.Item
              key={1}
              value={'Ensino médio incompleto'}
              label="Ensino médio em andamento"
            />
            <Picker.Item
              key={2}
              value={'Ensino médio em andamento'}
              label="Ensino médio em andamento"
            />
            <Picker.Item
              key={3}
              value={'Ensino médio concluido'}
              label="Ensino médio concluido"
            />
            <Picker.Item
              key={4}
              value={'Superior incompleto'}
              label="Superior em andamento"
            />
            <Picker.Item
              key={5}
              value={'Superior em andamento'}
              label="Superior em andamento"
            />
            <Picker.Item
              key={6}
              value={'Superior concluido'}
              label="Superior concluido"
            />
            <Picker.Item
              key={7}
              value={'Pós graduação em andamento'}
              label="Pós graduação em andamento"
            />
            <Picker.Item
              key={8}
              value={'Pós graduação '}
              label="Pós graduação concluido"
            />
            <Picker.Item key={9} value={'Bacharelado'} label="Bacharelado" />
          </Picker>
        </View>

        <View style={styles.containerInput}>
          <Text>Limite:</Text>
          <Slider
            minimumValue={0}
            maximumValue={1000}
            onValueChange={(vl) => setLimite(vl)}
            value={limite}
            step={1}
            minimumTrackTintColor="blue"
            maximumTrackTintColor="black"
            thumbTintColor="blue"
          />
        </View>
        {limite > 0 && <Text style={styles.slider}>{limite}</Text>}

        <View style={styles.containerInput}>
          <Text>Brasileiro:</Text>
          <Switch
            value={brasileiro}
            onValueChange={(vl) => setBrasileiro(vl)}
          />
        </View>

        <Button
          title="Confirmar"
          onPress={() => verifica()}
          thumbColor="blue"
        />
        <View style={styles.maiContainerExibe}>
          {exibe &&
              <View style={styles.containerExibe}>
                <Text style={[styles.txtExibe, styles.underline]}>
                  <Text style={styles.txtBold}>Nome:</Text> {nome}
                </Text>
                <Text style={[styles.txtExibe, styles.underline]}>
                  <Text style={styles.txtBold}>Idade:</Text>{' '}
                  {idade} anos
                </Text>
                <Text style={[styles.txtExibe, styles.underline]}>
                  <Text style={styles.txtBold}>Sexo:</Text> {sexo}
                </Text>
                <Text style={[styles.txtExibe, styles.underline]}>
                  <Text style={styles.txtBold}>Escolaridade:</Text>{' '}
                  {escolaridade}
                </Text>
                <Text style={[styles.txtExibe, styles.underline]}>
                  <Text style={styles.txtBold}>Limite:</Text> R$
                  {limite.toFixed(2)}
                </Text>
                <Text style={styles.txtExibe}>
                  <Text style={styles.txtBold}>Brasileiro:</Text>{' '}
                  {brasileiro === false ? 'Não' : 'Sim'}
                </Text>
              </View>
            }
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    minWidth: '100%',
  },
  containerInput: {
    display: 'flex',
    marginBottom: 10 
    // flexDirection: 'row',
    // justifyContent: 'space-between'
  },
  maiContainerExibe: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerExibe: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '80%',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 25,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    marginBottom: 15,
    padding: 6,
    borderWidth: 2,
    borderRadius: 4,
    borderColor: 'gray',
  },
  txtExibe: {
    fontSize: 14,
  },
  txtBold: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  underline: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(24, 24, 26, 0.6)',
    marginBottom: 3,
  },
  slider: {
    textAlign: 'center',
  },
});

