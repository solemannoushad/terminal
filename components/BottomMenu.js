import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function BottomMeny() {
  return (
    <View style={styles.main}>
        <View>
          <Icon name="home" size={35} color={"#ffffff"} />
        </View>
        <View>
          <Icon name="shopping-cart" size={35} color={"#ffffff"} />
        </View>
        <View>
          <Icon name="question-circle-o" size={35} color={"#ffffff"} />
        </View>
        <View>
          <Icon name="phone" size={35} color={"#ffffff"} />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'gray',
    flex: 0.1,
    flexDirection: 'row',
    position: 'fixed',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    shadowColor: "#000",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    
    elevation: 16,
  }
})
