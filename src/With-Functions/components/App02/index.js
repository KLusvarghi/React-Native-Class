// App 02 - Contador de Pessoas

import { useState } from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';

export default function App02(){

  // Hook useState
  const [quantidade, setQuantidade] = useState(0);

  // Funções
  const operacao = (op) => {
    if(op === '+'){
      setQuantidade(quantidade + 1)
    }else {
      setQuantidade(quantidade -1)
    }
  }

    return(
      <View>
        <View style={styles.container}>
          <Text style={styles.title}>
            Contador de Pessoas
          </Text>
          <Text style={styles.contador} >{quantidade}</Text>  
        </View>
        <View style={styles.containerButton}>
          <Button 
            title="+" 
            onPress={() => operacao('+')} 
          />
        </View>
        <View style={styles.containerButton}>
          <Button 
            title="-" 
            onPress={() => operacao('-')} 
          />
        </View>
      </View>
    )
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