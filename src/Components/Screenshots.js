import { View, Text, Image, ScrollView, StyleSheet } from 'react-native'
import React, { useState, useEffect }  from 'react'
import axios from 'axios'

const Screenshots = ({ datos = []}) => {
    console.log(datos)
    
  return (
    <ScrollView horizontal={true} >
        <Image style={styles.image} source={{ uri: datos[0].image}}/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    image:{
        width: '100%', 
        height: 200, 
        borderRadius: 5, 
        alignSelf: 'center'
      },
})
export default Screenshots