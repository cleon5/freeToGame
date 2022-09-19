import AsyncStorage from "@react-native-async-storage/async-storage";
//import React, { useState, useEffect } from "react";

export const storeData = async (name, data) => {
  try {
    await AsyncStorage.setItem(name, data);
  } catch (e) {
    console.log(e);
  }
};

export const getData = async (name) => {
    let value;
    try {
    value = await AsyncStorage.getItem(name);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    console.log(e + 'erro');
  }
  
}
