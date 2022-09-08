import { StyleSheet, FlatList, Text, View, Image } from 'react-native';
import React from 'react'
import { CardColor } from '../Constants/colors';

export default function InfoGame({platform, publisher, developer, genre }) {
  return (
    <View style={{flex: 1, flexDirection: 'column', }}>
      
      <View style={styles.container}>
        <Text style={styles.txt}>{platform}</Text>
        <Text style={styles.txt}>{publisher}</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.txt}>{developer}</Text>
        <Text style={styles.txt}>{genre}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    txt:{
      color: 'white',
      borderRadius: 15,
      padding: 12,
      backgroundColor: CardColor,
      margin: 0,
      marginHorizontal: 5,
      fontSize: 15,
      textAlign: 'center',
      flex: 1,
      alignSelf: 'center',
    },
    container:{
      flex: 1,
      flexDirection: "row",
      paddingBottom: 1,
      //height: 50,
    },

  })
