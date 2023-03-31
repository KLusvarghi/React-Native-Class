// App 09 -  Vagas de emprego de TI

import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import vagas from './api/vagas.json';

export default function App09() {

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Vagas</Text>

        {vagas.map((vaga, index) => (
          <View style={styles.containerView} key={index}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{vaga.title}</Text>
            </View>
            <Text style={styles.description}>{vaga.description}</Text>
            <Text style={styles.description}>R$ {(vaga.salario).toFixed(2).replace('.', ',')}</Text>
            <Text style={styles.description}>Contrato: {vaga.contrato}</Text>
            <Text style={styles.description}>Local: {vaga.local}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 10,
  },
  containerView: {
    maxWidth: 280,
    margin: 20,
    paddingLeft: 15,
    paddingRight: 15,
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'rgba(120, 117, 116, 0.5)',
  },
  title: {
    fontSize: 16,
    marginTop: 25,
    fontWeight: 'bold',
  },
  titleContainer: {
    alignItems: 'center',
    paddingBottom: 10,
  },
  description: {
    fontSize: 14,
    marginTop: 8,
  },
});
