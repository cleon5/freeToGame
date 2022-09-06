import { StyleSheet, FlatList, Text, View, Image } from 'react-native';
import React from 'react'
import { CardColor } from '../Constants/colors';

export default function InfoGame() {
  return (
    <View>
      <Text>InfoGame</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    txt:{
      color: 'white',
    },
    Texto:{
      color: 'white',
      alignSelf: 'center',
      textAlignVertical: 'center',
      fontSize: 15,
    },
    TextoView:{
      paddingVertical: 5,
    },
  })
