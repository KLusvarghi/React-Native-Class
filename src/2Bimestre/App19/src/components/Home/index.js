import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/Api';
import Filme from '../Filme';

export default function Home() {
  const [infoFilmes, setInfoFilmes] = useState([]);

  useEffect(() => {
    consultarFilmes();
  }, []);

  const consultarFilmes = async () => {
    const response = await api.get('/');
    setInfoFilmes(response.data);
  };

  return (
    <View>
      <FlatList
        data={infoFilmes}
        key={(item) => item.id}
        renderItem={({ item }) => <Filme data={item} />}
      />
    </View>
  );
}
