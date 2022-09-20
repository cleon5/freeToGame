import { StyleSheet, Text, View, TextInput, Button, Image } from "react-native";
import TopBarComp from "../Components/TopBarComp";
import Footer from "../Components/Footer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import { FondoColor } from "../Constants/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { getData, storeData, } from "../Constants/Guardar";

const UserView = ({ navigation }) => {
  const [text, settext] = useState("");

  const Guardar = async (name, data) => {
    await storeData(name, data);
  }

  useEffect(() => {
    (async function(){
      let data = await getData("Prueba");
      settext(data)
    })();

  }, []);

  const handleCallback = (childData) => {
    //console.log(childData);
  };
  return (
    <SafeAreaView style={{ backgroundColor: "#444444", flex: 1 }}>
      <TopBarComp parentCallback={handleCallback} />
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/yimx0zpzin16srfsgo4b",
          }}
        />

        <Text style={styles.TextoTitulo}>Usuario</Text>
        <TextInput
          style={styles.InputText}
          placeholder="prueba"
          value={text}
          onChangeText={(value) => settext(value)}
        ></TextInput>
      </View>

      <Button title="safe" onPress={() => Guardar("Prueba", text)}></Button>

      <Footer navigation={navigation} />
    </SafeAreaView>
  );
};

export default UserView;

const styles = StyleSheet.create({
  container: {
    backgroundColor: FondoColor,
    height: "85%",
    padding: 20,
    flex: 1,
  },
  image: {
    width: "40%",
    height: 130,
    padding: 10,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 50,
  },
  TextoTitulo: {
    color: "white",
    fontSize: 25,
    paddingBottom: 5,
  },
  InputText: {
    color: "white",
    fontSize: 15,
    paddingBottom: 5,
  },
  txt: {
    color: "white",
  },
});
