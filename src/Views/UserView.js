import { StyleSheet, FlatList, Text, View } from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";
import JuegoComp from "../Components/JuegoComp";
import TopBarComp from "../Components/TopBarComp";
import Footer from "../Components/Footer";
import { FondoColor } from "../Constants/colors";
import { SafeAreaView } from "react-native-safe-area-context";

const UserView = ({navigation}) => {
  const handleCallback = (childData) => {
    //console.log(childData);
  };
  return (
    <SafeAreaView style={{ backgroundColor: "#444444", flex: 1 }}>
      <TopBarComp parentCallback={handleCallback} />
      <View style={styles.container}>
        <Text>UserView</Text>
      </View>
      <Footer navigation={navigation} />
    </SafeAreaView>
  );
};

export default UserView;

const styles = StyleSheet.create({
  container: {
    backgroundColor: FondoColor,
    height: "85%",
  },
  txt: {
    color: "white",
  },
});
