import { Audio } from 'expo-av';
import { Vibration } from 'react-native';


const controle = {
    tocarAudio: async () => {
        try {
            const { sound } = await Audio.Sound.createAsync(  // Adicionei await aqui
                require('./assets/timer.wav')
            );

            await sound.playAsync();
        } catch (error) {
            console.error('Erro ao tocar áudio:', error);
        }
    },

    vibrar: async () => {

        const padrao = [
            0,     // índice 0 (par) = PAUSA inicial
            2000,  // índice 1 (ímpar) = VIBRA por 2s
            1000,  // índice 2 (par) = PAUSA por 1s
            2000   // índice 3 (ímpar) = VIBRA por 2s
        ];

        try {
            Vibration.vibrate(padrao, false);
        }
        catch (error) {
            console.error('Erro ao vibrar:', error);
        };
    }
};

export default controle;