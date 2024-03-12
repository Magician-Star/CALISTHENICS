import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView, TextInput } from 'react-native-web';
import { Button } from 'react-native-web';

import Home from './src/Home';
const nome = 'Gabriel';
const pagina = Home;
export default function App() {
  return (
    
    <View style={styles.container}>
      <ScrollView>
        <h1>Projeto Calibuilder</h1>
        <Text>Eu me chamo {nome} </Text>
        <TextInput style={{height:40, borderColor:'gray', borderWidth: 1, }} defaultValue="Escreva qualquer coisa aqui..." />
        <Button title='Próxima página' onPress={pagina} />
        <StatusBar style="auto" />
      
      </ScrollView>
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
