import { View, Text, StyleSheet } from "react-native";
import React from "react";

const RequerimientosComp = ({ requerimientos = [] }) => {
  console.log(requerimientos);
  return (
    <View style={styles.container}>
      <Text style={styles.Texto}>Sistema Operativo: {requerimientos.os}</Text>
      <Text style={styles.Texto}>Procesador: {requerimientos.processor}</Text>
      <Text style={styles.Texto}>Tarjeta Grafica: {requerimientos.graphics} </Text>
      <Text style={styles.Texto}>Memoria Ram {requerimientos.memory}</Text>
      <Text style={styles.Texto}>Espacio en disco: {requerimientos.storage}</Text>
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
