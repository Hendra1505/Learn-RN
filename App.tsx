import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';
import Texts from './src/components/Texts';
import Photos from './src/components/Photos';

const App = () => {

  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: '#0abde3'}} />
      <Text>Hendra</Text>
      <Texts />
      <Photos />
    </View>
  );

};

export default App;