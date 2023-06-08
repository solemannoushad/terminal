import { StyleSheet, View, Text } from "react-native";

export default function BottomMeny() {
  return (
    <View style={styles.main}>
        <View>
          <Text>Home</Text>
        </View>
        <View>
          <Text>Shop</Text>
        </View>
        <View>
          <Text>About</Text>
        </View>
        <View>
          <Text>Contact</Text>
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
    paddingHorizontal: 20,
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
