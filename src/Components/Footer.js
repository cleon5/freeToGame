import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import { FondoColor } from '../Constants/colors'
import { FontAwesome, Entypo } from "@expo/vector-icons";

const Footer = () => {
  return (
    <View style={styles.container}>
      <Entypo name="home" size={50} color="white" style={styles.icon}/>
      <Entypo name="home" size={50} color="white" style={styles.icon}/>
      <Entypo name="home" size={50} color="white" style={styles.icon}/>
      <Entypo name="home" size={50} color="white" style={styles.icon}/>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        height: '8%',
        width: '100%',
        flexDirection: "row",
        backgroundColor: FondoColor,
        alignContent: "space-around",	
        justifyContent: "center",
        alignItems: "center",
        
    }, 
    icon:{
      paddingHorizontal: "5%",
    }

})

export default Footer