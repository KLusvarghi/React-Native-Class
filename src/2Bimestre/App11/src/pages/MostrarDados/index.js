import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function MostrarDados({ route }) {
  const navigation = useNavigation();

  navigation.setOptions({
    title: `Dados`,
  });
  return (
    <View>
      <Text>Dados</Text>
      <Text>Nome: {route.params?.nome}</Text>
      <Text>Idade: {route.params?.idade}</Text>
      <Text>Sexo: {route.params?.sexo}</Text>
      <Text>Escolaridade: {route.params?.escolaridade}</Text>
      <Text>Limite: {route.params?.limite}</Text>
      <Text>Nacionalidade: {route.params?.nacionalidade}</Text>

      <Button
        title="Voltar para o Formulário"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}
