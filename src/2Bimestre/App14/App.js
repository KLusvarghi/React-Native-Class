import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, Switch, Text, View } from 'react-native';
[];
import { styles } from './style';

export default function App() {
  const [bg, setBg] = useState(false);
  const [size, setSize] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setData();
  }, [bg, size, setData]);

  async function getData() {
    const bg = await AsyncStorage.getItem('bg');
    const size = await AsyncStorage.getItem('size');

    setBg(bg === 'true' && true);
    setSize(size === 'true' && true);
  }

  async function setData() {
    await AsyncStorage.setItem('bg', String(bg));
    await AsyncStorage.setItem('size', String(size));
  }
  return (
    <View style={styles.container}>
      <View style={styles.titlePage}>
        <Text style={styles.titleText}>Frases</Text>
      </View>

      <View style={styles.areaOp}>
        <View style={styles.op}>
          <Text style={styles.opTitle}>Dia</Text>
          <Switch
            style={styles.opSwitch}
            value={bg}
            onValueChange={(valor) => setBg(valor)}
          />
        </View>

        <View style={styles.op}>
          <Text style={styles.opTitle}>Pequeno</Text>
          <Switch
            style={styles.opSwitch}
            value={size}
            onValueChange={(valor) => setSize(valor)}
          />
        </View>
      </View>

      <View style={[styles.areaFrase, bg && styles['bg-light']]}>
        <Text
          style={[
            styles.textFrase,
            bg && styles['text-dark'],
            size && styles.small,
          ]}>
          "É um erro grave formular teorias antes de conhecer os fatos. Sem
          querer, começamos a mudar os fatos para que se adaptem às teorias, em
          vez de formular teorias que se ajustem aos fatos."{'\n'}
          {'\n'}(Sherlock Holmes)
        </Text>
      </View>
    </View>
  );
}
