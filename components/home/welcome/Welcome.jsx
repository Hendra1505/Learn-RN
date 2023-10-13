import React from 'react';
import { 
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';

import styles from './welcome.style';
import { useRouter } from 'expo-router';
import { icons, SIZES } from '../../../constants';

const Welcome = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hai Ekky!</Text>
        <Text style={styles.welcomeMessage}>Cari pekerjaan impianmu</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
            style={styles.searchInput}
            value=''
            onChange={() => {}}
            placeholder='Cari pekerjaan'/>
        </View>
        

        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image 
            source={icons.search}
            resizeMode='' 
            style={styles.searchBtnImage}/>
        </TouchableOpacity>

        
      </View>
    </View>
  )
}

export default Welcome