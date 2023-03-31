// App 06 - Jogo do nº aleatório

import { Component } from 'react';
import { View, Image, Text, Button, StyleSheet} from 'react-native';

class App06 extends Component{

  constructor(props){
    super(props); 
    this.state = { 
      number: '',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBH5KDRdXfrl4mjNhmV2hgHHk4M5ADmvMCw62qNCnaNM1u8Qebatcw-ziqll9V9u8GlDk&usqp=CAU',

    };
    this.modifica = this.modifica.bind(this); 
  }
  // Funções
  modifica(){
    this.setState({
      number: Number(Math.floor(Math.random() * 10)),
      image: `https://picsum.photos/${this.state.number}`
    });
    handleClear()
  }

  // https://picsum.photos/

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}>
          Jogo do Nº Aleatório
        </Text>

        <Image
          style={styles.image}
          source={{ uri: this.state.image }}
        />
        <Text>Pensem em um nº 0 à 10</Text>

        <Text style={styles.number}>{this.state.number}</Text>

        <Button 
          style={styles.button}
          title="Descobrir" 
          onPress={() => this.modifica()}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginTop: 25,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  image: {
    minWidth: 200, 
    minHeight: 200, 
    borderRadius: 10,
    marginBottom: 20,
  },
  number: {
    marginTop: 20,
    marginBottom: 20,
  }
});

export default App06;
