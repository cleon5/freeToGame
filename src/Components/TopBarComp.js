import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesome } from "@expo/vector-icons";

const TopBarComp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>
        TopBarComp
      </Text>
      <FontAwesome name="gamepad" size={24} color="white"  />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        height: '5%',
        alignContent: 'center',
        alignSelf: 'center',
        marginVerticalAlign: 'middle',

    },
    txt:{
      color: 'white',
    }
})

export default TopBarComp