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
import { router, useRouter } from 'expo-router';
import { icons, SIZES } from '../../../constants';

const jobTypes = [
  "Full-time",
  "Part time",
  "Kontrak"
]

const Welcome = () => {
  const [activeJobType, setActiveJobType] = ("Full-time")

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

      <View style={styles.tabsContainer}>  
        <FlatList 
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`)
              }}
              >
                <Text 
                  style={styles.tabText(activeJobType, item)}>
                  {item} 
                </Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
          />
      </View>

    </View>
  )
}

export default Welcome