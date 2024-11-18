import AsyncStorage from "@react-native-async-storage/async-storage";

export const storage = {
    getEstatisticas: async () => {
        try {
            const sessoes = await AsyncStorage.getItem('sessoesCompletadas');
            const tempo = await AsyncStorage.getItem('tempoTotalFocado');
            
            return {
                sessoesCompletadas: parseInt(sessoes || '0'),
                tempoTotalFocado: parseInt(tempo || '0')
            };
        } catch (error) {
            console.error('Erro ao obter estatísticas:', error);
            return { sessoesCompletadas: 0, tempoTotalFocado: 0 };
        }
    },

    getSessoes: async () => {
        try {
            const sessoesString = await AsyncStorage.getItem('sessoes');
            return sessoesString ? JSON.parse(sessoesString) : [];
        } catch (error) {
            console.error('Erro ao obter sessões:', error);
            return [];
        }
    },

    salvarSessao: async (tempoFocado) => {
        
        const novaSessao = {
            tempoFocado,
            data: new Date().toLocaleDateString()
        }

        const sessoes = await storage.getSessoes();
        sessoes.push(novaSessao);

        try {
            await AsyncStorage.setItem('sessoes', JSON.stringify(sessoes));
        } catch (error) {
            console.error('Erro ao salvar sessão:', error);
        }
    },

    limparHistorico: async () => {
        try {
            await AsyncStorage.setItem('sessoes', JSON.stringify([]));
        } catch (error) {
            console.error('Erro ao limpar histórico:', error);
        }
    },

    limparEstatisticas: async () => {
        try {
            await AsyncStorage.setItem('sessoesCompletadas', '0');
            await AsyncStorage.setItem('tempoTotalFocado', '0');
        } catch (error) {
            console.error('Erro ao limpar estatísticas:', error);
        }
    }
};