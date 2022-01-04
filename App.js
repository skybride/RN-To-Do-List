import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import InputComponent from './components/InputComponent';

export default function App() {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>To Do App</Text>
        <InputComponent />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    marginVertical: 50
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center"
  }
});
