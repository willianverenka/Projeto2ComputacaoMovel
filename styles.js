import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F5F5F5',
      gap: 20
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
    },
    navButton: {
      backgroundColor: '#0F52BA',
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
      backgroundColor: '#0F52BA',
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