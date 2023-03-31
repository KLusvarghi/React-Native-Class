import React, { Component } from 'react';
import { View, Text, Image} from 'react-native';


class App02 extends Component{
  render(){
    return(
      <View>
        <Text>Meu Primeiro App</Text>
        <Text style={{color: '#FF0000', fontSize: 25, margin: 15}}>React Native</Text>
        <Macgyver width={100} height={100} text='Hellow world!'/>
      </View>
    )
  }
}

class Macgyver extends Component {
  render(){
    let img = 'https://vejasp.abril.com.br/wp-content/uploads/2016/12/ads_macgyver1.jpg';
    return(
      <View>
        <Image
          source={{ uri: img }}
          style={{ width: this.props.width, height: this.props.height}}
        />
        <Text>{this.props.text}</Text>
      </View>
    )
  }
}

export default App02;
