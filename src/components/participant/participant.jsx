import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

function Participant() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Gustavo henrique</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Participant;
