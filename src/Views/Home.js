import { StyleSheet, FlatList, Text, View, Button } from 'react-native';
import { useState, useEffect } from "react";
import axios from 'axios'
import JuegoComp from '../Components/JuegoComp';
import TopBarComp from '../Components/TopBarComp';
import Footer from '../Components/Footer';
import { FondoColor } from '../Constants/colors';
import CompPicker from '../Components/CompPicker';
import { SafeAreaView } from 'react-native-safe-area-context';

function Home({navigation, route}) {
    const [Datos, setDatos] = useState([])
    const [PickerEnable, setPickerEnable] = useState()

    const axiosGet = (data) => {
      let tag, platform, sort = '';
       
      console.log(data)
        try {
            if(data == undefined){
              axios.get('https://www.freetogame.com/api/games' )
            .then(response => {
                setDatos(Object.values(response.data));
            }) 
            }  
            else{
              console.log('No')
               setDatos([]);
              data[0] == undefined ? tag = ''  : tag = `&tag=${data[0]}`
              data[1] == undefined ? platform = '' : platform = `&platform=${data[1]}`
              data[2] == undefined ? sort = `sort-by=popularity`: sort = `sort-by=${data[2]}`
              console.log(tag + 'as')
              
              let url = `https://www.freetogame.com/api/games?${sort}${tag}${platform}`;
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
        setDatos([])
        axiosGet()

    }, [])

    const handleCallback = (childData) =>{
      console.log(childData)
      setPickerEnable(!PickerEnable)

  }
  const datosBusqueda = (childData) =>{
    console.log(childData + 'chil')
    axiosGet(childData)
}


  return (
    <SafeAreaView style={{backgroundColor: '#444444', flex: 1,}}>
      <TopBarComp parentCallback = {handleCallback}/>
      {PickerEnable ? 
      <CompPicker DatosBusqueda ={datosBusqueda}  parentCallback = {handleCallback}/> : null}
      
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