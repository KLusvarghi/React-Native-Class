// App 05 - Cálculo do IMC

import { Component } from 'react';
import { View, Image, Text, TextInput, Button, StyleSheet} from 'react-native';

class App05 extends Component{

  constructor(props){
    super(props); 
    this.state = { 
      peso: '',
      altura: '',
      resultado: '',
      classificacao: ''
    };
    this.Calcular = this.calcular.bind(this); 
  }
  // Funções
  calcular(){
    this.setState({
      resultado:(this.state.peso / (this.state.altura * this.state.altura)).toFixed(2)
    });
    if(this.state.resultado < 18.5){
      this.setState({classificacao:('Você está abaixo do peso!')})
    }else if(this.state.resultado >= 18.5 && this.state.resultado < 25) {
      this.setState({classificacao:('Você está no Peso normal!')})
    }
    else if(this.state.resultado >= 25 && this.state.resultado < 30){
      this.setState({classificacao:('Você está com excesso de peso!')})
    } 
    else if(this.state.resultado > 30 && this.state.resultado <= 34.99) {
     this.setState({classificacao:('Você está obeso(a)!')}) 
    }
    else this.setState({classificacao:('Você está com obesidade extrema!')}) 
  }

  

  render(){
    let image = 'https://www.fetalmed.net/wp-content/uploads/2020/09/imagem-destacada-imc.jpg';

  

    return(
      <View style={styles.container}>
        <Text style={styles.title}>
          Cálculo do IMC
        </Text>

        <Image
          source={{ uri: image }}
          style={styles.image}
        />

        <TextInput 
          value={this.state.peso}
          style={styles.input}
          placeholder="Peso"
          onChangeText={ (n) => this.setState({peso: n})}
        />

        <TextInput 
          style={styles.input}
          value={this.state.altura}
          placeholder="Altura"
          onChangeText={ (n) => this.setState({altura: n})}
        />

        <Button 
          title="Verificar" 
          onPress={() => this.calcular()}
        />
          <Text>
            {
            this.state.resultado != 'NaN' && this.state.resultado.length > 1 && <Text style={styles.contador}>Seu IMC é de: {this.state.resultado} <br/> {this.state.classificacao}</Text>
            }
          </Text>
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
    width: 100, 
    height: 100, 
  },
});

export default App05;
