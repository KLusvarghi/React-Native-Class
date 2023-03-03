import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 20,
  },
  subContainer: {
    maxHeight: 800,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 20,
    paddingBottom: 20,
    margin: 15,
    borderRadius: 8,
    fontSize: 20, 
    backgroundColor: '#131821', 
  },
  containerMidias: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 14,
    marginBottom: 14,
  },
  social : {
    padding: 8,
    paddingLeft: 12,
    paddingRight: 12,
    marginLeft: 10, 
    borderRadius: 8,
    color: '#85888C',
    backgroundColor: '#131821',
  },
  image: {
    width: 200, 
    height: 200, 
    borderWidth: 4, 
    borderRadius: '50%', 
    borderColor: '#131821'
  },
  titlePage: {
    padding: 10,
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
    color: '#fff',
  },
  subTitulo: {
    marginBottom: 8,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F5F5F5'
  },
  texto: {
    fontSize: 14,
    lineHeight: 20,
    color: '#D5D5D5',
  },
  list: {
    paddingLeft: 8,
    lineHeight: 22,
  },
  footer: {
    width: '100%',
    padding: 18,
    marginTop: 10,
    textAlign: 'center',
    backgroundColor: '#131821',
  },
  textoFooter: {
    lineHeight: 22,
    color: '#3A3F4C',
  }
});

export default styles