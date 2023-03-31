// App 08 - Anúncios para venda de produtos

import { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import restaurantes from './Api/restaurantes.json';

class App08 extends Component {
  render() {
    let url = './assets/pratos'
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} horizontal={true}>
          {restaurantes.map((prato, index) => (
            <View style={styles.containerView} key={index}>
              <View style={styles.containerTitle}>
                <Text style={styles.title}>{prato.title}</Text>
              </View>
              <Image 
                style={styles.image} 
                source={{uri: `${prato.photo}`}}
                />
              <View style={styles.informations}>
                <Text style={styles.description}>{prato.description}</Text>
                <View  style={styles.group}>
                  <Text style={styles.descriptionGroup}>
                    Serve até {prato.serving}
                  </Text>
                  <Text style={styles.descriptionGroup}>R$ {(prato.price).toFixed(2).replace('.', ',')}</Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    margin: 20,
  },
  containerTitle: {
    maxWidth: '80%',
  },
  containerView: {
    borderRadius: 10,
    width: 280,
    margin: 20,
    borderWidth: 2,
    borderColor: 'rgba(120, 117, 116, 0.5)',
    padding: 10,
    alignItems: 'center',
  },
  title: {
    color: '#BF5F36',
    fontSize: 20,
    marginTop: 25,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  description: {

  },
  image: {
    width: 200,
    height: 200,
    borderWidth: 1,
    borderRadius: '6%',
    borderColor: 'rgba(120, 117, 116, 0.5)',
  },
  informations: {
    paddingTop: 16,
    paddingRight: 10,
    paddingLeft: 23,
  },
  group: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    maxWidth: '90%',
    justifyContent: 'space-between'
  },
  descriptionGroup: {
    backgroundColor: '#BF5F36',
    paddingTop: 8, 
    paddingBottom: 8, 
    paddingLeft: 12, 
    paddingRight: 12, 
    borderRadius: 6,
    color: '#fff',
  }
});

export default App08;

// source={require(`./assets/pratos/${prato.photo}`)}
