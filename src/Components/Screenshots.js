import { View, Text, Image, ScrollView, StyleSheet } from 'react-native'
import React, { useState, useEffect }  from 'react'
import axios from 'axios'

const Screenshots = ({id, datos = []}) => {
    console.log(datos)
    /*
    const [Screem, setScreem] = useState([])
    const GetGame = () => {
        try {
            let url ="https://www.freetogame.com/api/game?id="+id;
            console.log(url);
            axios.get(url)
            .then(response => {
                setScreem(response.data);
                console.log(response.data);
                console.log(Screen)
            })
        } catch (error) {
            console.log(error);
        }
        
    }
    useEffect(() => {
       //GetGame()
    }, [])*/
   // let images = datos.screenshots
  return (
    <ScrollView>
        <Text>{datos.id}</Text>
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