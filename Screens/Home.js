import { Text, View, FlatList, Platform } from 'react-native'
import { styles } from '../Styles/mainStyles'
import GetDbData from '../Hooks/GetDbData';
import { useEffect, useState } from 'react';
import Splash from './Splash'
import Layout from './Layout';
import { doc, updateDoc } from "firebase/firestore";
import { db } from '../config';





export default function Home() {
  useEffect(() => {
    const addDoc = async()=>{

      const docRef = doc(db, "OS", "0");
      await updateDoc(docRef, {
        name: Platform.OS
      });
    }

    addDoc();

  } , []);

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
      <Layout>
        <View style={styles.mainView}>
          <FlatList
            data={products}
            keyExtractor={(item) => item.id}
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text>{item.name}</Text>
              </View>
            )}
          />
        </View>
      </Layout>
    </>
  )
}
