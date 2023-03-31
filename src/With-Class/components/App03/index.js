// App 03 - Multiplicação de 2 números

import { Component} from 'react';
import { View, Text, TextInput, Button, StyleSheet} from 'react-native';

class App03 extends Component{

  constructor(props){
    super(props); 
    this.state = { 
      num1: '',
      num2: '',
      resultado: 0
    };
    this.calcular = this.calcular.bind(this); 
  }
  // Funções
  calcular(){
    this.setState({
      resultado: this.state.num1 * this.state.num2
    });
    handleClear()
  }

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}>
          Multiplicador de Números
        </Text>

        <TextInput 
          value={this.state.num1}
          style={styles.input}
          placeholder="Digite o primeiro nº"
          onChangeText={ (number) => this.setState({num1: number})}
        />

        <TextInput 
          style={styles.input}
          value={this.state.num2}
          placeholder="Digite o segundo nº"
          onChangeText={ (number) => this.setState({num2: number})}
        />

        <Button 
          title="Calcular" 
          onPress={() => this.calcular()}
        />
        <Text style={styles.contador}>Resultado: {this.state.resultado}</Text>
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
    marginBottom: 20
  },
  input: {
    marginBottom: 15,
    padding: 6,
    paddingLeft: 25,
    paddingRigth: 25,
    borderWidth: 2,
    borderRadius: 4,
    borderColor: 'gray',
  },
  contador :{
    fontSize: 18,
    margin: 20,
  }
});

export default App03;
