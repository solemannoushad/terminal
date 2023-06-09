import { Text, View } from 'react-native'
import { styles } from '../Styles/mainStyles'
import Layout from './Layout'
import { addDoc } from '../Hooks/AddDoc'
import { useEffect } from 'react'


export default function Shop() {

  useEffect(() => {
    addDoc("Shop");
  } , [])

  return (
    <Layout>
      <View style={styles.mainView}>
        <Text>Shop</Text>
      </View>
    </Layout>
  )
}
