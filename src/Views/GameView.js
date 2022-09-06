import { StyleSheet, FlatList, Text, View, Image } from 'react-native';
import { useState, useEffect } from "react";
import axios from 'axios'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import TopBarComp from '../Components/TopBarComp';
import Footer from '../Components/Footer';
import InfoGame from '../Components/InfoGame';
import { FondoColor } from '../Constants/colors';

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
      <View style={styles.container}> 
        <TopBarComp/>
        <Image style={styles.image} source={{ uri: Game.thumbnail }}></Image>
        <Text style={styles.Texto}>Informacion del juego</Text>
        <InfoGame/>
        <Text style={styles.Texto}>{Game.title}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: FondoColor, 
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
      alignSelf: 'center',
      marginVertical: 10,
    }
  })

export default GameView