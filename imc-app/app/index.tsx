import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [peso, setPeso] = useState(70);
  const [altura, setAltura] = useState(170);
  const [imc, setImc] = useState(0);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    const v = peso / ((altura / 100) ** 2);
    setImc(v);
    setMsg(v < 18.5 ? 'Bajo peso' : v < 25 ? 'Peso normal' : v < 30 ? 'Sobrepeso' : 'Obesidad');
  }, [peso, altura]);

  return (
    <View style={s.c}>
      <Text style={s.t}>Calculadora IMC</Text>

      <Text style={s.txt}>Peso: {peso} kg</Text>
      <View style={s.row}>
        <TouchableOpacity style={s.b} onPress={() => setPeso(peso - 1)}><Text style={s.bt}>-</Text></TouchableOpacity>
        <TouchableOpacity style={s.b} onPress={() => setPeso(peso + 1)}><Text style={s.bt}>+</Text></TouchableOpacity>
      </View>

      <Text style={s.txt}>Altura: {altura} cm</Text>
      <View style={s.row}>
        <TouchableOpacity style={s.b} onPress={() => setAltura(altura - 1)}><Text style={s.bt}>-</Text></TouchableOpacity>
        <TouchableOpacity style={s.b} onPress={() => setAltura(altura + 1)}><Text style={s.bt}>+</Text></TouchableOpacity>
      </View>

      <Text style={s.res}>IMC: {imc.toFixed(1)} {"\n"}{msg}</Text>
    </View>
  );
}

const s = StyleSheet.create({
  c: { flex: 1, backgroundColor: '#000', alignItems: 'center', justifyContent: 'center' },
  t: { color: '#00aaff', fontSize: 24, marginBottom: 20 },
  txt: { color: '#fff', fontSize: 18, marginVertical: 5 },
  row: { flexDirection: 'row' },
  b: { backgroundColor: '#00aaff', margin: 5, borderRadius: 8, paddingHorizontal: 15, paddingVertical: 5 },
  bt: { color: '#fff', fontSize: 20 },
  res: { color: '#fff', fontSize: 18, marginTop: 20, textAlign: 'center' }
});
