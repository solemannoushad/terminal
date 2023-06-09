import React from 'react'
import { View } from 'react-native'
import BottomMenu from '../components/BottomMenu'
import { styles } from '../Styles/mainStyles'
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from '@react-navigation/native';



export default function Layout({children}) {

  const navigation = useNavigation();
  const menuOpen = ()=>{
// navigation.openDrawer();
  }

  return (
    <View style={styles.container}>
      <View style={{flex: 0.9}}>
        {children}
      </View>
        <BottomMenu/>
    </View>
  )
}
