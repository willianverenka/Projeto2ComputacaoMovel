import { View, Text, Image } from 'react-native';
import { styles } from '../styles';

const Estatisticas = () => {
    return (
      <View style={styles.container}>
        <Image 
          source={require('../assets/stats.png')}
          style={styles.statsImage}
        />
        <View style={styles.statsCard}>
          <Text style={styles.statsTitle}>Suas Estatísticas</Text>
          <Text style={styles.statsText}>Sessões Completadas: 12</Text>
          <Text style={styles.statsText}>Tempo Total Focado: 300 min</Text>
          <Text style={styles.statsText}>Média por sesão: 60 min</Text>
        </View>
      </View>
    );
  };

  export default Estatisticas;