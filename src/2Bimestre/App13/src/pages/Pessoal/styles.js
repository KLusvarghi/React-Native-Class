import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    padding: 10,
  },
  divImgPessoal: {
    marginTop: 10,
    alignItems: 'center',
  },
  imgPessoal: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  divItem: {
    flexDirection: 'row',
    marginTop: 25,
  },
  divIconItem :{
    marginLeft: 25,
    marginRight: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textItem: {
    color: '#c1c1c1',
    fontSize: 15,
    marginLeft: 10,
  },
  textInfItem: {
    marginLeft: 10,
    color: '#fff',
    fontSize: 18,
    fontWeight: '900',
    marginBottom: 5,
  },
  divInfItem: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#262626',
  },
});

export {styles};
