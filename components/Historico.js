import React, { useState, useEffect } from 'react';
import { styles } from '../styles';
import { View, Text } from 'react-native';
import { storage } from '../storage';

const Historico = ({ navigation }) => {
    const [sessoes, setSessoes] = useState([]);

    const sessoesForamAtualizadas = (sessoesAtuais, novasSessoesCarregadas) => {
        return JSON.stringify(sessoesAtuais) !== JSON.stringify(novasSessoesCarregadas);
    }

    useEffect(() => {
        const carregarSessoes = async () => {
            const novasSessoes = await storage.getSessoes();
            if(sessoesForamAtualizadas(sessoes, novasSessoes)) {
                setSessoes(novasSessoes);
            }
        };

        carregarSessoes();
    });

    return (
        <View style={styles.historyContainer}>
            {sessoes.map((sessao, index) => (
                <View key={index} style={styles.historyCard} >
                    <Text style={styles.historyDate}>Data: {sessao.data}</Text>
                    <Text style={styles.historyText}>Tempo Focado: {sessao.tempoFocado} min</Text>
                </View>
            ))}
        </View>
    )
}

export default Historico;