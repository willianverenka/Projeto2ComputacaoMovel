import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { styles } from '../styles';
import { storage } from '../storage';

const Estatisticas = ({ navigation }) => {
    const [valores, setValores] = useState({ 
        sessoesCompletadas: 0, 
        tempoTotalFocado: 0
    });

    const limparDados = async () => {
        await storage.limparEstatisticas();
        await storage.limparHistorico();
    };

    const getValorMediaSessoes = () => {

        // evita divisao por zero
        if(valores.sessoesCompletadas === 0) {
            return 0;
        }
        return valores.tempoTotalFocado / valores.sessoesCompletadas;
    };

    useEffect(() => {
        const carregarEstatisticas = async() => {
            const estatisticas = await storage.getEstatisticas();

            // se atualiza o estado do componente se os valores estiverem diferentes
            // evita o loop infinito do useEffect
            if(estatisticas.sessoesCompletadas !== valores.sessoesCompletadas ||
               estatisticas.tempoTotalFocado !== valores.tempoTotalFocado)
            {
            setValores(estatisticas);
        }
    };

        carregarEstatisticas();
    });

    
    return (
        <View style={styles.container}>
          <Image 
            source={require('../assets/stats.png')}
            style={styles.statsImage}
          />
          <View style={styles.statsCard}>
            <Text style={styles.statsTitle}>Suas Estatísticas</Text>
            <Text style={styles.statsText}>Sessões completas: {valores.sessoesCompletadas}</Text>
            <Text style={styles.statsText}>Tempo total focado: {valores.tempoTotalFocado} min</Text>
            <Text style={styles.statsText}>Média por sessão: {getValorMediaSessoes().toFixed(2)} min</Text>
            
          </View>

          <View style={styles.navigationButtons}>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => navigation.navigate('Historico')}
          >
            <Text style={styles.navButtonText}>Histórico</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.navButton, { backgroundColor: "#E74C3C" }]}
            onPress={() => limparDados()}
          >
            <Text style={styles.navButtonText}>Limpar dados</Text>
          </TouchableOpacity>
        </View>

        </View>
      );
  }


  export default Estatisticas;