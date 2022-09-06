import { StyleSheet, FlatList, Text, View } from 'react-native';
import { useState, useEffect } from "react";
import axios from 'axios'
import JuegoComp from '../Components/JuegoComp';
import TopBarComp from '../Components/TopBarComp';
import Footer from '../Components/Footer';
import { FondoColor } from '../Constants/colors';

import { SafeAreaView } from 'react-native-safe-area-context';

function Home({navigation}) {
    const [Datos, setDatos] = useState([])
    
    const axiosGet = () => {
        try {
            axios.get('https://www.freetogame.com/api/games' )
            .then(response => {
                setDatos(Object.values(response.data));
                console.log(Datos[2].id);
            })
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        axiosGet()
    }, [])
    
    

  return (
    <SafeAreaView style={{backgroundColor: '#444444', flex: 1,}}>
      <View style={styles.container} >
        <TopBarComp />
        <FlatList
          
          data={Datos}
          renderItem={({ item,}) => <JuegoComp item={item} navigation={navigation} />}
        />
      </View>
      <Footer></Footer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: FondoColor,
      
  },
  txt:{
    color: 'white',
  }
})

export default Home