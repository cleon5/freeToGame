import { StyleSheet, FlatList, Text, View } from 'react-native';
import { useState, useEffect } from "react";
import axios from 'axios'
import JuegoComp from '../Components/JuegoComp';
import TopBarComp from '../Components/TopBarComp';
import Footer from '../Components/Footer';
import { FondoColor } from '../Constants/colors';

import { SafeAreaView } from 'react-native-safe-area-context';

function Home({navigation, y}) {
    const [Datos, setDatos] = useState([])
    const [Datos2, setDatos2] = useState([])
    let x = 0;
    console.log(x + y)
    const axiosGet = () => {
        try {
            axios.get('https://www.freetogame.com/api/games' )
            .then(response => {
                setDatos(Object.values(response.data));
            })
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        axiosGet()
    }, [])
    
    const handleCallback = (childData) =>{
      console.log(childData)
  }

  return (
    <SafeAreaView style={{backgroundColor: '#444444', flex: 1,}}>
      <TopBarComp parentCallback = {handleCallback}/>
      <View style={styles.container} >
        
        <FlatList
          styles={{height: 100, paddingBottom:100, paddingTop:100, }}
          data={Datos}
          renderItem={({ item,}) => 
            <JuegoComp item={item} navigation={navigation} />}
        />
      </View>
      <Footer/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: FondoColor,
      height: "90%",
  },
  txt:{
    color: 'white',
  }
})

export default Home