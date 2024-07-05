import { Text, View, StyleSheet } from 'react-native';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>
      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2022
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 24,
  },
  eventName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 48,
  },
  eventDate: {
    color: '#6B6B6B',
    fontSize: 16
  }
})

export default HomeScreen