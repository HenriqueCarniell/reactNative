import { Text, View, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";
import Participant from "../../components/participant/participant";

function Home() {
  const handleParticipantAdd = () => {
    console.log("Você clicou no botão de adicionar! ");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          keyboardType="numeric"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          +
        </TouchableOpacity>
      </View>

      <Participant />
    </View>
  );
}

export default Home;
