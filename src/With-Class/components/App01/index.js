// Projeto 01 - Meu Perfil Profissional

import { TouchableOpacity, View, Text, Image, Linking } from 'react-native';
import informations from './Api/informations.json';
import { Component } from 'react';

import styles from './styles'
 
class App01 extends Component{
  constructor(props){
    super(props); 
    this.state = { 
    };
  }

  // Funções
  handleClick(url){
    Linking.openURL(url);
  }

  render(){
    // Variáveis
    let image = 'https://avatars.githubusercontent.com/u/71743008?s=400&u=5852c7746e5ebcc8678e591120438b3d99185e3a&v=4';

    return(
      <View style={styles.container}>

        <Text style={styles.titlePage}>Meu perfil</Text>
          <Image
            source={{ uri: image }}
            style={styles.image}
          />

        <View>
          <View style={styles.containerMidias}>
            <TouchableOpacity  onPress={() => this.handleClick('https://github.com/KLusvarghi')} style={styles.social}>GitHub</TouchableOpacity >
            <TouchableOpacity  onPress={() => this.handleClick('https://www.linkedin.com/in/kaua-lusvarghi-422b141b4/')} style={styles.social}>Linkedin</TouchableOpacity >
          </View>
        </View>

        <View>
          <View style={styles.subContainer}>
            <Text style={styles.subTitulo}>{informations[0].title}</Text>
            <View>
              <Text style={styles.texto}>{informations[0].description.nome}</Text>
              <Text style={styles.texto}>{informations[0].description.idade}</Text>
              <Text style={styles.texto}>{informations[0].description.cidade}</Text>
            </View>
          </View>

          <View style={styles.subContainer}>
            <Text style={styles.subTitulo}>{informations[1].title}</Text>
            <View>
              <Text style={styles.texto}>{informations[1].description.school}</Text>
              <Text style={[styles.texto, styles.list]}>• {informations[1].description.course[0].javascript}</Text>
              <Text style={[styles.texto, styles.list]}>• {informations[1].description.course[0].react}</Text>
              <Text style={[styles.texto, styles.list]}>• {informations[1].description.course[0].typescript}</Text>
              <Text style={[styles.texto, styles.list]}>• {informations[1].description.course[0].sass}</Text>
            </View>
          </View>

          <View style={styles.subContainer}>
            <Text style={styles.subTitulo}>{informations[2].title}</Text>
            <View>
              <Text style={styles.texto}>{informations[2].experiences[0].stage}</Text>
              <Text style={styles.texto}>{informations[2].experiences[0].bartender}</Text>
            </View>
          </View>

          <View style={styles.subContainer}>
            <Text style={styles.subTitulo}>{informations[3].title}</Text>
            <View>
              <Text 
                style={[styles.texto, styles.list]}
                onPress={() => handleClick(informations[3].projects[0].project01[0].url)}
              >
                • {informations[3].projects[0].project01[0].name}
                
              </Text>
              <Text 
                style={[styles.texto, styles.list]}
                onPress={() => handleClick(informations[3].projects[0].project02[0].url)}
              >
                • {informations[3].projects[0].project02[0].name}
                
              </Text>
              <Text 
                style={[styles.texto, styles.list]}
                onPress={() => handleClick(informations[3].projects[0].project03[0].url)}
              >
                • {informations[3].projects[0].project03[0].name}
                
              </Text>
              <Text 
                style={[styles.texto, styles.list]}
                onPress={() => handleClick(informations[3].projects[0].project04[0].url)}
              >
                • {informations[3].projects[0].project04[0].name}
                
              </Text>
              <Text 
                style={[styles.texto, styles.list]}
                onPress={() => handleClick(informations[3].projects[0].project05[0].url)}
              >
                • {informations[3].projects[0].project05[0].name}
                
              </Text>
              <Text 
                style={[styles.texto, styles.list]}
                onPress={() => handleClick(informations[3].projects[0].project06[0].url)}
              >
                • {informations[3].projects[0].project06[0].name}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.textoFooter}>© Alguns direitos reservados.</Text>
        </View>
      </View>
    )
  }
}

export default App01;