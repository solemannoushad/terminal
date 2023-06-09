import { Text, View } from 'react-native'
import { styles } from '../Styles/mainStyles'
import Layout from './Layout'
import { useEffect } from 'react'
import { addDoc } from '../Hooks/AddDoc'

export default function About() {

  useEffect(() => {
    addDoc("About");
  } , [])

  return (
    <Layout>
      <View style={styles.mainView}>
        <Text>About</Text>
      </View>
    </Layout>
  )
}
