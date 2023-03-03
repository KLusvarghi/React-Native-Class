import React, { Component } from 'react';
import { View, Text, Button} from 'react-native';

class App02 extends Component{
  // sendo o contructor que iremos definir o estado 
  constructor(props){
    super(props); // esse super faz com que esse construtor herde o construtor de "Component"
    this.state = { // sendo esse o state
      // aqui dentro é onde eu coloco as variáveis de estado que irei querer mudar
      nome: 'Joseffe',
      idade: 20
    };
    
    // usando o bind para fazer referencia ao objeto entrar, para quando eu clicar no botão o "this" 
    // faça referencia ao objeto e que sejapossivel acessar a função  "entrar"
    this.entrar = this.entrar.bind(this); 
  }

  // método entrar que recebe uma variavel 
  // que irá setar o valor de "nome" e renderiza a tela
  entrar(nomeEnviado, idadeEnviada){
    // se tentar setar o valor nesta linha do comentário para ( nome: nomeEnviado ), ele irá apenas mudar o nome, más não irá renderizar a tela
    // Assim, não execurando o método 'render', que é responsavel por renderizar toda a tela
    // havendo o "render()" apenas em classes
    // Apenas renderizando se estiver dentro da função "this.setState"
    this.setState({
      nome: nomeEnviado,
      idade: idadeEnviada
    });
  }

  render(){
    return(
      <View style={{ marginTop: 20 }}>
        <Button title="Entrar" onPress={() => this.entrar('Joseffe B. Oliveira', 19)} />
        <Text style={{fontSize: 28, color: 'red', textAlign: 'center'}}>
          {this.state.nome}
        </Text>
        <Text style={{fontSize: 28, color: 'red', textAlign: 'center'}}>
          {this.state.idade}
        </Text>
      </View>
    )
  }
}

export default App02;
