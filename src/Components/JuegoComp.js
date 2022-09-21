import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import { CardColor } from "../Constants/colors";
import { AntDesign } from "@expo/vector-icons";
import { getData, getDataJson, storeDataJson } from "../Constants/Guardar";

const JuegoComp = ({ item = [], navigation }) => {
  const [Guardar, setGuardar] = useState(false);

  const GuardarData = async (name, data) => {
    let get = [];
    let x = [];

    (async function () {
       x = await getDataJson("FavGames")
      console.log(x);
      if(x == null ){
        await storeDataJson(name, data)
      }
      else {
        get.push(data);
        if(Array.isArray(x)  ){
          if(x.includes(data)){
            get = x
            get.splice(x.indexOf(data), 1);
            console.log(x.indexOf(data))
          }
          else x.map(a => get.push(a))
        }
        else x != get? get.push(x) : get = null
        console.log(get)
        await storeDataJson(name, get)
      }
      setGuardar(!Guardar);
    })();
  };

  const fav = async() => {
    let x = await getDataJson("FavGames")
    if(Array.isArray(x))
      x.includes(item.id)? setGuardar(true) : setGuardar(false);
    else
      x == item.id && x != null ? setGuardar(true) : setGuardar(false)
  }

  useEffect(() => {
    fav()
  }, []);

  return (
    <Pressable onPress={() => navigation.navigate("GameView", { id: item.id })}>
      <View style={styles.card}>
        <Image style={styles.image} source={{ uri: item.thumbnail }}></Image>
        {Guardar ? (
          <AntDesign
            style={styles.icon}
            name="heart"
            size={35}
            color="white"
            onPress={() => GuardarData("FavGames", item.id)}
          />
        ) : (
          <AntDesign
            style={styles.icon}
            name="hearto"
            size={35}
            color="white"
            onPress={() => GuardarData("FavGames", item.id)}
          />
        )}
        <View style={styles.TextoView}>
          <Text style={styles.Texto}>{item.title}</Text>
          <Text style={styles.Texto}>{item.genre}</Text>
          <Text style={styles.Texto}>{item.platform}</Text>
        </View>
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  Texto: {
    color: "white",
    alignSelf: "center",
    textAlignVertical: "center",
    fontSize: 15,
  },
  icon: {
    alignSelf: "flex-end",
    padding: 3,
    position: "absolute",
  },
  TextoView: {
    paddingVertical: 5,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 5,
    alignSelf: "center",
  },
  card: {
    backgroundColor: CardColor,
    alignContent: "center",
    margin: 5,
    borderRadius: 15,
  },
});

export default JuegoComp;
