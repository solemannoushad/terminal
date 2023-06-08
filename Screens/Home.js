import { Text, View, FlatList } from 'react-native'
import { styles } from '../Styles/mainStyles'
import GetDbData from '../Hooks/GetDbData';
import { useEffect, useState } from 'react';
import Splash from './Splash'
import BottomMenu from '../components/BottomMenu';

export default function Home() {

  const [products, setProducts] = useState([]);
  const [splash, setSplash] = useState(true)

  const [ data , loading ] = GetDbData('data');

  useEffect(() => {
    setProducts(data);
    setSplash(loading);
  } , [data, loading])

  return (
    <>    
      { splash &&  <Splash/>}
      <View style={styles.container}>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Text>{item.name}</Text>
            </View>
          )}
        />
        <BottomMenu/>
      </View>
    </>
  )
}
