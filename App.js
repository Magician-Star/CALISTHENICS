import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-web';


export default function App() {
  return (
    <View style={styles.container}>
      <h1>App criado com React-Native</h1>
      <Text>Insira algum valor</Text>
      <TextInput style={{height:40, borderColor:'gray', borderWidth: 1, }} defaultValue="Escreva qualquer coisa aqui..." />
      <Textarea></Textarea>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
