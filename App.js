import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your course goal' />
        <Button title='Add Goal' />
      </View>
      <Text>
        List of goals
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  // },

  // myText: {
    // margin: 16,
    // padding: 16,
    // borderWidth: 2,
    // borderColor: 'blue',
  // },

  appContainer: {
    padding: 50,
  },

  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    marginRight: 8,
    // padding: 8s
  },
});
