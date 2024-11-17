import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { styles } from '../styles';

const Timer = ({ navigation, workTime, breakTime }) => {
    const [tempo, setTime] = useState(parseInt(workTime) * 60);
    const [isActive, setIsActive] = useState(false);
    const [type, setType] = useState('work');
  
    // Add this new useEffect to handle prop changes
    useEffect(() => {
      // Reset timer when workTime or breakTime changes
      if (type === 'work') {
        setTime(parseInt(workTime) * 60);
      } else {
        setTime(parseInt(breakTime) * 60);
      }
      // Stop the timer when settings change
      setIsActive(false);
    }, [workTime, breakTime]);
  
    useEffect(() => {
      let interval = null;
      if (isActive && tempo > 0) {
        interval = setInterval(() => {
          setTime(time => time - 1);
        }, 1000);
      } else if (tempo === 0) {
        if (type === 'work') {
          setTime(parseInt(breakTime) * 60);
          setType('break');
        } else {
          setTime(parseInt(workTime) * 60);
          setType('work');
        }
      }
      return () => clearInterval(interval);
    }, [isActive, tempo, workTime, breakTime]);
  
    const formatarTempo = (seg) => {
      const mins = Math.floor(seg / 60);
      const segs = seg % 60;
      return `${mins}:${segs < 10 ? '0' : ''}${segs}`;
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.timerText}>{formatarTempo(tempo)}</Text>
        <Text style={styles.phaseText}>
          {type === 'work' ? 'Tempo de Trabalho' : 'Tempo de Pausa'}
        </Text>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: isActive ? '#E74C3C' : '#2ECC71' }]}
          onPress={() => setIsActive(!isActive)}
        >
          <Text style={styles.buttonText}>
            {isActive ? 'Pausar' : 'Iniciar'}
          </Text>
        </TouchableOpacity>
        <View style={styles.navigationButtons}>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => navigation.navigate('Estatisticas')}
          >
            <Text style={styles.navButtonText}>Estatísticas</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => navigation.navigate('Configuracoes')}
          >
            <Text style={styles.navButtonText}>Configurações</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  export default Timer;

  