import React, {useState} from 'react'
import { 
  View, 
  Text,  
  TouchableOpacity, 
  FlatList, 
  ActivityIndicator  
} from 'react-native'
import { router, useRouter } from 'expo-router';

import { COLORS, SIZES } from '../../../constants'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import fetchApi from '../../../api/fetchApi';

// styles
import styles from './popularjobs.style'


const Popularjobs = () => {
  const router = useRouter();
  const {data, isLoading, error} = fetchApi(
    'search', {
      query: 'Python',
      num_pages : 1
    })
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <Text style={styles.headerTitle}>
            Popular jobs
          </Text>

          <TouchableOpacity>
            <Text style={styles.headerBtn}>Show all</Text>
          </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size='large' colors={COLORS.primary} />
        ) : error ? (
          <Text>
            Mohon maaf ada kendala
          </Text>
        ) : (
          <FlatList 
            data={[1, 2, 3, 4, 5]}
            renderItem={(item) => (
              <PopularJobCard 
                item={item}
              />
            )}
            keyExtractor={item => item?.job_id}
            contentContainerStyle={{  columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  )
}

export default Popularjobs