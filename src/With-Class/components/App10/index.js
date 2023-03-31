// App 10 - Conversor de Moedas

import React, { Component} from 'react';
import { View, TextInput, Text, Button, StyleSheet } from 'react-native';
import { Picker} from '@react-native-picker/picker';
import conversoes from './api/conversoes.json';

class App10 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      valor: '',
      de: '',
      para: 0,
      resultado: 0,
      exibe: false,
    };
  }

  converter() {
    if(this.state.de === 0 || this.state.para === 0 || this.state.valor === null || this.state.valor === 0 ){
      alert('Prenencha os valores!')
      this.setState({
        exibe: false
      });
    }
    else if(this.state.de === this.state.para) {
      this.setState({
        exibe: !this.state.exibe,
        resultado: this.state.valor
      });
    }else if(this.state.de !== this.state.para) {
      let compara = `${this.state.de}-${this.state.para}`;
      conversoes.map(item => {
        if(item.title === compara){
          this.setState({
            exibe: !this.state.exibe,
            resultado: ( (item.conversao * this.state.valor).toFixed(2).replace('.', ',') )
          });
        }
      })
    }
  }

   render() {

    return (
        <View style={styles.container}>
      <Text style={styles.title}>
        Conversos de Modedas: Dólar, Real e Euro
      </Text>

      <View style={styles.containerInput}>
        <Text style={styles.label}>Valor:</Text>
        <TextInput 
          placeholder="Digite um valor"
          style={styles.input}
          value={this.state.valor}
          onChangeText={ (n) => this.setState({ valor: n })}
        />
      </View>

      <View style={styles.containerInput}>
        <Text style={styles.label}>De:</Text>
        <Picker
          style={styles.input}
          selectedValue={this.state.de}
          onValueChange={(n) => this.setState({ de: n })}
        >
          <Picker.Item key={0} value={''} label="Selecione"/>
          <Picker.Item key={1} value={'USD'} label="Dolár" />
          <Picker.Item key={2} value={'BRL'} label="Real" />
          <Picker.Item key={2} value={'EUR'} label="Euro" />
        </Picker>
      </View>

      <View style={styles.containerInput}>
        <Text style={styles.label}>Para:</Text>
        <Picker
          style={styles.input}
          selectedValue={this.state.para}
          onValueChange={(n) => this.setState({ para: n })}
        >
          <Picker.Item key={0} value={''} label="Selecione"/>
          <Picker.Item key={1} value={'USD'} label="Dolár" />
          <Picker.Item key={2} value={'BRL'} label="Real" />
          <Picker.Item key={2} value={'EUR'} label="Euro" />
        </Picker>
      </View>
      
      <Button 
        title="Converter" 
        onPress={() => this.converter()}
        thumbColor='blue'
      />
      {this.state.exibe &&
        <View>
          <Text style={styles.mensagem}>Conversão: <Text style={styles.resultado}>{this.state.valor ? this.state.resultado : ''}</Text></Text>
        </View>
      }
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 20
  },
  containerInput: {
    display: 'flex',
    width: '100%'
  },
  title: {
    textAlign: 'center',
    fontSize: 26,
    marginTop: 25,
    marginBottom: 20,
    fontWeight: 'bold'
  },
  input: {
    marginBottom: 15,
    padding: 6,
    borderWidth: 2,
    borderRadius: 4,
    borderColor: 'gray',
  },
  label: {
    fontSize: 16
  },
  resultado: {
    fontWeight: 'bold',
    fontSize: 22,
    marginTop: 25,
  },
  mensagem: {
    fontSize: 22,
    marginTop: 25,
  }
});

export default App10;

