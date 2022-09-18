import { View, Text, Image, ScrollView, StyleSheet } from 'react-native'
import React from 'react'

const Screenshots = ({ datos = []}) => {
    
  return (
    <ScrollView style={{paddingVertical: 10,}}>
            <Image style={styles.image2} source={{ uri: datos[0].image }} />
            <Image style={styles.image2} source={{ uri: datos[1].image }} />
            <Image style={styles.image2} source={{ uri: datos[2].image }} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
        image2:{
      width: '90%', 
      height: 180, 
      padding: 10, 
      alignSelf: 'center',
    },
})
export default Screenshots