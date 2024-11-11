// App.js
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  Image,
  ScrollView,
  TextInput
} from 'react-native';

const Stack = createStackNavigator();

// Tela do Timer
const TimerScreen = ({ navigation }) => {
  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [type, setType] = useState('work');

  useEffect(() => {
    let interval = null;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime(time => time - 1);
      }, 1000);
    } else if (time === 0) {
      if (type === 'work') {
        setTime(5 * 60);
        setType('break');
      } else {
        setTime(25 * 60);
        setType('work');
      }
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <View style={styles.container}>
      <Image 
        source={
          type === 'work' 
            ? require('./assets/work.png')
            : require('./assets/break.png')
        }
        style={styles.image}
      />
      <Text style={styles.timerText}>{formatTime(time)}</Text>
      <Text style={styles.phaseText}>
        {type === 'work' ? 'Hora de Focar!' : 'Hora da Pausa!'}
      </Text>
      <TouchableOpacity 
        style={[
          styles.button,
          { backgroundColor: isActive ? '#FF6B6B' : '#4CAF50' }
        ]}
        onPress={() => setIsActive(!isActive)}
      >
        <Text style={styles.buttonText}>
          {isActive ? 'Pausar' : 'Iniciar'}
        </Text>
      </TouchableOpacity>
      
      <View style={styles.navigationButtons}>
        <TouchableOpacity 
          style={styles.navButton}
          onPress={() => navigation.navigate('Statistics')}
        >
          <Text style={styles.navButtonText}>Estatísticas</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.navButton}
          onPress={() => navigation.navigate('Settings')}
        >
          <Text style={styles.navButtonText}>Configurações</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Tela de Estatísticas
const StatsScreen = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('./assets/stats.png')}
        style={styles.statsImage}
      />
      <View style={styles.statsCard}>
        <Text style={styles.statsTitle}>Suas Estatísticas</Text>
        <Text style={styles.statsText}>Sessões Completadas: 12</Text>
        <Text style={styles.statsText}>Tempo Total Focado: 300 min</Text>
        <Text style={styles.statsText}>Média Diária: 60 min</Text>
      </View>
    </View>
  );
};

// Tela de Configurações
const SettingsScreen = () => {
  const [workTime, setWorkTime] = useState('25');
  const [breakTime, setBreakTime] = useState('5');

  return (
    <View style={styles.container}>
      <Image 
        source={require('./assets/settings.png')}
        style={styles.settingsImage}
      />
      <View style={styles.settingsCard}>
        <Text style={styles.settingsTitle}>Configurações</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Tempo de Trabalho (min):</Text>
          <TextInput
            style={styles.input}
            value={workTime}
            onChangeText={setWorkTime}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Tempo de Pausa (min):</Text>
          <TextInput
            style={styles.input}
            value={breakTime}
            onChangeText={setBreakTime}
            keyboardType="numeric"
          />
        </View>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Tela de Histórico
const HistoryScreen = () => {
  const mockHistory = [
    { date: '2024-03-11', sessions: 4, totalTime: 100 },
    { date: '2024-03-10', sessions: 3, totalTime: 75 },
    { date: '2024-03-09', sessions: 5, totalTime: 125 },
  ];

  return (
    <ScrollView style={styles.historyContainer}>
      <Image 
        source={require('./assets/history.png')}
        style={styles.historyImage}
      />
      {mockHistory.map((item, index) => (
        <View key={index} style={styles.historyCard}>
          <Text style={styles.historyDate}>{item.date}</Text>
          <Text style={styles.historyText}>Sessões: {item.sessions}</Text>
          <Text style={styles.historyText}>Tempo Total: {item.totalTime} min</Text>
        </View>
      ))}
    </ScrollView>
  );
};

// App Principal
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerStyle: {
            backgroundColor: '#4CAF50',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name="Pomodoro Timer" component={TimerScreen} />
        <Stack.Screen name="Statistics" component={StatsScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="History" component={HistoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  timerText: {
    fontSize: 72,
    fontWeight: 'bold',
    color: '#2C3E50',
  },
  phaseText: {
    fontSize: 24,
    color: '#7F8C8D',
    marginVertical: 10,
  },
  button: {
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  navigationButtons: {
    flexDirection: 'row',
    marginTop: 40,
  },
  navButton: {
    backgroundColor: '#34495E',
    padding: 15,
    borderRadius: 15,
    marginHorizontal: 10,
  },
  navButtonText: {
    color: 'white',
    fontSize: 16,
  },
  statsImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  statsCard: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  statsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#2C3E50',
  },
  statsText: {
    fontSize: 18,
    color: '#7F8C8D',
    marginVertical: 5,
  },
  settingsImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  settingsCard: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  settingsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2C3E50',
  },
  inputContainer: {
    marginVertical: 10,
  },
  inputLabel: {
    fontSize: 16,
    color: '#7F8C8D',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#BDC3C7',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  historyContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 15,
  },
  historyImage: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginVertical: 20,
  },
  historyCard: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  historyDate: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 5,
  },
  historyText: {
    fontSize: 16,
    color: '#7F8C8D',
  },
});