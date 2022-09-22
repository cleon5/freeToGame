import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";
import { FondoColor } from "../Constants/colors";
import { getData, getDataJson, storeDataJson } from "../Constants/Guardar";
import JuegoComp from "../Components/JuegoComp";
import Footer from "../Components/Footer";

const FavoritesView = ({ navigation }) => {
  const [GamesFav, setGamesFav] = useState([]);
  let control = [];
  const AxiosFav = async (url) => {
    await axios
      .get(url)
      .then((response) => {
        control.push(response.data);
        setGamesFav(control);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(GamesFav);
  const GetGame = async () => {
    let x = await getDataJson("FavGames");
    if (Array.isArray(x))
      x.map((item) =>
        AxiosFav("https://www.freetogame.com/api/game?id=" + item)
      );
    else x != null ? AxiosFav("https://www.freetogame.com/api/game?id=" + x) : null;
  };

  useEffect(() => {
    GetGame();
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: "#444444", height: "100%", flex: 1 }}>
      <View style={styles.container2}>
        <Text style={styles.TextoTitulo}>Favorites list</Text>
      </View>
      <View style={styles.container}>
        <FlatList
          data={GamesFav}
          renderItem={({ item }) => (
            <JuegoComp item={item} navigation={navigation} />
          )}
        />
      </View>
      <Footer navigation={navigation}/> 
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: FondoColor,
    height: "85%",
  },
  container2: {
    height: 60,
    width: '100%',
    backgroundColor: FondoColor,
    alignItems: "center",
    alignSelf: 'center',
    paddingHorizontal: 10,
},
  TextoTitulo:{
    color: 'white',
    fontSize: 35,
    paddingBottom: 10,
    paddingTop: 10, 
    backgroundColor: FondoColor,
  },
  txt: {
    color: "white",
  },
});

export default FavoritesView;
