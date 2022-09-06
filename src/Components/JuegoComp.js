import { View, Text, Image, StyleSheet, Pressable} from 'react-native'
import React from 'react'
import { CardColor } from '../Constants/colors';

const JuegoComp = ({item = [], navigation}) => {
  return (
    <Pressable onPress={() => navigation.navigate("GameView", {id: item.id})}>
       <View style={styles.card} >
      <Image style={styles.image} source={{ uri: item.thumbnail }}></Image>
      <View style={styles.TextoView}>
        <Text style={styles.Texto}>{item.title}</Text>
        <Text style={styles.Texto}>{item.genre}</Text>
        <Text style={styles.Texto}>{item.platform}</Text>
      </View>

    </View>
    </Pressable>
   
  );
}
const styles = StyleSheet.create({
  Texto:{
    color: 'white',
    alignSelf: 'center',
    textAlignVertical: 'center',
    fontSize: 15,
  },
  TextoView:{
    paddingVertical: 5,
  },
  image:{
    width: '100%', 
    height: 200, 
    borderRadius: 5, 
    alignSelf: 'center'
  },
  card:{
    backgroundColor: CardColor,
    alignContent: 'center',
    margin: 5,
    borderRadius: 15,  
  },
})

export default JuegoComp