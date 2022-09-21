import { StyleSheet, FlatList, Text, View, Image, ScrollView, TouchableOpacity, Linking, Button} from 'react-native';
import { useState, useEffect, useCallback } from "react";
import axios from 'axios'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import Screenshots from '../Components/Screenshots';
import InfoGame from '../Components/InfoGame';
import RequerimientosComp from '../Components/RequerimientosComp';
import { FondoColor } from '../Constants/colors';
import { Entypo } from '@expo/vector-icons';

const GameView = ({navigation, route}) => {
    const [Game, setGame] = useState([])
    const [Sshots, setSshots] = useState([])
    const [Reque, setReque] = useState([])
    const [More, setMore] = useState(false)
    const [MoreSS, setMoreSS] = useState(false)
    const {id} = route.params;
    console.log("Reque")
    console.log(Game)
    const GetGame = async(id) => {
        try {
            let url ="https://www.freetogame.com/api/game?id="+id;
            console.log(url);
            await axios.get(url)
            .then(response => {
                let game = response.data
                setGame(game);
                setSshots(game.screenshots)
                setReque(game.minimum_system_requirements)
                console.log(Game)
            })
        } catch (error) {
            console.log(error);
        }
        
    }
    
    useEffect(() => {
        GetGame(id)
    }, [])
    
    const OpenURLButton = ({ url, children }) => {
      const handlePress = useCallback(async () => {
        const supported = await Linking.canOpenURL(url);
    
        if (supported) {
          await Linking.openURL(url);
        } else {
          Alert.alert(`Don't know how to open this URL: ${url}`);
        }
      }, [url]);
    
      return (
        <TouchableOpacity style={styles.Button} onPress={handlePress}>
          <Text style={styles.txt}>Download</Text>
        </TouchableOpacity>
      )
    };
    

  return (
    <SafeAreaView
      style={{ backgroundColor: "#444444", height: "100%", flex: 1 }}
    >
      <View style={styles.container2}>
        <Text style={styles.TitleGame}>{Game.title}</Text>
      </View>

      <ScrollView style={styles.container}>
        <Image style={styles.image} source={{ uri: Game.thumbnail }}></Image>
        <Text style={styles.TextoTitulo}>Description</Text>
        {More ? (
          <Text style={styles.Texto}>{Game.description}</Text>
        ) : (
          <Text style={styles.Texto}>{Game.short_description}</Text>
        )}
        <TouchableOpacity style={styles.Button} onPress={() => setMore(!More)}>
          {More ? (
            <Entypo name="chevron-small-up" size={24} color="white" />
          ) : (
            <Entypo name="chevron-down" size={24} color="white" />
          )}
        </TouchableOpacity>

        <Text style={styles.TextoTitulo}>Game information</Text>

        <InfoGame
          platform={Game.platform}
          publisher={Game.publisher}
          developer={Game.developer}
          genre={Game.genre}
        />

        <Text style={styles.TextoTitulo}>Screenshots</Text>
        {MoreSS ? (
          Sshots[1] == undefined ? null : (
            <Screenshots datos={Sshots}></Screenshots>
          )
        ) : null}
        <TouchableOpacity
          style={styles.Button}
          onPress={() => setMoreSS(!MoreSS)}
        >
          {MoreSS ? (
            <Entypo name="chevron-small-up" size={24} color="white" />
          ) : (
            <Entypo name="chevron-down" size={24} color="white" />
          )}
        </TouchableOpacity>

       
        {Game.platform == "Web Browser" ? null : (
          <View>
            <Text style={styles.TextoTitulo}>Minimum Requirements</Text>
            <RequerimientosComp requerimientos={Reque} />
          </View>
         
        )}

        <OpenURLButton url={Game.freetogame_profile_url}/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: FondoColor, 
        //height: '%',
        paddingHorizontal: 5,
    },
    container2: {
      height: 60,
      width: '100%',
      backgroundColor: FondoColor,
      alignItems: "center",
      alignSelf: 'center',
      paddingHorizontal: 10,
  },
    TextoTitulo:{
      color: 'white',
      fontSize: 22,
      paddingBottom: 5, 
    },
    txt:{
      color: 'white',
      textAlignVertical: 'center',
      padding: 10,
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
    TitleGame:{
      color: 'white',
      fontSize: 35,
      paddingBottom: 10,
      paddingTop: 10, 
      backgroundColor: FondoColor,
    },
    Button: {
      borderRadius : 10,
      backgroundColor: '#38006b',
      alignSelf: 'center',
      color : 'black',
      margin : 10,
    }
  })

export default GameView