import { View, Text, StyleSheet,  } from 'react-native'
import React, {useState, useEffect} from 'react'
import {Picker} from '@react-native-picker/picker'; 
import { FontAwesome } from "@expo/vector-icons";
import { FondoColor } from '../Constants/colors';

const TopBarComp = ({parentCallback = ''}) => {
  const [Category, setCategory] = useState("pvp");
  parentCallback(Category);
  
  return (
    <View style={styles.container}>
      <Picker
        Category={Category}
        style={{ height: 50, width: 100 }}
        onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}
      >
        <Picker.Item label="mmorpg" value="mmorpg" />
        <Picker.Item label="shooter" value="shooter" />
        <Picker.Item label="mmofps " value="mmofps " />
        <Picker.Item label="pvp" value="pvp" />
      </Picker>

      <Text style={styles.txt}>TopBarComp</Text>
      <FontAwesome name="gamepad" size={24} style={styles.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        height: '5%',
        width: '100%',
        alignSelf: 'center',
        marginVerticalAlign: 'middle',
        backgroundColor: FondoColor,
        flexDirection: "row",
        
    },
    txt:{
      color: 'white',
      textAlignVertical: 'center',
      padding: 10,
    },
    icon:{
      color: 'white',
      textAlignVertical: 'center',
    }
})

export default TopBarComp