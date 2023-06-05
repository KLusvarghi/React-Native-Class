import { View, Text, Image, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Filme(props) {

  const navigation = useNavigation();

  function irSobre(){
      navigation.navigate('Details');
  }

  return (
    <View>
      <View>
        <Text>{props.data.nome}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Details', {sinopse: props.data.sinopse})}>
          <Text>Leia mais</Text>
        </TouchableOpacity>
      </View>
      <Image
        source={{uri: props.data.foto}}
        style={{ width: 300, height: 100 }}
      />
    </View>
  );
}