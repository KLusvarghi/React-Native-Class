// App 04 - Alcool ou gasolina

import { Component } from 'react';
import { View, Image, Text, TextInput, Button, StyleSheet} from 'react-native';

class App04 extends Component{

  constructor(props){
    super(props); 
    this.state = { 
      num1: '',
      num2: '',
      resultado: ''
    };
    this.Calcular = this.calcular.bind(this); 
  }
  // Funções
  calcular(){
    const calc = +(this.state.num1 / this.state.num2).toFixed(3);
    if (calc < 0.7){
      this.setState({
        resultado: 'Melhor utilziar Alcool'
      });
    }else if(calc > 0.7) {
      this.setState({
        resultado: 'Melhor utilziar Gasolina'
      });
    }else {
      this.setState({
        resultado: 'Prencha os valores!'
      });
    }
    handleClear()
  }
  
  render(){
    const image = 'https://png.pngtree.com/png-vector/20191028/ourlarge/pngtree-gas-station-icon-cartoon-style-png-image_1896261.jpg';

    return(
      <View style={styles.container}>
        <Text style={styles.title}>
          Alcool ou Gasolina
        </Text>

        <Image
          source={{ uri: image }}
          style={styles.image}
        />

        <TextInput 
          value={this.state.num1}
          style={styles.input}
          placeholder="Preço do Alcool"
          onChangeText={ (n) => this.setState({num1: n})}
        />

        <TextInput 
          style={styles.input}
          value={this.state.num2}
          placeholder="Preco da Gasolina"
          onChangeText={ (n) => this.setState({num2: n})}
        />

        <Button 
          title="Verificar" 
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
    marginBottom: 20,
    fontWeight: 'bold'
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
  },
    image: {
    width: 200, 
    height: 200, 
  },
});

export default App04;
