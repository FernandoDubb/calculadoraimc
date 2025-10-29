import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ResultadoIMC({ resultado, clasificacion }: { resultado: number | null; clasificacion: string }) {
  return (
    <View style={styles.resultadoContainer}>
      {resultado ? (
        <>
          <Text style={styles.text}>IMC: {resultado.toFixed(2)}</Text>
          <Text style={styles.text}>Clasificación: {clasificacion}</Text>
        </>
      ) : (
        <Text style={styles.text}>Ingresa tus datos para calcular el IMC</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  resultadoContainer: {
    marginTop: 30,
    backgroundColor: "#111",
    padding: 20,
    borderRadius: 12,
    borderColor: "#00aaff",
    borderWidth: 1,
  },
  text: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
});
