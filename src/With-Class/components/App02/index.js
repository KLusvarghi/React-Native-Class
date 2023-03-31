// App 02 - Contador de Pessoas

import { Component } from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';

class App02 extends Component{

  constructor(props){
    super(props); 
    this.state = { 
      quantiadde: 0
    };
    this.operacao = this.operacao.bind(this); 
  }
  // Funções
  operacao(op){
    if(op === '+'){
      this.setState({
        quantiadde: this.state.quantiadde + 1
      });
    }else {
      this.setState({
        quantiadde: this.state.quantiadde - 1
      });
    }
  }

  render(){
    return(
      <View>
        <View style={styles.container}>
          <Text style={styles.title}>
            Contador de Pessoas
          </Text>
          <Text style={styles.contador} >{this.state.quantiadde}</Text>  
        </View>
        <View style={styles.containerButton}>
          <Button 
            title="+" 
            onPress={() => this.operacao('+')} 
          />
        </View>
        <View style={styles.containerButton}>
          <Button 
            title="-" 
            onPress={() => this.operacao('-')} 
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerButton: {    
    padding: 10,
    fontFamily: 'Verdana'
  },
  title: {
    marginTop: 16,
    fontSize: 24,
  },
  contador :{
    padding: 20,
    margin: 20,
    fontSize: 22,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#FAFAFA',
  }
});

export default App02;
