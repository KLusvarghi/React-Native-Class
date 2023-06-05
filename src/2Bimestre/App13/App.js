import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Pessoal from './src/pages/Pessoal';
import Formacao from './src/pages/Formacao';
import Experiencia from './src/pages/Experiencia';

const Tab = createBottomTabNavigator();

const icons = {
  Pessoal: {
    name: 'user',
  },
  Formacao: {
    name: 'graduation-cap',
  },
  Experiencia: {
    name: 'briefcase',
  },
  Projetos: {
    name: 'file-text',
  },
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            const { name } = icons[route.name];
            return <FontAwesome name={name} color={color} size={size} />;
          },
        })}
        tabBarOptions={{
          activeBackgroundColor: '#1e1e1e',
          activeTintColor: '#40e6c4',
          inactiveBackgroundColor: '#121212',
          inactiveTintColor: 'gray',
          labelStyle: { display: 'none' }, 
        }}
      >
        <Tab.Screen name="Pessoal" component={Pessoal} options={{ headerShown: false }} />
        <Tab.Screen name="Formacao" component={Formacao} options={{ headerShown: false }} />
        <Tab.Screen name="Experiencia" component={Experiencia} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}