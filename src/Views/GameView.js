import { StyleSheet, FlatList, Text, View, Image, ScrollView } from 'react-native';
import { useState, useEffect } from "react";
import axios from 'axios'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import TopBarComp from '../Components/TopBarComp';
import Footer from '../Components/Footer';
import InfoGame from '../Components/InfoGame';
import Screenshots from '../Components/Screenshots';
import { FondoColor } from '../Constants/colors';

const GameView = ({navigation, route}) => {
    const [Game, setGame] = useState([])
    const [Sshots, setSshots] = useState([])
    const {id} = route.params;
    //console.log((Sshots[1].image))

    const GetGame = async(id) => {
        try {
            let url ="https://www.freetogame.com/api/game?id="+id;
            console.log(url);
            await axios.get(url)
            .then(response => {
                let game = response.data
                setGame(game);
                setSshots(game.screenshots)
            })
        } catch (error) {
            console.log(error);
        }
        
    }
    useEffect(() => {
        GetGame(id)
    }, [])
    const handleCallback = (childData) =>{
      console.log(childData)
  }

  return (
    <SafeAreaView style={{ backgroundColor: "#444444", height: "100%" }}>
      <ScrollView style={styles.container}>
        <TopBarComp parentCallback = {handleCallback}/>
        <Image style={styles.image} source={{ uri: Game.thumbnail }}></Image>
        <Text style={styles.TextoTitulo}>Descripcion</Text>
        <Text style={styles.Texto}>{Game.short_description}</Text>
        <Text style={styles.TextoTitulo}>Informacion del juego</Text>

        <InfoGame
          platform={Game.platform}
          publisher={Game.publisher}
          developer={Game.developer}
          genre={Game.genre}
        />

    <Text style={styles.TextoTitulo}>Screenshots</Text>
        {Sshots[1] == undefined ? null : (
          <ScrollView style={{paddingVertical: 10,}}>
            <Image style={styles.image2} source={{ uri: Sshots[0].image }} />
            <Image style={styles.image2} source={{ uri: Sshots[1].image }} />
            <Image style={styles.image2} source={{ uri: Sshots[2].image }} />
          </ScrollView>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: FondoColor, 
        flex: 1,
        paddingHorizontal: 5,
        //height: "100%",
    },
    TextoTitulo:{
      color: 'white',
      fontSize: 22,
      paddingBottom: 5, 
    },
    txt:{
      color: 'white',
    },
    Texto:{
      color: 'white',
      alignSelf: 'center',
      textAlignVertical: 'center',
      fontSize: 15,
      paddingBottom: 5,
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
    },
    image2:{
      width: '90%', 
      height: 180, 
      padding: 10, 
      alignSelf: 'center',
    }
  })

export default GameView