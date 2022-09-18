import { StyleSheet, Text, View, TextInput, Button} from "react-native";
import TopBarComp from "../Components/TopBarComp";
import Footer from "../Components/Footer";
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect, } from 'react'
import { FondoColor } from "../Constants/colors";
import { SafeAreaView } from "react-native-safe-area-context";

const UserView = ({navigation}) => {
  const [text, settext] = useState('') 

  const storeData = async () => {
    try {
      await AsyncStorage.setItem('Prueba', text)
      console.log('Guardado')
    } catch (e) {
      console.log(e)
    }
  }
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('Prueba')
      settext(value)
      console.log(value)
      if(value !== null) {
        // value previously stored
      }
    } catch(e) {
      console.log(e)
    }
  }
  useEffect(() => {
    getData()
  }, [])
  
  const handleCallback = (childData) => {
    //console.log(childData);
  };
  return (
    <SafeAreaView style={{ backgroundColor: "#444444", flex: 1 }}>
      <TopBarComp parentCallback={handleCallback} />
      <View style={styles.container}>
        <Text style={styles.TextoTitulo}>Requerimientos</Text>
        <TextInput placeholder="prueba" value={text} onChangeText={value => settext(value)}></TextInput>
      </View>
      <Button title="safe" onPress={() => storeData()}></Button>
      <Footer navigation={navigation} />
    </SafeAreaView>
  );
};

export default UserView;

const styles = StyleSheet.create({
  container: {
    backgroundColor: FondoColor,
    height: "85%",
    padding: 10,
  },
  TextoTitulo:{
    color: 'white',
    fontSize: 22,
    paddingBottom: 5, 
  },
  txt: {
    color: "white",
  },
});
