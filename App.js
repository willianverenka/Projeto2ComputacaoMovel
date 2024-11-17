import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { 
  View, 
  Text, 
  Image,
  ScrollView,
} from 'react-native';

import Timer from './components/Timer';
import Configuracoes from './components/Configuracoes';
import Estatisticas from './components/Estatisticas';

const Stack = createStackNavigator();

export default function App() {
  const [workTime, setWorkTime] = useState('25');
  const [breakTime, setBreakTime] = useState('5');

  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerStyle: {
            backgroundColor: '#ABCDEF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name="Inicio">
          {(props) => (
            <Timer 
              {...props}
              workTime={workTime}
              breakTime={breakTime}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Estatisticas" component={Estatisticas} />
        <Stack.Screen name="Configuracoes">
          {(props) => (
            <Configuracoes 
              {...props}
              workTime={workTime}
              breakTime={breakTime}
              onUpdateSettings={(newWorkTime, newBreakTime) => {
                setWorkTime(newWorkTime);
                setBreakTime(newBreakTime);
              }}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

