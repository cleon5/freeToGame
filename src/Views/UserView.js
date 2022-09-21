import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import TopBarComp from "../Components/TopBarComp";
import Footer from "../Components/Footer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect, useCallback } from "react";
import { FondoColor } from "../Constants/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { getData, storeData } from "../Constants/Guardar";

const UserView = ({ navigation }) => {
  const [text, settext] = useState("");

  const Guardar = async (name, data) => {
    await storeData(name, data);
  };

  useEffect(() => {
    (async function () {
      let data = await getData("Usuario");
      settext(data);
    })();
  }, []);

  const OpenURLButton = ({ url, children }) => {
    const handlePress = useCallback(async () => {
      const supported = await Linking.canOpenURL(url);

      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);

    return (
      <TouchableOpacity style={styles.Button} onPress={handlePress}>
        <Text style={styles.txt}>Visit site</Text>
      </TouchableOpacity>
    );
  };

  const handleCallback = (childData) => {
    //console.log(childData);
  };
  return (
    <SafeAreaView style={{ backgroundColor: "#444444", flex: 1 }}>
      <View style={styles.container2}>
        <Text style={styles.TitleGame}>Information</Text>
      </View>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/yimx0zpzin16srfsgo4b",
          }}
        />

        <Text style={styles.TextoTitulo}>User</Text>
        <TextInput
          style={styles.InputText}
          placeholder="User..."
          placeholderTextColor="#A7A7A7"
          value={text}
          onChangeText={(value) => settext(value)}
        ></TextInput>

        <View style={{ margin: 10, alignContent: "center" }}>
          <Text style={styles.txt}>App developed using the FreeToGame api</Text>
        </View>

        <OpenURLButton url={"https://www.freetogame.com/"} />
      </View>

      <Button title="Save" onPress={() => Guardar("Usuario", text)}></Button>

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
  container2: {
    height: 60,
    width: "100%",
    backgroundColor: FondoColor,
    alignItems: "center",
    alignSelf: "center",
    paddingHorizontal: 10,
  },
  Button: {
    borderRadius: 10,
    height: 40,
    backgroundColor: "#38006b",
    alignSelf: "center",
    color: "black",
    margin: 10,
  },
  image: {
    width: "40%",
    height: 130,
    padding: 10,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 40,
  },
  TextoTitulo: {
    color: "white",
    fontSize: 30,
    paddingBottom: 5,
  },
  InputText: {
    color: "white",
    fontSize: 25,
    paddingBottom: 5,
  },
  TitleGame: {
    color: "white",
    fontSize: 35,
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: FondoColor,
  },
  txt: {
    color: "white",
    fontSize: 25,
    margin: 5,
  },
});
