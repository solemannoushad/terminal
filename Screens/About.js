import { Text, View } from 'react-native'
import { styles } from '../Styles/mainStyles'
import Layout from './Layout'

export default function About() {
  return (
    <Layout>
      <View style={styles.mainView}>
        <Text>About</Text>
      </View>
    </Layout>
  )
}
