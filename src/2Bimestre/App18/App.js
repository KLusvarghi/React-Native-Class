import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useState } from 'react';
import Constants from 'expo-constants';
import api from './Api';

export default function App() {
  const [confirm, setConfirm] = useState();
  const [login, setLogin] = useState();

  const [id, setid] = useState();
  const [nome, setNome] = useState();
  const [repositorios, setrepositorios] = useState();
  const [criado, setCriado] = useState();
  const [seguidorees, setseguidorees] = useState();
  const [seguindo, setSeguindo] = useState();
  const [photo, setPhoto] = useState(
    'https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg'
  );

  const consultaCep = async (login) => {
    const response = await api.get(login);

    if (confirm === true) {
      setid('');
      setNome('');
      setrepositorios('');
      setCriado('');
      setseguidorees('');
      setSeguindo('');
      setPhoto('https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg');
    } else {
      setid(response.data.id);
      setNome(response.data.name);
      setrepositorios(response.data.public_repos);
      setCriado(response.data.created_at);
      setseguidorees(response.data.followers);
      setSeguindo(response.data.following);
      setPhoto(response.data.avatar_url);
    }
    setConfirm(!confirm);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Perfil dos Devs</Text>
      <View style={styles.containerPhoto}>
        <Image
          source={{
            uri: photo,
          }}
          style={styles.photo}
        />
      </View>
      <View>
        <TextInput
          placeholder="Digite o login git..."
          style={styles.input}
          value={login}
          onChangeText={(vl) => setLogin(vl)}
        />
        <TouchableOpacity style={styles.btn} onPress={() => consultaCep(login)}>
          Consultar
        </TouchableOpacity>
      </View>
      {confirm && (
        <View>
          <Text>Id: {id}</Text>
          <Text>Nome: {nome}</Text>
          <Text>Repositórios: {repositorios}</Text>
          <Text>Criado em: {criado}</Text>
          <Text>Seguidores: {seguidorees}</Text>
          <Text>Seguindo: {seguindo}</Text>
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
  containerPhoto: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  photo: {
    display: 'flex',
    justifyContent: 'center',
    height: 100,
    width: 100,
  },
});
