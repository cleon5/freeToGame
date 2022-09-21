import { View, Text, StyleSheet } from "react-native";
import React from "react";

const RequerimientosComp = ({ requerimientos = [] }) => {
  console.log(requerimientos);
  return (
    <View style={styles.container}>
      <Text style={styles.Texto}>Operating system: {requerimientos.os}</Text>
      <Text style={styles.Texto}>Processor: {requerimientos.processor}</Text>
      <Text style={styles.Texto}>Graphic card: {requerimientos.graphics} </Text>
      <Text style={styles.Texto}>RAM: {requerimientos.memory}</Text>
      <Text style={styles.Texto}>Disc space: {requerimientos.storage}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  Texto: {
    color: "white",
    fontSize: 15,
    paddingBottom: 5,
  },
});

export default RequerimientosComp;
