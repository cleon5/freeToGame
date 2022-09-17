import { View, Text, StyleSheet, Button, Pressable, TouchableOpacity  } from 'react-native'
import React, {useState, useEffect} from 'react'
import { FontAwesome } from "@expo/vector-icons";
import { FondoColor } from '../Constants/colors';

const TopBarComp = ({parentCallback}) => {
  
  return (
    <View style={styles.container}>
      <Button title="Search" style={styles.Button} onPress={() => parentCallback(true)}/>

      <TouchableOpacity style={styles.Button} onPress={() => parentCallback(true)}>
          <Text style={styles.txt}>Search</Text>
        </TouchableOpacity>

      <Text style={styles.txt}>TopBarComp</Text>
      <FontAwesome name="gamepad" size={24} style={styles.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        height: '7%',
        width: '100%',
        alignSelf: 'center',
        marginVerticalAlign: 'middle',
        backgroundColor: FondoColor,
        flexDirection: "row",
        
    },
    txt:{
      color: 'white',
      textAlignVertical: 'center',
      padding: 10,
    },
    icon:{
      color: 'white',
      textAlignVertical: 'center',
    },
    Button: {
      padding : 1,
      margin : 10,
      height : 40,
      
      backgroundColor: 'blue',
      textAlignVertical: 'center',
      alignSelf: 'center',
      color : 'black',
    }
})

export default TopBarComp