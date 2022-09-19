import { View, Text, Image, StyleSheet, Pressable} from 'react-native'
import React, {useState, useEffect} from 'react'
import { CardColor } from '../Constants/colors';
import { AntDesign } from '@expo/vector-icons';
import { getDataJson, storeDataJson, } from "../Constants/Guardar";

const JuegoComp = ({item = [], navigation}) => {
  const [Guardar, setGuardar] = useState(false)
  const GuardarData = async (name, data) => {
    await storeDataJson(name, data);
    console.log(name, data);
    setGuardar(!Guardar)
    (async function(){
      let data = await getDataJson("Pruebajson");
      console.log(data);
      //Guardar(data)
    })()
  }
  
  useEffect(() => {
    /*(async function(){
      let data = await getDataJson("Pruebajson");
      console.log(data);
      //Guardar(data)
    })();*/

  }, []);

  return (
    <Pressable onPress={() => navigation.navigate("GameView", {id: item.id})}>
       <View style={styles.card} >
      
      <Image style={styles.image} source={{ uri: item.thumbnail }}></Image>
        {Guardar ? 
          <AntDesign style={styles.icon} name="heart" size={35} color="white" onPress={()=> GuardarData("Pruebajson", item.id)}/> :
          <AntDesign style={styles.icon} name="hearto" size={35} color="white" onPress={()=> GuardarData("Pruebajson", item.id)} />
        }      
        <View style={styles.TextoView}>
        <Text style={styles.Texto}>{item.title}</Text>
        <Text style={styles.Texto}>{item.genre}</Text>
        <Text style={styles.Texto}>{item.platform}</Text>
      </View>

    </View>
    </Pressable>
   
  );
}
const styles = StyleSheet.create({
  Texto:{
    color: 'white',
    alignSelf: 'center',
    textAlignVertical: 'center',
    fontSize: 15,
  },
  icon:{
    alignSelf:"flex-end", 
    padding:3, 
    position:'absolute'
  },
  TextoView:{
    paddingVertical: 5,
    
  },
  image:{
    width: '100%', 
    height: 200, 
    borderRadius: 5, 
    alignSelf: 'center'
  },
  card:{
    backgroundColor: CardColor,
    alignContent: 'center',
    margin: 5,
    borderRadius: 15,  
  },
})

export default JuegoComp