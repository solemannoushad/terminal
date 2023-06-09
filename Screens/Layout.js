import React from 'react'
import { View } from 'react-native'
import BottomMenu from '../components/BottomMenu'
import { styles } from '../Styles/mainStyles'
import Icon from "react-native-vector-icons/FontAwesome";
import 'react-native-gesture-handler';


export default function Layout({children}) {
  return (
    <View style={styles.container}>
      <View style={{flex: 0.1, marginTop: 30, width: '100%', justifyContent: 'center', alignItems: 'flex-end', marginRight: 20}}>
        <Icon name="bars" color={"#1f242d"} size={35}/>
      </View>
      <View style={{flex: 0.9}}>
        {children}
      </View>
        <BottomMenu/>
    </View>
  )
}
