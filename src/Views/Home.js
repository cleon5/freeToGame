import { StyleSheet, FlatList, Text, View } from 'react-native';
import { useState, useEffect } from "react";
import axios from 'axios'
import JuegoComp from '../Components/JuegoComp';
import TopBarComp from '../Components/TopBarComp';
import Footer from '../Components/Footer';
import { FondoColor } from '../Constants/colors';
import { SafeAreaView } from 'react-native-safe-area-context';

function Home({navigation, route}) {
    const [Datos, setDatos] = useState([])
    const [Datos2, setDatos2] = useState([])
    const {Category, Platform, Order} = route.params || '';
    console.log(Category+ Platform+ Order)
    

    const axiosGet = () => {
        try {
            if(Category == undefined){
              axios.get('https://www.freetogame.com/api/games' )
            .then(response => {
                setDatos(Object.values(response.data));
            }) 
            }
            else{
              let url = `https://www.freetogame.com/api/filter?tag=${Category}&platform=${Platform}&sort-by=${Order}`;
              console.log(url);
              axios.get(url)
            .then(response => {
                setDatos(Object.values(response.data));
            })
            }
            
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        axiosGet()
    }, [])
    
    const handleCallback = (childData) =>{
      //console.log(childData)
  }

  return (
    <SafeAreaView style={{backgroundColor: '#444444', flex: 1,}}>
      <TopBarComp parentCallback = {handleCallback}/>
      <View style={styles.container} >
        
        <FlatList
          
          data={Datos}
          renderItem={({ item,}) => 
            <JuegoComp item={item} navigation={navigation} />}
        />
      </View>
      <Footer navigation={navigation}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: FondoColor,
      height: "85%",
  },
  txt:{
    color: 'white',
  }
})

export default Home