import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.myText}>
          Another piece of Text guys
        </Text>
      </View>
      <Text style={styles.myText}>
        This was a Text
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  myText: {
    margin: 16,
    padding: 16,
    borderWidth: 2,
    borderColor: 'blue',
  },
});
