import { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Switch,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default function AberturaConta() {
  const navigation = useNavigation();

  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState(null);
  const [sexo, setSexo] = useState(null);
  const [escolaridade, setEscolaridade] = useState(null);
  const [limite, setLimite] = useState(0);
  const [brasileiro, setBrasileiro] = useState(false);

  function enviar() {
    navigation.navigate('MostrarDados', {
      nome: nome,
      idade: idade,
      sexo: sexo,
      escolaridade: escolaridade,
      limite: limite,
      brasileiro: brasileiro,
    });
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Abertura de Conta</Text>

        <View style={styles.containerInput}>
          <Text>Nome:</Text>
          <TextInput
            placeholder="Seu nome"
            style={styles.input}
            value={nome}
            onChangeText={(vl) => setNome(vl)}
          />
        </View>

        <View style={styles.containerInput}>
          <Text>Idade:</Text>
          <TextInput
            placeholder="Sua idade"
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
            onValueChange={(itemValue) => setEscolaridade(itemValue)}>
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
          <View style={styles.isBrazil}>
            <Text style={styles.brazil}>Brasileiro:</Text>
            <Switch
              value={brasileiro}
              onValueChange={(vl) => setBrasileiro(vl)}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.btn} onPress={enviar}>
          <Text>Confirmar</Text>
        </TouchableOpacity>
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
    marginBottom: 10,
  },
  isBrazil: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
  },
  brazil: {
    marginRight: 30,
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
  slider: {
    textAlign: 'center',
  },
  btn: {
    marginTop: 20,
    textAlign: 'center',
    backgroundColor: 'red',
    color: 'white',
    padding: 5,
  },
});
