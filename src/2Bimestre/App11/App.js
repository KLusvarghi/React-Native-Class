import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AberturaConta from './src/pages/AberturaConta';
import MostrarDados from './src/pages/MostrarDados';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="AberturaConta"
          component={AberturaConta}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="MostrarDados" component={MostrarDados} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
