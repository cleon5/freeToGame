import { View, Text, StyleSheet, Button,  } from 'react-native'
import React, {useState, useEffect} from 'react'
import { FontAwesome } from "@expo/vector-icons";
import { FondoColor } from '../Constants/colors';

const TopBarComp = ({parentCallback}) => {
  const [Mostrar, setMostrar] = useState(true);
  
  return (
    <View style={styles.container}>
      <Button title="Search" onPress={() => parentCallback(true)}/>

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
    }
})

export default TopBarComp