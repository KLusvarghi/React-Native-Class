import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Pessoal from './src/pages/Pessoal';
import Formacao from './src/pages/Formacao';
import Experiencia from './src/pages/Experiencia';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#121212" barStyle="light-content" />
      <NavigationContainer style={{ backgroundColor: '#121212' }}>
        <Tab.Navigator
            tabBarOptions={{
            activeTintColor: '#09ebbe',
            inactiveTintColor: 'gray',
            style: { backgroundColor: '#121212', marginTop: 25 },
            labelStyle: { fontSize: 12, fontWeight: 'bold' },
            indicatorStyle: { backgroundColor: '#40e6c4', position: 'absolute',},
            backgroundColor: '#121212',
          }}
        >
          <Tab.Screen name='Pessoal' component={Pessoal} />
          <Tab.Screen name='Formacao' component={Formacao} />
          <Tab.Screen name='Exp' component={Experiencia} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}