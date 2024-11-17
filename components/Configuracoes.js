import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { styles } from '../styles';

const Configuracoes = ({ workTime, breakTime, onUpdateSettings, navigation }) => {
    const [localWorkTime, setLocalWorkTime] = useState(workTime);
    const [localBreakTime, setLocalBreakTime] = useState(breakTime);
  
    const handleSave = () => {
      onUpdateSettings(localWorkTime, localBreakTime);
      navigation.goBack();
    };
  
    return (
      <View style={styles.container}>
        <Image 
          source={require('../assets/settings.png')}
          style={styles.settingsImage}
        />
        <View style={styles.settingsCard}>
          <Text style={styles.settingsTitle}>Configurações</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Tempo de Trabalho (min):</Text>
            <TextInput
              style={styles.input}
              value={localWorkTime}
              onChangeText={setLocalWorkTime}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Tempo de Pausa (min):</Text>
            <TextInput
              style={styles.input}
              value={localBreakTime}
              onChangeText={setLocalBreakTime}
              keyboardType="numeric"
            />
          </View>
          <TouchableOpacity 
            style={styles.saveButton} 
            onPress={handleSave}
          >
            <Text style={styles.saveButtonText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  export default Configuracoes;