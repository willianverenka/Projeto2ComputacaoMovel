import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { storage } from '../storage';
import controle from '../controle';

const Timer = ({ navigation, workTime: tempoTrabalho, breakTime: tempoPausa }) => {
    const [segundos, setSegundos] = useState(parseInt(tempoTrabalho) * 60);
    const [ativo, setAtivo] = useState(false);
    const [type, setType] = useState('work');

    const adicionarNovaSessao = (tempoFocado) => {
        storage.salvarSessao(tempoFocado);
    }

    const atualizarTempoFocado = async () => {
        try {
          const tempoFocadoAtual = await AsyncStorage.getItem('tempoTotalFocado') || '0';
          const novoTempo = parseInt(tempoFocadoAtual) + 1;
          await AsyncStorage.setItem('tempoTotalFocado', novoTempo.toString());
        } catch (error) {
          console.error('Erro ao atualizar o tempo focado:', error);
        }
      };

      const atualizarSessoesCompletadas = async () => {
        try {
          const sessoesAtuais = await AsyncStorage.getItem('sessoesCompletadas') || '0';
          const novasSessoes = parseInt(sessoesAtuais) + 1;
          await AsyncStorage.setItem('sessoesCompletadas', novasSessoes.toString());
        } catch (error) {
          console.error('Erro ao atualizar o tempo focado:', error);
        }
      };

      const ativaSensoresCelular = async () => {
        await controle.vibrar();
        await controle.tocarAudio();
      }
  
    useEffect(() => {
      if (type === 'work') {
        setSegundos(parseInt(tempoTrabalho) * 60);
      } else {
        setSegundos(parseInt(tempoPausa) * 60);
      }
      setAtivo(false);
    }, [tempoTrabalho, tempoPausa]); // toda vez que o tempo de trabalho ou pausa mudar, renderiza novamente o componente
  
    useEffect(() => {
      let intervalo = null;
      if (ativo && segundos > 0) {
        intervalo = setInterval(() => {
          setSegundos(tempo => 
            {
                // se um minuto passou, incrementa o tempo focado (para utilizar o modulo de estatisticas)
                // checa se o tempo eh diferente do input para nao incrementar instantaneamente quando inicia o timer
                if(tempo % 60 === 0 && type === 'work' && tempo != tempoTrabalho * 60) { 
                    atualizarTempoFocado();
                }
                return tempo - 1;
            })
        }, 1000);
      } else if (segundos === 0) {
        if (type === 'work') {
          // se o tempo de trabalho acabou, incrementa o numero de sessoes completadas
          atualizarSessoesCompletadas();
          adicionarNovaSessao(tempoTrabalho);
          atualizarTempoFocado(); // tambem incrementa o tempo focado pois ele nao sera incrementado na checagem padrao do setSegundos
          setSegundos(parseInt(tempoPausa) * 60);
          setType('break');
          setAtivo(false);
        } else {
          setSegundos(parseInt(tempoTrabalho) * 60);
          setType('work');
          setAtivo(false);
        }
        ativaSensoresCelular();
      }
      return () => clearInterval(intervalo);
    }, [ativo, segundos, tempoTrabalho, tempoPausa]);
  
    const formatarTempo = (seg) => {
      const mins = Math.floor(seg / 60);
      const segs = seg % 60;
      return `${mins}:${segs < 10 ? '0' : ''}${segs}`;
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.timerText}>{formatarTempo(segundos)}</Text>
        <Text style={styles.phaseText}>
          {type === 'work' ? 'Tempo de Trabalho' : 'Tempo de Pausa'}
        </Text>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: ativo ? '#E74C3C' : '#2ECC71' }]}
          onPress={() => setAtivo(!ativo)}
        >
          <Text style={styles.buttonText}>
            {ativo ? 'Pausar' : 'Iniciar'}
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

  