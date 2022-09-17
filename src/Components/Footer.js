import { View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { FondoColor } from "../Constants/colors";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import axios from 'axios'

const Footer = ({ navigation }) => {
  const [Random, setRandom] = useState(0);
  let random = () => {
    let x = Math.floor(Math.random() * 600);
    console.log(x);
    setRandom(x);
    navigation.navigate("GameView", { id: Random });
  };
  const GetGame = async () => {
    let x = Math.floor(Math.random() * 600);
    console.log(x);
    let url = "https://www.freetogame.com/api/game?id=" + x;
    console.log(url);
      await axios.get(url).then((response) => {
        navigation.navigate("GameView", { id: x });
      }).catch (error => {
        console.log(error);
        GetGame();
      })
    }
    

  return (
    <View style={styles.container}>
      <Entypo
        onPress={() => navigation.navigate("Home")}
        name="home"
        size={50}
        color="white"
        style={styles.icon}
      />
      <FontAwesome
        onPress={() => {
          GetGame();
        }}
        name="filter"
        size={50}
        color="white"
        style={styles.icon}
      />
      <FontAwesome
        onPress={() => {
          GetGame();
        }}
        name="random"
        size={50}
        color="white"
        style={styles.icon}
      />
      <FontAwesome
        onPress={() => navigation.navigate("UserView")}
        name="user"
        size={50}
        color="white"
        style={styles.icon}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: "8%",
    width: "100%",
    flexDirection: "row",
    backgroundColor: FondoColor,
    alignContent: "space-around",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    paddingHorizontal: "5%",
  },
});

export default Footer;
