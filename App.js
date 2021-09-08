import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useState, useEffect } from 'react';

export default function App() {

  const [nome, setNome] = useState("Testing");
  const [a, setA] = useState(1);
  const [b, setB] = useState(2);
  const [res, setRes] = useState(0);

  useEffect(()=>{
    console.log(typeof(a))
    console.log(b)
    // console.log(typeof(res))
    console.log((a+b))
    setRes(a+b)
  },[a, b])

  return (
    <View style={styles.container}>
      <Text style={{color:'white'}}>Bem-vindo, {nome}, {res} </Text>
      <Text style={{color:'white'}}>Bem-vindo, {nome}, {res} </Text>
      <TextInput  style={styles.input} value={nome} onChangeText={setNome}/>
      <TextInput  style={styles.input} keyboardType="numeric" value={a} onChangeText={number => setA(+number)}/>
      <TextInput  style={styles.input} keyboardType="numeric" value={b} onChangeText={number => setB(+number)}/>
      {/* <button style={{height:'50px'}}>Cadastra-se aqui</button> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    backgroundColor: 'white',
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
