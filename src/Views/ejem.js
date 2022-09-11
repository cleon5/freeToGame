import { StyleSheet, FlatList, Text, View, Image, ScrollView } from 'react-native';
import axios from 'axios'
import { SafeAreaView } from 'react-native-safe-area-context';
import TopBarComp from '../Components/TopBarComp';
import Footer from '../Components/Footer';
import InfoGame from '../Components/InfoGame';
import Screenshots from '../Components/Screenshots';
import { FondoColor } from '../Constants/colors';
import React, { Component, useState, useEffect} from 'react'

export default class ejem extends Component {
    constructor({navigation, route}) {
        const [Game, setGame] = useState([])
        const [Sshots, setSshots] = useState([])
        const {id} = route.params;
        console.log(id);
        super(props);
        this.state = {
            isLoading: true,
            dataSource: [],
        }
    }

    
  render() {
    return (
      <View>
        <Text>ejem</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: FondoColor, 
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
    }
  })