import { StyleSheet, FlatList, Text, View, Button } from "react-native";
import { useState, useEffect } from "react";
import TopBarComp from "../Components/TopBarComp";
import Footer from "../Components/Footer";
import { FondoColor } from "../Constants/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { Picker } from "@react-native-picker/picker";

const FilterView = ({ navigation }) => {
  const [Category, setCategory] = useState(Category);
  const [Platform, setPlatform] = useState(Platform);
  const [Order, setOrder] = useState(Order);

  const handleCallback = (childData) => {
    console.log(childData);
  };
  return (
    <SafeAreaView style={{ backgroundColor: "#444444", flex: 1 }}>
      <TopBarComp parentCallback={handleCallback} />
      <View style={styles.container}>
        <Text style={styles.txt}>Category</Text>
        <Picker
        styles={styles.picker}
          selectedValue={Category}
          onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}
        >
          <Picker.Item color="gray" label="mmorpg" value="mmorpg" />
          <Picker.Item color="gray" label="shooter" value="shooter" />
          <Picker.Item color="gray" label="mmofps" value="mmofps" />
          <Picker.Item color="gray" label="pvp" value="pvp" />
        </Picker>

        <Text style={styles.txt}>Platform</Text>
        <Picker
          selectedValue={Platform}
          onValueChange={(itemValue, itemIndex) => setPlatform(itemValue)}
        >
            <Picker.Item color="gray" label="All" value="all" />
          <Picker.Item color="gray" label="Browser" value="browser"  />
          <Picker.Item color="gray" label="Pc" value="Pc" />
          
        </Picker>

        <Text style={styles.txt}>Order</Text>
        <Picker
        selectedValue={Order}
          onValueChange={(itemValue, itemIndex) => setOrder(itemValue)}
        >
          <Picker.Item color="gray" label="Alphabetical" value="alphabetical" />
          <Picker.Item color="gray" label="Release-date" value="release-date" />
          <Picker.Item color="gray" label="Popularity" value="popularity" />
          
        </Picker>

        <Button title="Search" onPress={() => navigation.navigate("Home", {Category: Category, Platform: Platform, Order: Order})}/>
      </View>
      <Footer navigation={navigation} />
    </SafeAreaView>
  );
};

export default FilterView;

const styles = StyleSheet.create({
  container: {
    backgroundColor: FondoColor,
    height: "85%",
    padding: 10,
  },
  txt: {
    color: "white",
    fontSize: 25,
  },
  picker:{
    color: "black",
    padding: 10,
    margin:20,
  }
});
