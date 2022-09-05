import { StyleSheet, FlatList, Text, View, Image } from 'react-native';
import { useState, useEffect } from "react";
import axios from 'axios'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import TopBarComp from '../Components/TopBarComp';
import Footer from '../Components/Footer';

const GameView = ({navigation, route}) => {
    const [Game, setGame] = useState([])
    const {id}= route.params;
    const GetGame = (id) => {
        try {
            let url ="https://www.freetogame.com/api/game?id="+id;
            console.log(url);
            axios.get(url)
            .then(response => {
                setGame(response.data);
                console.log(response.data);
                console.log(Game)
            })
        } catch (error) {
            console.log(error);
        }
        
    }
    useEffect(() => {
        GetGame(id)
    }, [])


  return (
    <SafeAreaView style={{ backgroundColor: "#444444", flex: 1 }}>
       <TopBarComp/>
      <View style={styles.container}> 

        <Image style={styles.image} source={{ uri: Game.thumbnail }}></Image>
        <Text>Informacion del juego</Text>

        <Text>{Game.title}</Text>
        <Text>{Game.title}</Text>
        <Text>{Game.title}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1F0E2F', 
        height: '90%',
    },
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
    image:{
      width: '100%', 
      height: 210, 
      padding: 0, 
      alignSelf: 'center'
    }
  })

export default GameView