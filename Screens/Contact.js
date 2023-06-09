import { Text, View } from 'react-native'
import { styles } from '../Styles/mainStyles'
import Layout from './Layout'
import { addDoc } from '../Hooks/AddDoc'
import { useEffect } from 'react'


export default function Contact() {

  useEffect(() => {
    addDoc("Contact");
  } , [])
  
  return (
    <Layout>
      <View style={styles.mainView}>
        <Text style={{textAlign: global.align}}>Contact</Text>
      </View>
    </Layout>
  )
}
