import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import { FondoColor } from '../Constants/colors'
import { FontAwesome, Entypo } from "@expo/vector-icons";

const Footer = () => {
  return (
    <View style={styles.container}>
      <Entypo name="home" size={40} color="white" style={styles.icon}/>
      <Entypo name="home" size={40} color="white" style={styles.icon}/>
      <Entypo name="home" size={40} color="white" style={styles.icon}/>
      <Entypo name="home" size={40} color="white" style={styles.icon}/>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        height: '5%',
        width: '100%',
        flexDirection: "row",
        backgroundColor: FondoColor,
        alignItems: "center",
        alignContent: "center",
        alignSelf: "center",
        
    }, 
    icon:{
      paddingHorizontal: 10,
    }

})

export default Footer