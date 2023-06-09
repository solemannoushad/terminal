import { Text, View, FlatList, Platform } from 'react-native'
import { styles } from '../Styles/mainStyles'
import GetDbData from '../Hooks/GetDbData';
import { useEffect, useState } from 'react';
import Splash from './Splash'
import Layout from './Layout';
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from '../config';
import { addDoc } from '../Hooks/AddDoc';



export default function Home() {

  const [lang, setLang] = useState("english");


  useEffect(() => {
    
    const getLang = async()=>{
      const docRef = doc(db, "language", "0");
      const docSnap = await getDoc(docRef);

      docSnap.data().language === "English" ? setLang('left') : setLang("right")
      docSnap.data().language === "English" ? global.align = 'left' : global.align = 'right'
    }


  } , [lang])

  useEffect(() => {
    const addDoc1 = async()=>{

      const docRef = doc(db, "OS", "0");
      await updateDoc(docRef, {
        name: Platform.OS
      });
    }

    addDoc1();

  } , []);

  useEffect(() => {
    addDoc("Home");
  } , [])

  const [products, setProducts] = useState([]);
  const [splash, setSplash] = useState(true)

  const [data, loading] = GetDbData("data")

  useEffect(() => {
    setProducts(data);
    setSplash(loading);
  } , [data, loading])

  return (
    <>    
      { splash &&  <Splash/>}
          <Text style={{flex: .1, fontSize: 20, fontWeight: 600, textAlign: lang, marginTop: 30}}>{lang}</Text>
      <Layout>
        <View style={styles.mainView}>
          <FlatList
            data={products}
            keyExtractor={(item) => item.id}
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={{}}>
                <Text style={{textAlign: lang}}>{item.name}</Text>
              </View>
            )}
          />
        </View>
      </Layout>
    </>
  )
}
